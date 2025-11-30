// import React from "react";
import React, { use, useState } from "react";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbSquareLetterJ } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
import { Authcontex } from "../AuthProviderLayout/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const navigate = useNavigate();
  // firebase----
  const { createuser, setuser, seterror, user, error, updateuser } = use(Authcontex);
  
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

  //   form hendle click--
  const handleformregister = (e) => {
    e.preventDefault();
    // ---------------------------------

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.pass.value;
    const email = e.target.email.value;
    // ----------------------------------
    

    // chackbox condition----
    if (!checkclick) {
      alert("trams condition not fillup");
      return;
    }
    setuser();
    seterror();
    // create user-----
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        
        updateuser({ displayName: name,photoURL:photo })
          .then((r) => {
            
            setuser({ ...user, displayName: name, photoURL: photo });
            e.target.reset();
            
          })
          .catch(() => {
            // An error occurred
            
          });

        
        navigate("/");
      })
      .catch((error) => {
        const errormassage = error.message;
        seterror(errormassage);
      });

    // Alart-----
    Swal.fire({
      title: "Register Sucessfully!",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* register your account */}
            <h2 className="font-bold text-2xl text-center">
              Register your account
            </h2>

            {/* form */}
            <form onSubmit={handleformregister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="your name"
                />

                {/* photo */}
                <label className="file">Photo URL</label>
                    <input
                     type="url"
                     id="photo"
                     name="photo"
                     className="input"
                      placeholder="Enter photo URL"
                     />


                {/* email field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  required
                  placeholder="Email"
                />

                {/* password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={eyebtnclick ? "text" : "password"}
                    name="pass"
                    required
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
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>

              <div>
                {/* {user && <p>your account register Successful</p>} */}

                {error && <p className="font-bold text-red-600">{error}</p>}
              </div>
            </form>

            {/* Dont’t Have An Account */}
            <p className="font-bold textarea-md text-center">
              All Radey Have An Account ?
              <Link
                className="text-emerald-900 hover:underline"
                to="/authlayout/login"
              >
                Login
              </Link>
            </p>

            {/* ----------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
