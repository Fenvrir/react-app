import path from "path"
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

// const path = require("path")
// const webpack = require("webpack")
// const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	//Указываем путь до __dirname == рабочая директория и участков путей (src и index.js).
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},

	devtool: "inline-source-map",
	resolve: {
		// Позволяет не указывать расширения при импорте.
		extensions: [".tsx", ".ts", ".js"],
	},
	entry: path.resolve(__dirname, "src", "index.ts"),
	output: {
		filename: "[name][contenthash].js",
		path: path.resolve(__dirname, "dist"),
		// Очищаем dist
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new webpack.ProgressPlugin(),
	],
}
