import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types/config"

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
	return {
		port,
		open: true,
		// Нужно чтобы исправить ошибку Cannot GET,
		// после подключения react-router-dom
		historyApiFallback: true,
	}
}
