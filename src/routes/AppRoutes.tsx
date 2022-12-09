import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route
} from "react-router-dom"
import ErrorRoute from "./Error"
import Root from "./root/RootRoute"
import StashRoute, { stashLoader } from "./stash/StashRoute"

const shouldRevalidate = ({
  currentUrl,
  nextUrl
}: {
  currentUrl: URL
  nextUrl: URL
}) => {
  return false
}

const routes = createRoutesFromElements(
  <Route
    path="*"
    // loader={rootLoader}
    element={<Root />}
    shouldRevalidate={shouldRevalidate}
    errorElement={<ErrorRoute />}
  >
    <Route loader={stashLoader} index element={<StashRoute />} />
  </Route>
)

const router = createBrowserRouter(routes)

export default router
