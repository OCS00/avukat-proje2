import { servicesData } from "@/data/servicesData";
import { client } from "@/sanity/client";

export default async function sitemap() {
  const baseUrl = "https://osmanozkaya.av.tr"; // Senin gerçek alan adın

  // Blog yazılarını çek
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);

  // Statik Sayfalar
  const routes = ["", "/hakkimda", "/iletisim", "/blog", "/uzmanliklar"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Uzmanlık Sayfaları
  const services = servicesData.map((service) => ({
    url: `${baseUrl}/uzmanliklar/${service.slug}`,
    lastModified: new Date(),
  }));

  // Blog Sayfaları
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...routes, ...services, ...blogPosts];
}