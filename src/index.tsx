import { createRoot } from "react-dom/client"
import { AppRoutes } from "./app/providers/Routers"
import { RouterProvider } from "react-router-dom"

const root = createRoot(document.getElementById("root")!)

root.render(<RouterProvider router={AppRoutes} />)
