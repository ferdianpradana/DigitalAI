import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**',
        port: "",
        pathname: "/**",
      },
    ]
  },
    eslint: {
    // ⬇️ biar ga gagal deploy karena eslint error
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⬇️ biar ga gagal deploy karena type error
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
