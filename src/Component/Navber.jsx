import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userlogo from "../assets/user.png";
import { Authcontex } from "../AuthProviderLayout/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  
  const { user, logout } = use(Authcontex);


  // logouthendle---
  const logouthendle=()=>{
    logout()
    .then(()=>{
      Swal.fire({
        title: "Login Sucessfull!",
        icon: "success",
        draggable: true,
      });
     

      
    })
    .catch(()=>{
     
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });

    })
  }
  return (
    <div className="flex items-center justify-between">
      <div></div>

      <div className="flex flex-row gap-3  font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      


      <div className="flex items-center gap-2">
        <img
          className="rounded-4xl h-15 w-15 border-2"
          src={`${user ? user.photoURL : userlogo}`}
          alt=""
        />

        {user ? (
          <Link
            onClick={logouthendle}
            className="btn font-bold"
            to="/authlayout/login"
          >
            Logout
          </Link>
        ) : (
          <Link className="btn font-bold" to="/authlayout/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
