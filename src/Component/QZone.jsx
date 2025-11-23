import React from "react";
import swimming from '../assets/swimming.png';
import classs from '../assets/class.png'
import play from '../assets/playground.png'
import bg from '../assets/bg.png'
const QZone = () => {
  return (
    <div className="mt-5 bg-gray-200 p-4">
      <h1 className="font-bold text-xl ">Q-Zone</h1>

      <div>
        <img className="mt-3" src={swimming} alt="" />
        <img className="mt-3" src={classs} alt="" />
        <img className="mt-3" src={play} alt="" />
        <img className="mt-3" src={bg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
