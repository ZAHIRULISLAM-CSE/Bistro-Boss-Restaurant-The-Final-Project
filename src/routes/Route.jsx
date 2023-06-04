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
import Users from "../shared/dashboard/pages/Users";
import AdminRoute from "./AdminRoute";
import AddAnItem from "../dashboard/AddAnItem";
import ManageItems from "../dashboard/ManageItems";
import Payment from "../dashboard/Payment";
import AdminHome from "../dashboard/AdminHome";
import UserHome from "../dashboard/UserHome";

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
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
          path:"payment",
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path:"userhome",
        element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
    },

      //admin
      {
        path: "adminhome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "users",
        element:<AdminRoute><Users></Users></AdminRoute>
      },
      {
        path:"additem",
        element:<AdminRoute><AddAnItem></AddAnItem></AdminRoute>
      },
      {
        path:"manageitems",
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);

export default router;
