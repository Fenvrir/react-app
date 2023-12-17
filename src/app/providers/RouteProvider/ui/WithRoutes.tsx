import App from "@/app/App"
import { ErrorPage } from "@/pages/ErrorPage/index"

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import { ThemeProvider } from "@/app/providers/ThemeProvider/index"

export const routes = createBrowserRouter(
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
			<Route path="main" lazy={() => import("@/pages/MainPage/index")} />
			<Route
				path="about"
				lazy={() => import("@/pages/AboutPage/index")}
			/>
			<Route errorElement={<ErrorPage />} />
		</Route>
	)
)
