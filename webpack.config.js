import RemarkHTML from "remark-html";

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
      {
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
      },
    ],
  },
};