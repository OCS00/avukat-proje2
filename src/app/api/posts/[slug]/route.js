import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Post from '@/models/Post';

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const post = await Post.findOne({ slug: params.slug }).lean();
    if (!post) return NextResponse.json({ success: false, error: 'Yazı bulunamadı.' }, { status: 404 });
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Yazı getirilemedi.' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    await connectToDatabase();
    const post = await Post.findOneAndUpdate({ slug: params.slug }, body, { new: true });
    if (!post) return NextResponse.json({ success: false, error: 'Yazı bulunamadı.' }, { status: 404 });
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    await Post.findOneAndDelete({ slug: params.slug });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Silme başarısız.' }, { status: 500 });
  }
}
