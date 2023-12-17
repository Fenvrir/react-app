import { createRoot } from "react-dom/client"
import { WithRoutes } from "./app/providers/RouteProvider"
import { RouterProvider } from "react-router-dom"

const root = createRoot(document.getElementById("root")!)

root.render(<RouterProvider router={WithRoutes} />)
