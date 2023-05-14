import { geolocation, ipAddress, next } from '@vercel/edge';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const latitude = geo?.latitude || '';
  const longitude = geo?.longitude || '';

  const response = NextResponse.next();

  url.searchParams.set('latitude', latitude);
  url.searchParams.set('longitude', longitude);
  return NextResponse.rewrite(url);
}
