//Path
const path = require("path");
//Requerir Plugin HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
//Requerir Plugin CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Elementos de la configuración
module.exports = {
  //Punto de entrada
  entry: "./src/index.js",
  //Punto de salida (donde se va a guardar la carpeta dist)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    //Extenciones que vamos a utilizar
    extensions: [".js", ".jsx"],
  },
  //Modo desarrollo
  mode: "development",
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
          loader: "babel-loader",
        },
      },
      //HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  //Plugins
  plugins: [
    //Plugin HTML
    new HtmlWebpackPlugin({
      //Punto de entrada
      template: "./public/index.html",
      //Como se va a llamar en la salida
      filename: "./index.html",
    }),
    //Plugin CSS
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
  //Servidor de trabajo local
  devServer: {
    //static para la ultima versión de webpack
    static: path.join(__dirname, "dist"),
    //Comprimir
    compress: true,
    //Puerto
    port: 3005,
  },
};
