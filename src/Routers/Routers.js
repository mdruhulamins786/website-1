import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Profile from "../Others/Profile/Profile";
import Category from "../pages/Category/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("http://localhost:5000/news");
        },
        element: <Home />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <Category />,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
