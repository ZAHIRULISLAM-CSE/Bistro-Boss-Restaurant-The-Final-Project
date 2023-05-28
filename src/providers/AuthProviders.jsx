import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../config/firebase.config';

export  const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

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


    const shareFunc={
        creatUserWithEp,signInWithEP,user,logOut
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


       
    return (
        <AuthContext.Provider value={shareFunc} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;