
import "./index.scss"
import { Link, Outlet } from "react-router-dom"



function App() {
	return (
		<div className="app">
			<Link to={`/main`}>Main</Link>
			<Link to={`/about`}>About</Link>
			<Link to={`/asdsa`}>Fake</Link>

            <Outlet />
		</div>
	)
}

export default App
