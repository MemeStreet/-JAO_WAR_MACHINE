// app/api/auth/twitter/route.ts
import { NextResponse } from 'next/server'

const TWITTER_OAUTH_URL = 'https://twitter.com/i/oauth2/authorize'
const CLIENT_ID = process.env.TWITTER_CLIENT_ID!
const REDIRECT_URI = process.env.NEXT_PUBLIC_TWITTER_CALLBACK_URL!

export async function GET() {
  console.log('Twitter auth route hit!')
  
  // Generate a random state for security
  const state = Math.random().toString(36).substring(7)
  
  // Define the scopes we need
  const scopes = [
    'tweet.read',
    'users.read', 
    'like.write',
    'tweet.write',
    'follows.read',
    'offline.access'
  ].join(' ')

  // Build the authorization URL
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scopes,
    state: state,
    code_challenge: 'challenge', // In production, use PKCE
    code_challenge_method: 'plain'
  })

  const authUrl = `${TWITTER_OAUTH_URL}?${params.toString()}`

  // Store state in cookie for verification
  const response = NextResponse.redirect(authUrl)
  response.cookies.set('twitter_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 10 // 10 minutes
  })

  return response
}