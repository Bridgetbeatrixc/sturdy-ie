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
      ...(process.env.PAYLOAD_DOMAIN
        ? [
            {
              protocol: "https" as const,
              hostname: process.env.PAYLOAD_DOMAIN,
              pathname: "/**",
            },
          ]
        : []),
      {
        protocol: "https",
        hostname: "pub-25bc5e46522a4dca8af55c1c2bd5dd40.r2.dev",
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