import React, { useEffect, useState } from 'react';
import NavBar from '../shared/nav/NavBar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const [noHeaderFooter,setnoHeaderFooter]=useState(false);

    const location=useLocation();
    const pathName=location.pathname;
    ///const test=location.pathname.includes("register");//the otherway to check
    // console.log(test);
    useEffect(()=>{
        if(pathName == '/register' || '/login' ){
            setnoHeaderFooter(true);
       }
       else{
        setnoHeaderFooter(false);
       }
    },[pathName])
    // console.log(noHeaderFooter)

    return (
        <div>
            {
                noHeaderFooter || <NavBar></NavBar>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;