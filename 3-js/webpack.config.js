const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets/js'),
    clean: true,
    publicPath: '/',
  }
};