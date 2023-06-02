import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useIsAdmin = () => {
    const {user,queryLoading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure();
    let set=false;
    if(user?.email){
     set=true;
    }
    const {data:isAdmin,refetch,isLoading}=useQuery({
        queryKey:["isAdmin",user?.email],
        enabled:!queryLoading && set,
        queryFn:async()=>{
            const res= await axiosSecure.get(`/users/admin/${user?.email}`)
              return  res.data.admin;
        }
        
    })
    return [isAdmin,refetch,isLoading]
};

export default useIsAdmin;