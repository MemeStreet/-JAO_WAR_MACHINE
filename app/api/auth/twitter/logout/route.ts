// app/api/auth/twitter/logout/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  
  // Remove all Twitter-related cookies
  cookieStore.delete('twitter_access_token')
  cookieStore.delete('twitter_refresh_token')
  cookieStore.delete('twitter_user')
  cookieStore.delete('twitter_oauth_state')
  
  return NextResponse.json({ success: true })
}