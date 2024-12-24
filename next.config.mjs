/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/studio",
        destination: "/studio/desk", // Redirect to the Sanity Studio desk page
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
