import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../config/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export  const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();

    const auth= getAuth(app);
    //Creat user
    const creatUserWithEp = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const signInWithEP=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
          });
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider);
    }


    const shareFunc={
        creatUserWithEp,signInWithEP,user,logOut,loading,googleLogin
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(loogedUser)=>{
            setUser(loogedUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    console.log(user);


       
    return (
        <AuthContext.Provider value={shareFunc} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;