import { RouteProps } from "react-router-dom"
import { ValueOf } from "type-fest"

const AppRoutes = {
	MAIN: "main",
	ABOUT: "about",
} as const

type AppRoute = ValueOf<typeof AppRoutes>

export const RoutePath: Record<AppRoute, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "about",
}

export const RouteConfig: Record<AppRoute, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		lazy: () => import("@/pages/MainPage/index"),
	},
    [AppRoutes.ABOUT]: {
		path: RoutePath.about,
		lazy: () => import("@/pages/AboutPage/index"),
	},
}
