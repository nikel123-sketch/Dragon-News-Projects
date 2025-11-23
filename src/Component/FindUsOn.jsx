import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-xl">Find Us On</h1>

      <div className="flex flex-col  border-1 border-gray-50 mt-5 justify-start">
        <button className="btn justify-start text-xl">
          <FaFacebook /> Facebook
        </button>
        <button className="btn justify-start text-xl">
          <FaTwitter /> Twitter
        </button>
        <button className="btn justify-start text-xl">
          <FaInstagramSquare /> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
