import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../config/firebase.config';

export  const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const auth= getAuth(app);
    console.log(auth)
    //Creat user
    const creatUserWithEp = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const shareFunc={
        creatUserWithEp
    }
       
    return (
        <AuthContext.Provider value={shareFunc} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;