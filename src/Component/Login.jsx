import React, {  use, useState } from "react";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link,  useLocation,  useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Authcontex } from "../AuthProviderLayout/AuthProvider";

const Login = () => {
  const nagigate=useNavigate()
  const location=useLocation()
  
  // fire--
  const { Loginuser, seterror, setuser } = use(Authcontex);
  
  // state--
  const [eyebtnclick, seteyebtnclick] = useState(false);
  const [checkclick, setcheckclick] = useState(false);

  // eyebtnhendle----
  const eyebtnhendle = (e) => {
    e.preventDefault();
    seteyebtnclick(!eyebtnclick);
  };

  //   checkboxhendle
  const checkboxhendle = () => {
    // e.preventDefault();
    setcheckclick(!checkclick);
  };

  
  // login button handler
  const handleformLogin = (e) => {
    e.preventDefault();

    
    const password = e.target.pass.value;
    const email = e.target.email.value;
 


    if (!checkclick) {
      alert("trams condition not fillup");
      return;
    }

    // ----
    Loginuser(email,password)
    .then((result)=>{
      const loginuser=result.user
      setuser(loginuser);
      Swal.fire({
        title: "Login Sucessfully!",
        icon: "success",
        draggable: true,
      });
    })
    .then(()=>{
      nagigate(`${location.state? location.state:'/'}`);
    })
    .catch((error)=>{
      const errorr=error.message;
      
      seterror(errorr);
      Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
    })

    

    

    

  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          {/* login your account */}
          <h2 className="font-bold text-2xl text-center">Login your account</h2>

          {/* form */}
          <form onSubmit={handleformLogin}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={eyebtnclick ? "text" : "password"}
                  name="pass"
                  className="input"
                  placeholder="Password"
                />

                {eyebtnclick ? (
                  <div
                    onClick={eyebtnhendle}
                    className="absolute right-8 top-8 "
                  >
                    <FaEyeSlash />
                  </div>
                ) : (
                  <div
                    onClick={eyebtnhendle}
                    className="absolute right-8 top-8 "
                  >
                    <FaRegEye />
                  </div>
                )}
              </div>

              {/* forget password */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {/* chack box */}
              <input
                onClick={checkboxhendle}
                type="checkbox"
                className="checkbox checkbox-secondary"
              />

              {/* login btn */}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          {/* Dont’t Have An Account */}
          <p className="font-bold textarea-md text-center">
            Have An New Account ?{" "}
            <Link
              className="text-emerald-900 hover:underline"
              to="/authlayout/register"
            >
              Register
            </Link>
          </p>

          {/* ----------------- */}
        </div>
      </div>
    </div>
  );
};

export default Login;
