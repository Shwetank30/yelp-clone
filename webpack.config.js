const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
      join = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

// creating path variables to help us optimise our configuration
// when we start modifying it from default setup
const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dest = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
// alternatively we can use process.argv[1]
// const isDev = (process.argv[1] || '').indexOf('hjs-dev-server') !== -1;

//..

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),  // entry file
  out: dest, // path to a directory to generate files
  clearBeforeBuild: true
})

// exporting a configuration object as webpack expects us to so that it can
// access the config variable
module.exports = config;
