import { geolocation, ipAddress, next } from '@vercel/edge';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest) {
  const ip = ipAddress(req);
  const response = NextResponse.next();
  const prevLocation = response.cookies.get('location');

  if (prevLocation === undefined || JSON.parse(prevLocation.value).ip !== ip) {
    const { country, latitude, longitude, city } = geolocation(req);
    const location = {
      latitude,
      longitude,
      city,
      ip,
    };
    response.cookies.set('location', JSON.stringify(location) || 'unknown');
  }

  return response;
}
