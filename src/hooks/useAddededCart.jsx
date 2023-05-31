import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useAddededCart = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["usercart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(`/usercart?email=${user?.email}`);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useAddededCart;
