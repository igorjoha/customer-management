import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/customer-management",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
