/** @type {import('next').NextConfig} */

const RemarkHTML = import("remark-html");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "remark-loader",
          options: {
            remarkOptions: {
              plugins: [RemarkHTML],
            },
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
