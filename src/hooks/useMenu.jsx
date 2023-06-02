import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useMenu = () => {
    const {data:menuData,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/menu`)
            return res.json();
        }
    })
    return [menuData,refetch]
};

export default useMenu;