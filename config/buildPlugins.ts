import { BuildPaths } from "./types/config"
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	]
}