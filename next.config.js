/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "#",
  output: "export",
  // images: {
  //   loader: "custom",
  //   loaderFile: "./my-loader.ts",
  // },
  images: {
    unoptimized: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://healthvalors.sonicgroup.co.in/",
        port: "",
      },
    ],
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "healthvalors.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
