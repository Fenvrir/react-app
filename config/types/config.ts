type BuildMode = "development" | "production"

type BuildPaths = {
	entry: string
	dist: string
	html: string
}

interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
    isDev: boolean
}

export type { BuildMode, BuildPaths, BuildOptions }
