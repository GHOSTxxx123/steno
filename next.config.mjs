/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: "https://10.0.1.21:3001",
    }, 
};

export default nextConfig;
