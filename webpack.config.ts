import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/buildWebpackConfig"
import { BuildMode, BuildPaths } from "./config/types/config"

const paths: BuildPaths = {
	html: path.resolve(__dirname, "public", "index.html"),
	dist: path.resolve(__dirname, "dist"),
	entry: path.resolve(__dirname, "src", "index.ts"),
}

const mode: BuildMode = "development"
const isDev = mode === "development"

const config: webpack.Configuration = buildWebpackConfig({ mode, paths, isDev })

export default config
