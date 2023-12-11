import { createRoot } from "react-dom/client"
import App from "./App"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"
import ThemeProvider from "./theme/ThemeProvider"

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<ThemeProvider>
					<App />
				</ThemeProvider>
			}
		>
			{/* Lazy loiading в react-router 6.4 делается с помощью пропса lazy */}
			<Route
				path="main"
				lazy={() => import("./pages/MainPage/MainPage")}
			/>
			<Route
				path="about"
				lazy={() => import("./pages/AboutPage/AboutPage")}
			/>
			<Route errorElement={<ErrorPage />} />
		</Route>
	)
)

const root = createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routes} />)
