// app/api/auth/twitter/callback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const TWITTER_TOKEN_URL = 'https://api.twitter.com/2/oauth2/token'
const CLIENT_ID = process.env.TWITTER_CLIENT_ID!
const CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET!
const REDIRECT_URI = process.env.NEXT_PUBLIC_TWITTER_CALLBACK_URL!

// Extract base URL from the callback URL
const getBaseUrl = () => {
  // Remove the /api/auth/twitter/callback path from the redirect URI
  return REDIRECT_URI.replace('/api/auth/twitter/callback', '')
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  
  // Get cookies
  const cookieStore = await cookies()
  
  // Verify state matches
  const savedState = cookieStore.get('twitter_oauth_state')?.value
  
  // Use the base URL for all redirects
  const baseUrl = getBaseUrl()
  
  if (!code || !state || state !== savedState) {
    return NextResponse.redirect(`${baseUrl}/dashboard?error=invalid_request`)
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(TWITTER_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        code_verifier: 'challenge' // Must match the challenge from auth route
      })
    })

    const tokenData = await tokenResponse.json()
    console.log('Token response:', tokenResponse.status, tokenData)

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData)
      return NextResponse.redirect(`${baseUrl}/dashboard?error=token_exchange_failed`)
    }

    // Get user info
    const userResponse = await fetch('https://api.twitter.com/2/users/me?user.fields=profile_image_url', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`
      }
    })

    const userData = await userResponse.json()
    console.log('User response:', userResponse.status, userData)

    if (!userResponse.ok) {
      console.error('Failed to get user data:', userData)
      return NextResponse.redirect(`${baseUrl}/dashboard?error=user_fetch_failed`)
    }

    // Store Twitter data in cookies
    const cookieStoreWrite = await cookies()
    
    cookieStoreWrite.set('twitter_access_token', tokenData.access_token, {
      httpOnly: true,
      secure: false, // Allow in development
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })
    
    cookieStoreWrite.set('twitter_refresh_token', tokenData.refresh_token || '', {
      httpOnly: true,
      secure: false, // Allow in development
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/'
    })

    // Store user info
    cookieStoreWrite.set('twitter_user', JSON.stringify({
      id: userData.data.id,
      username: userData.data.username,
      name: userData.data.name,
      profile_image_url: userData.data.profile_image_url
    }), {
      httpOnly: false, // Allow client to read this
      secure: false, // Allow in development
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })

    // Redirect to dashboard using the base URL
    return NextResponse.redirect(`${baseUrl}/dashboard`)
  } catch (error) {
    console.error('OAuth callback error:', error)
    return NextResponse.redirect(`${baseUrl}/dashboard?error=oauth_error`)
  }
}