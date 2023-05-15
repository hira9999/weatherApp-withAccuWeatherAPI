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
  const prevLocation = response.cookies.get('location');

  if (prevLocation === undefined || JSON.parse(prevLocation.value).ip !== ip) {
    response.cookies.set('location', JSON.stringify(location) || 'unknown');
  }

  return response;
}
