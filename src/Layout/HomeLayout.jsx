import React from "react";
import Header from "../Component/Header";
import Latest from "../Component/Latest";
import Navber from "../Component/Navber";
import { Outlet, useNavigation } from "react-router";
import Leftassid from "../Component/Leftassid";
import Rightassid from "../Component/Rightassid";
import Lodding from "../Component/Lodding";

const HomeLayout = () => {
  const {state}=useNavigation()
  return (
    <div className="">
      {/* header */}
      <header>
        {/* header */}
        <div className="max-w-11/12 mx-auto">
          <Header></Header>
          <p>{import.meta.env.VITE_NAME}</p>

          {/* latest  */}
          <div className="max-w-11/12 mx-auto mt-4">
            <Latest></Latest>
          </div>

          {/* navber */}

          <div className="max-w-11/12 mx-auto mt-4">
            <Navber></Navber>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="max-w-11/12 mx-auto gap-3  grid grid-cols-12  mt-4">
        <div className="col-span-3 sticky top-0 h-fit">
          <Leftassid></Leftassid>
        </div>
        <div className="col-span-6">
          {state == "loading" ? <Lodding></Lodding> : <Outlet></Outlet>}
        </div>
        <div className="col-span-3 sticky top-0 h-fit">
          <Rightassid></Rightassid>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
