import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { password } = await request.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: 'Hatalı şifre.' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_auth', process.env.ADMIN_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: '/',
  });

  return NextResponse.json({ success: true });
}
