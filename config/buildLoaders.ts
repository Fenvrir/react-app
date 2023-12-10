import webpack from "webpack"
export function buildLoaders(): webpack.RuleSetRule[] {
	// Лоадеры нужны выносить в переменные,
	// потому что важен порядок их вызова.
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	return [typeScriptLoader, sassLoader]
}
