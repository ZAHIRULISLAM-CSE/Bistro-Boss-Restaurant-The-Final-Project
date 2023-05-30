import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/home/home/Home";
import Cover from "../shared/cover/Cover";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Register from "../pages/register/Register";
import Login from "../login/Login";
import DashBoard from "../shared/dashboard/DashBoard";
import MyCart from "../dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";

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
  {
    path: "dashboard",
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path: "mycart",
        element:<MyCart></MyCart>,
      }
    ]
  }
]);

export default router;
