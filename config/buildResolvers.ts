import { ResolveOptions } from "webpack"

export function buildResolvers(): ResolveOptions {
	return {
		// Позволяет не указывать расширения при импорте.
		extensions: [".tsx", ".ts", ".js"],
	}
}
