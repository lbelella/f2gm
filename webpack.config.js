const path = require('path');

module.exports = {
  entry: './src/f2gm.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};