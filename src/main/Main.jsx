import React, { useEffect, useState } from 'react';
import NavBar from '../shared/nav/NavBar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    // const [noHeaderFooter,setnoHeaderFooter]=useState(false);

    const location=useLocation();
    const test=location.pathname.includes("login" );//the otherway to check
    const test1=location.pathname.includes("register")
    return (
        <div>
            {
                (test || test1) || <NavBar></NavBar>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;