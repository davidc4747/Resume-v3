const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
      publicPath: "/public/",
  },
  module: {
    rules: [
        { 
            test: /\.css$/, 
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader', options: { importLoaders: 1 } },
                { loader: 'postcss-loader' }
            ] 
        }
    ]
  }
}