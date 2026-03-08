import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: process.env.PAYLOAD_DOMAIN ?? "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/writing", destination: "/myinsights" },
      { source: "/writing/:path*", destination: "/myinsights/:path*" },
    ];
  },
};

export default nextConfig;