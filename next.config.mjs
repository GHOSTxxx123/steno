/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: "http://10.0.1.21:8898",
    }, 
};

export default nextConfig;
