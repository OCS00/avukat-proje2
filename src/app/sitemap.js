import { servicesData } from "@/data/servicesData";
import { connectToDatabase } from "@/lib/db";
import Post from "@/models/Post";
import { siteConfig } from "@/data/siteConfig";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  await connectToDatabase();
  const posts = await Post.find({}, { slug: 1, publishedAt: 1 }).lean();

  const routes = ["", "/hakkimda", "/iletisim", "/blog", "/uzmanliklar"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const services = servicesData.map((service) => ({
    url: `${baseUrl}/uzmanliklar/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...routes, ...services, ...blogPosts];
}
