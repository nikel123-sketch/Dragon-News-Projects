import React, { Suspense } from "react";
import Caterogy from "./Caterogy";

const Leftassid = () => {
  return (
    <div className="">
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Caterogy></Caterogy>
      </Suspense>
    </div>
  );
};

export default Leftassid;
