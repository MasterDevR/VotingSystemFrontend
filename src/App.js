import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./rootPage";

// style
import "./Components/css/app.css";

import Dashboard from "./Components/pages/Dashboard";
import Position from "./Components/pages/Position";

// login page
import Login, { LoginAction } from "./Components/pages/Login";
const Router = createBrowserRouter([
  {
    // login
    path: "Login",
    action: LoginAction,
    element: <Login />,
  },
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Postion",
        element: <Position />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;

// functionality
//
