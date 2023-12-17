type BuildMode = "development" | "production"

type BuildPaths = {
	entry: string
	dist: string
	html: string
	src: string
}

type BuildEnv = {
	port: number
	mode: BuildMode
}

interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
    isDev: boolean
	port: number
}

export type { BuildMode, BuildPaths, BuildOptions, BuildEnv }
