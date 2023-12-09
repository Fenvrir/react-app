import webpack from "webpack"
export function buildLoaders(): webpack.RuleSetRule[] {
	// Лоадеры нужны выносить в переменные,
	// потому что важен порядок их вызова.
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	return [typeScriptLoader]
}
