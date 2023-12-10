import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/buildWebpackConfig"
import { BuildEnv, BuildMode, BuildPaths } from "./config/types/config"

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		html: path.resolve(__dirname, "public", "index.html"),
		dist: path.resolve(__dirname, "dist"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
	}

	const mode: BuildMode = env.mode || "development"
	const port = env.port || 3000

	const isDev = mode === "development"

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	})

	return config
}
