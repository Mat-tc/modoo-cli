/* eslint-disable no-undef */
const path = require("path")

module.exports = {
  entry: {
    app: ["./src/index.js", "./src/test.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "none",

  module: {
    rules: [
      {
        test: /\.p?css$/, //css 파일을 선택하는 정규표현식
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {},
            },
          }, // postcss 적용하기
        ],
      },
    ],
  },
}
