/** @type {import('next').NextConfig} */
import path from "path"
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack: (config, { isServer }) => {
      // Move the styles to the `src` directory
      if (!isServer) {
          config.resolve.alias["@styles"] = path.resolve(
              process.cwd(),
              "src/styles"
          );
      }
      return config;
  },
};

export default nextConfig;
