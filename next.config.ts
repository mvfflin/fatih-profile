import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    localPatterns: [
      {
        pathname: "../assets/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
