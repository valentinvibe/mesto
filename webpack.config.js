<<<<<<< HEAD
const path = require('path');

module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}
=======
// const path = require('path'); // подключаем path к конфигу вебпак
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     entry: { main: './src/index.js' },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js'
// },
// module: {
//     rules: [ // rules — это массив правил
//       // добавим в него объект правил для бабеля
//       {
//         // регулярное выражение, которое ищет все js файлы
//         test: /\.js$/,
//         // при обработке этих файлов нужно использовать babel-loader
//         loader: 'babel-loader',
//         // исключает папку node_modules, файлы в ней обрабатывать не нужно
//         exclude: '/node_modules/'
//       },
//       // добавили правило для обработки файлов
//     {
//       // регулярное выражение, которое ищет все файлы с такими расширениями
//       test: /\.(png|svg|jpg|gif|woff2|woff)$/,
//       // при обработке этих файлов нужно использовать file-loader
//       loader: 'file-loader'
//     },
//     // аналогично добавьте правило для работы с html
//     {
//       test: /\.html$/,
//       loader: 'html-loader',
//     },

//     {
//       // применять это правило только к CSS-файлам
//         test: /\.css$/,
//       // при обработке этих файлов нужно использовать
//       // MiniCssExtractPlugin.loader и css-loader
//         loader:  [MiniCssExtractPlugin.loader, {
//           loader: 'css-loader',
//           // добавьте объект options
//           options: { importLoaders: 1 }
//         }, 
//         'postcss-loader'
//       ],
//     },
//     },
// plugins: [
//   new HtmlWebpackPlugin({
//     template: './index.html' // путь к файлу index.html
//   }),
//   new MiniCssExtractPlugin()
// ] 
//     ]
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|woff2|woff)$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
>>>>>>> 71b78fd5e89a0f62a065332eac08825f214b89d7
