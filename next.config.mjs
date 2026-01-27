// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    images: {
//     domains: ["www.themealdb.com"],
//   },
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
      {
        protocol: "https",
        hostname: "taxi-kitchen-api.vercel.app",
      },
    ],
  },
};

export default nextConfig;
