import React from "react";
import Navber from "../Component/Navber";
import Login from "../Component/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-2 bg-[#f3f3f3] min-h-screen p-5">
        {/* header */}
      <header>
        <Navber></Navber>
      </header>

        {/* main */}

        <main>

            <Outlet></Outlet>

        </main>
      
    </div>
  );
};

export default AuthLayout;
