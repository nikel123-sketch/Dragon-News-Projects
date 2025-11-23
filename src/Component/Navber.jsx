import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navber = () => {
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="flex flex-row gap-3  font-bold">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={user} alt="" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navber;
