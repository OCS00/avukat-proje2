/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Tasarım resimleri
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Blog resimleri
      },
    ],
  },
};

export default nextConfig;