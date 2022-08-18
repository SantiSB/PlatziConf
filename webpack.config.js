//Path
const path = require('path');
//Plugin HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Elementos de la configuración
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //Punto de entrada
  entry: './src/index.js',
  //Punto de salida (donde se va a guardar la carpeta dist)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    //Extenciones que vamos a utilizar
    extensions: ['.js', '.jsx'],
  },
  //Modo desarrollo
  mode: 'development',
  module: {
    //Reglas
    rules: [
      //JS y JSX
      {
        //Extenciones
        test: /\.(js|jsx)$/,
        //Excluir
        exclude: /node_modules/,
        //Loader a usar
        use: {
          loader: 'babel-loader',
        },
      },
      //HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      //CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  //Plugins
  plugins: [
    //Plugin HTML
    new HtmlWebpackPlugin({
      //Punto de entrada
      template: './public/index.html',
      //Como se va a llamar en la salida
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  //Servidor de trabajo local
  devServer: {
    //static para la ultima versión de webpack
    static: path.join(__dirname, 'dist'),
    //Comprimir
    compress: true,
    historyApiFallback: true,
    //Puerto
    port: 3005,
  },
};
