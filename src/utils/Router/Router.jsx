import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../../views/Home/Home"
import Tasks from "../../views/Tasks/Tasks"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: '/tasks', element: <Tasks />}
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
