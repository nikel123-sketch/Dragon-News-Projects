import React, { use } from "react";
import { NavLink } from "react-router";

const catagorypromise = fetch("/categories.json").then((res) => res.json());
const Caterogy = () => {
  const catagores = use(catagorypromise);

  return (
    <div>
      <h1 className="font-bold text-xl">All Caterogy</h1>

      <div className="grid grid-cols-1 bg-[#f3f3f3]">
        {catagores.map((catagori) => (
          <NavLink
            to={`/catagorinews/${catagori.id}`}
            key={catagori.id}
            className="btn font-semibold border-0 hover:bg-gray-400"
          >
            {catagori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Caterogy;
