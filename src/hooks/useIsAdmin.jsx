import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useIsAdmin = () => {
    const {user,queryLoading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure();
    const {data:isAdmin}=useQuery({
        queryKey:["isAdmin",user?.email],
        enabled:!queryLoading,
        queryFn:async()=>{
            const res= await axiosSecure.get(`/users/admin/${user?.email}`)
              return  res.data.admin;
        }
        
    })
    return [isAdmin]
};

export default useIsAdmin;