import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" />
      <p className="font-bold">Journalism Without Fear or Favour</p>

      <p>{format(new Date,'EEEE-MMMM-MM-yyyy')}</p>
    </div>
  );
};

export default Header;
