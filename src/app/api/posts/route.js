import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Post from '@/models/Post';

export async function GET() {
  try {
    await connectToDatabase();
    const posts = await Post.find({}).sort({ publishedAt: -1 }).lean();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Yazılar getirilemedi.' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    const post = await Post.create(body);
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
