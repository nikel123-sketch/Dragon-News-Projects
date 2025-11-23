import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Leftassid from "../Component/Leftassid";
import Rightassid from "../Component/Rightassid";
import Home from "../Component/Home";
import CatagoriNews from "../Component/CatagoriNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Navigate to={"/catagorinews/0"}></Navigate>,
      },
      {
        path: "/catagorinews/:id",
        loader: () => fetch("/news.json"),
        Component: CatagoriNews,
      },
    ],
  },
]);