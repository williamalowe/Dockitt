import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../views/Home/Home";
import Tasks from "../../views/Tasks/Tasks";
import Error from "../../views/Error/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: '/tasks', element: <Tasks />}
      ],
      errorElement: <Error />
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
