import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [{ module: /node_modules\/punycode/ }];
    return config;
  },
};

export default nextConfig;
