import { geolocation, ipAddress, next } from '@vercel/edge';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: Request) {
  const { country, latitude, longitude, city } = geolocation(req);
  const ip = ipAddress(req);
  const location = { country, latitude, longitude, city, ip };
  const response = NextResponse.next();

  response.cookies.set('location', JSON.stringify(location) || 'unknown');
  return response;
}
