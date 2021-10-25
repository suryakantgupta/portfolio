const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Config: path.resolve(__dirname, 'src/config/*'),
    },
  },
};