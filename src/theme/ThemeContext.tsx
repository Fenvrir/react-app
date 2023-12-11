import { createContext } from "react"

const LOCAL_STORAGE_THEME_KEY = "theme"
const THEME = {
	basic: "basic",
	dark: "dark",
} as const


type ThemeType = keyof typeof THEME

interface ThemeContextProps {
	theme?: ThemeType
	setTheme?: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextProps>({})

export type { ThemeType, ThemeContextProps }

export { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEME }
