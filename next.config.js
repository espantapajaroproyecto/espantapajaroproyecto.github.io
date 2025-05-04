/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out", // GitHub Pages sirve desde /docs
  images: {
    unoptimized: true, // porque no hay server
  },
  trailingSlash: true,
};

module.exports = nextConfig;
