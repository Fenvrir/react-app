import "./styles/index.scss"
import { Link, Outlet } from "react-router-dom"
import { useTheme } from "@/app/providers/ThemeProvider/index"
import { classNames } from "@/shared/lib/className"

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		// TODO: TS-strict
		<div className={classNames('app', {}, [theme!])}>
			<Link to={`/main`}>Main</Link>
			<Link to={`/about`}>About</Link>
			<Link to={`/asdsa`}>Fake</Link>
			<button style={{ marginLeft: "20px" }} onClick={toggleTheme}>
				Change Theme
			</button>
			<Outlet />
		</div>
	)
}

export default App
