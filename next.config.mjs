/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["www.zanapo.cz", "zanapo.cz", "files.smartsuppcdn.com"],
  },
};

export default nextConfig;
