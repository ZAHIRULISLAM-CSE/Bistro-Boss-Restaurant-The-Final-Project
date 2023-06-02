import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [queryLoading,setQueryLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app);
  //Creat user
  const creatUserWithEp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInWithEP = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const shareFunc = {
    creatUserWithEp,
    signInWithEP,
    user,
    logOut,
    loading,
    googleLogin,
    queryLoading
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loogedUser) => {
      setUser(loogedUser);
      setLoading(false);
      const email = loogedUser?.email;
      const sendData = { email };
      if (loogedUser) {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendData),
        })
          .then((res) => res.json())
          .then((data) => {
            const token = data.token;
            console.log(token)
            if(token){
             localStorage.setItem("access-token", token);
             setQueryLoading(false)
            }
          });
      } else {
        setQueryLoading(true);
        localStorage.removeItem("access-token");
      }
    
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={shareFunc}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
