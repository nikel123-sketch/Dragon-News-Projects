import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Leftassid from "../Component/Leftassid";
import Rightassid from "../Component/Rightassid";
import Home from "../Component/Home";
import CatagoriNews from "../Component/CatagoriNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";
import NewsDetails from "../Layout/NewsDetails";
import PrivetRoute from "../AuthProviderLayout/PrivetRoute";
import Lodding from "../Component/Lodding";

export const router = createBrowserRouter([
  // home layout---
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/catagorinews/0"}></Navigate>,
      },
      {
        path: "/catagorinews/:id",
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Lodding></Lodding>,
        Component: CatagoriNews,
      },
    ],
  },

  // auth layout----
  {
    path: "/authlayout",
    Component: AuthLayout,
    children: [
      {
        path: "/authlayout/login",
        Component: Login,
      },
      {
        path: "/authlayout/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/NewsDetails/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Lodding></Lodding>,
    element: (
      <PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>
    ),
  },
]);
