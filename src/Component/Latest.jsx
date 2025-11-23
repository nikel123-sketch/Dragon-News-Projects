import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex gap-3 items-center bg-slate-300">
      <p className="bg-red-600 p-2 text-yellow-50">Latest</p>
      <Marquee
        pauseOnHover={true}
        className="font-bold text-shadow-gray-950 text-xl hover:bg-teal-300"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          porro.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          porro.
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
