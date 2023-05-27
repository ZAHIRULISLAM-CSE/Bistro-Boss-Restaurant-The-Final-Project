import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/home/home/Home";
import Cover from "../shared/cover/Cover";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Register from "../pages/register/Register";
import Login from "../login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:catagory",
        element: <Order></Order>,
      },
      {
        path: "register",
        element:<Register></Register>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
    ],
  },
]);

export default router;
