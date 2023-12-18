import "./styles/index.scss"
import { Outlet } from "react-router-dom"
import { useTheme } from "@/app/providers/ThemeProvider/index"
import { classNames } from "@/shared/lib/className"
import { NavBar } from "@/widgets/NavBar"

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		// TODO: TS-strict
		<div className={classNames("app", {}, [theme!])}>
			<NavBar />
			<button style={{ marginLeft: "20px" }} onClick={toggleTheme}>
				Change Theme
			</button>
			<Outlet />
		</div>
	)
}

export default App
