import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookie = request.cookies.get('admin_auth');
  const password = process.env.ADMIN_PASSWORD;

  if (!cookie || cookie.value !== password) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
