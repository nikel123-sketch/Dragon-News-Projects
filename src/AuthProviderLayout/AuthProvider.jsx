import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

// auth contex--
export const Authcontex = createContext();

// auth provider---
const AuthProvider = ({ children }) => {
  // state----
  const [user, setuser] = useState(null);
  const [error, seterror] = useState([]);
  const [lodding, setlodding] = useState(true);
  

  // createuser-----
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login----
  const Loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // updateProfile--
  const updateuser = (update) => {
    return updateProfile(auth.currentUser, update);
  };

  // observer----
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (carentuser) => {
      setuser(carentuser);
      setlodding(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // logout------
  const logout = () => {
    return signOut(auth);
  };

  // auth data---
  const authdata = {
    createuser,

    setuser,
    seterror,
    error,
    user,
    logout,
    Loginuser,
    setlodding,
    lodding,
    updateuser,
  };

  //   return-----
  return (
    <div>
      <Authcontex value={authdata}>{children}</Authcontex>
    </div>
  );
};

export default AuthProvider;
