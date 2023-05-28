import React, { useContext } from 'react';
import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProviders';

const useAddededCart = () => {
    const {user}=useContext(AuthContext);
    const { refetch,data:cart=[]} = useQuery({
        queryKey: ['usercart',user?.email],
        queryFn:async () => {
            const response = await fetch(`http://localhost:5000/usercart?email=${user?.email}`)
            return response.json()
          },
      })
      return [cart,refetch];
};

export default useAddededCart;