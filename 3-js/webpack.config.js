const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/app/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets/js'),
  },
};