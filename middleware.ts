import { geolocation, ipAddress } from '@vercel/edge';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest) {
  const ip = ipAddress(req);
  const response = NextResponse.next();
  const prevLocation = response.cookies.get('location');
  const { nextUrl: url } = req;

  if (prevLocation === undefined || JSON.parse(prevLocation.value).ip !== ip) {
    const { country, latitude, longitude, city } = geolocation(req);
    const location = {
      latitude,
      longitude,
      city,
      ip,
    };
    response.cookies.set('location', JSON.stringify(location) || 'unknown');

    url.searchParams.set('latitude', latitude || '');
    url.searchParams.set('longitude', longitude || '');
    return NextResponse.rewrite(url);
  }

  return response;
}
