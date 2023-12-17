const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    mode: isProduction ? 'production' : 'development', // Add the mode option
    devtool: isProduction ? undefined : 'eval-source-map', // Add the devtool option
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public', // Update the output path to the 'public' folder
    },
    module: {
      rules: [
        {
          test: /\.(sc|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin loader instead of 'style-loader'
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'assets/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: '../public/index.html', // Change the output path of the HTML file to the 'public' folder
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css', // Output the extracted CSS to 'styles.css' in the 'public' folder
      }),
      ...(isProduction
        ? [
            new ImageminWebpackPlugin({
              test: /\.(jpe?g|png|gif|svg)$/i,
            }),
          ]
        : []),
    ],
    devServer: {
      static: './public', // Update the contentBase to the 'public' folder
    },
  };
};
