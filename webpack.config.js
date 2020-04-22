const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  //указываем абсолютный путь
  mode: 'development',
  //режим разработки разработка        
  entry: {'index':'./index.js',},
  //путь на вход файла
  output: {
    path: path.resolve(__dirname, 'dist/'),
    //путь
    filename: 'bundle.js'
    //имя
  },
  //что получаем на выходе
  resolve: {
    extensions: ['.js', '.png', '.json', '.css'],
    //можем указать  с какими  рассширениями работаем 
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  //оптимизируем конечный файл
  devServer: {
    port: 4200
  },
  plugins: [
    // подключаем плагины
    new HTMLWebpackPlugin({
      title: 'Rizzoma',
      template: './index.html'     //указываем  на контент html
    }),
    //плагин для html 
    new CleanWebpackPlugin(),
    //плагин для очистки
    new CopyWebPackPlugin([{
      from: path.resolve(__dirname, 'src/favicon.ico'),
      to: path.resolve(__dirname, 'dist')
    },
    {
      from: path.resolve(__dirname, 'src/views/*'),
      to: path.resolve(__dirname, 'dist/')
    },
    {
      from: path.resolve(__dirname, 'src/views/**/*'),
      to: path.resolve(__dirname, 'dist/')
    },
    {
      from: path.resolve(__dirname, 'src/styles/css/style.css'),
      to: path.resolve(__dirname, 'dist/styles/css/style.css')
    }
    ])
    //плагин копирует иконку в дист
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {},
        },
      },
      {
        test: /\.(ejs)$/,
        include: path.join(__dirname, 'src/views/'),
        use: {
          loader: 'ejs-webpack-loader',
          options: {},
        },
      },
      {
        test: /\.css$/,
        //если webpack встречает в import .css
        use: ['style-loader', 'css-loader']
        //используем лоадеры что бы  вебпак понял что такое формат css
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  }
};