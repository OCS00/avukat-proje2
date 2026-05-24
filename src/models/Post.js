import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    overview: { type: String, required: true },
    content: { type: String, required: true },
    mainImage: { type: String, default: '' },
    category: { type: String, default: 'Genel' },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
