/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["www.zanapo.cz", "placehold.jp"], // Add your external image domains here
  },
};

export default nextConfig;
