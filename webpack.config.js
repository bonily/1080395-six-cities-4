const path = require(`path`);
const pathInfo = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: pathInfo,
  },
  resolve: {
    extensions: [`.jsx`],
  },
  devServer: {
    contentBase: pathInfo,
    open: true,
    inline: true,
    port: 1337
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};


