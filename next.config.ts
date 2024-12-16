import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix or set it to undefined for static exports
  assetPrefix: undefined,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Ignore punycode warning
    config.ignoreWarnings = [{ module: /node_modules\/punycode/ }];
    return config;
  },
};

export default nextConfig;
