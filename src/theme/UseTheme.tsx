import { useContext } from "react"
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME,
	ThemeContext,
	ThemeType,
} from "./ThemeContext"

interface UseThemeResiult {
	theme?: ThemeType
	toggleTheme: () => void
}

export function useTheme(): UseThemeResiult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === THEME.basic ? THEME.dark : THEME.basic
		// TODO: как работает эта конструкция ? 
		// ts-config кидает ошибку
		setTheme!(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, toggleTheme }
}
