
import { NextResponse } from 'next/server';
import { getGoogleUser } from '@/auth/social/googleAuth';
import { googleLoginRegister } from '@/auth/core/auth';
import { cookies } from 'next/headers';
import config from '@/config';

export async function GET(request) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }
  
  try {
    const googleUser = await getGoogleUser(code);
    const response = await googleLoginRegister(googleUser.email, googleUser.name);
    const data = await response.json()
    const cookieStore = cookies();
    cookieStore.set('refreshToken', data.user.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: '/',
      });
    //  Redirect to the home page or dashboard
    return NextResponse.redirect(new URL( config.redirectUrl, request.url));
        

  } catch (error) {
    console.error('Google authentication error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}