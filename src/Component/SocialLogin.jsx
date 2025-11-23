import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-2 text-xl "> Login With</h1>
      <div className="flex flex-col font-bold gap-2">
        {/* google */}
        <button className="btn btn-outline btn-primary  text-shadow-emerald-500-600">
          <FcGoogle size={24}></FcGoogle>
          Login With Google
        </button>

        {/* github */}
        <button className="btn btn-outline btn-primary">
            <FaGithub size={24}></FaGithub>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
