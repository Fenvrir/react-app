import React, { FC, useMemo, useState } from "react"
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME,
	ThemeContext,
	ThemeType,
} from "@/shared/config/ThemeContext"

interface Props {
	children: React.ReactNode
}

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || THEME.dark

export const ThemeProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>(defaultTheme)

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
