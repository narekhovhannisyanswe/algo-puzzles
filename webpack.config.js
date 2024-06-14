import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const webpackConfig = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
    clean: true
  }
};

export default webpackConfig;