import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../views/Home/Home";
import Tasks from "../../views/Tasks/Tasks";
import Error from "../../views/Error/Error";
import Default from "../../views/Default/Default";
import Dashboard from "../../views/Dashboard/Dashboard";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        { index: true, element: <Default /> },
        { path: '/tasks', element: <Tasks /> },
        { path: '/dashboard', element: <Dashboard /> }
      ],
      errorElement: <Error />
    }
  ])
  return <RouterProvider router={router} />
}

export default Router
