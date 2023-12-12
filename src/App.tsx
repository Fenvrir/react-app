import { useContext } from "react"
import "./styles/index.scss"
import { Link, Outlet } from "react-router-dom"
import { THEME, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/UseTheme"

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
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
