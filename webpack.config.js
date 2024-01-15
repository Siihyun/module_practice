const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "main.js", // 빌드 후 생성될 파일 이름
    path: path.resolve(__dirname, "dist"), // 빌드 파일이 생성 될 경로
  },
  mode: "development",
  plugins: [
    //  html 파일 모듈화를 위해 플러그인 적용
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
