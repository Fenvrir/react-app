import App from "@/app/App"
import { ErrorPage } from "@/pages/ErrorPage/index"

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import { RouteConfig } from "@/app/providers/Routers/index"
import { ThemeProvider } from "@/app/providers/ThemeProvider/ui/ThemeProvider"

console.log(RouteConfig)

const paths = {
	main: () => import("@/pages/MainPage/index"),
}

export const AppRoutes = createBrowserRouter(
	createRoutesFromElements(
		// TODO: Переписать роуты на версию 6.4
		<Route
			path="/"
			element={
				<ThemeProvider>
					<App />
				</ThemeProvider>
			}
		>
			{/* Lazy loiading в react-router 6.4 делается с помощью пропса lazy */}
			<Route path="/" lazy={paths.main} />
			<Route
				path="about"
				lazy={() => import("@/pages/AboutPage/index")}
			/>
			<Route errorElement={<ErrorPage />} />
		</Route>
	)
)
