import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase.config';

export  const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);

    const auth= getAuth(app);
    console.log(auth)
    //Creat user
    const creatUserWithEp = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const signInWithEP=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }


    const shareFunc={
        creatUserWithEp,signInWithEP
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(loogedUser)=>{
            setUser(loogedUser);
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