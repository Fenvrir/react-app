import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options

    return {
		//Указываем путь до __dirname == рабочая директория и участков путей (src и index.js).
		mode,
		entry: paths.entry,
		output: {
			filename: "[name][contenthash].js",
			path: paths.dist,
			// Очищаем dist
			clean: true,
		},
		devtool: "inline-source-map",
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(paths),
	}
}
