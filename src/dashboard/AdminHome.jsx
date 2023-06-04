import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {

    const [axiosSecure] =useAxiosSecure();

    const {data}=useQuery({
        queryKey:["adminstats"],
        queryFn: async ()=>{
         const res=await axiosSecure.get("/adminstats")
         return res.data;
            
        }
    })

    const {data:orderStatesData}=useQuery({
        queryKey:["order-stats"],
        queryFn: async ()=>{
         const res=await axiosSecure.get("/order-stats")
         return res.data;
        }
    })

    console.log(orderStatesData)


    return (
        <div>
           <h1>Admin Home</h1> 
           <div className='grid  grid-cols-1 gap-6 lg:grid-cols-4'>
                <div className='bg-orange-400 rounded-xl mt-8 h-32'>
                    <div className='flex justify-center flex-col h-full items-center'>
                        <h1>Total Customers</h1>
                        {
                            data?.customers
                        }
                    </div>
                </div>
                <div className='bg-orange-400 rounded-xl mt-8 h-32'>
                    <div className='flex justify-center flex-col h-full items-center'>
                        <h1>Total Orders</h1>
                        {
                            data?.orders
                        }
                    </div>
                </div>
                <div className='bg-orange-400 rounded-xl mt-8 h-32'>
                    <div className='flex justify-center flex-col h-full items-center'>
                        <h1>Total Products</h1>
                        {
                            data?.products
                        }
                    </div>
                </div>
                <div className='bg-orange-400 rounded-xl mt-8 h-32'>
                    <div className='flex justify-center flex-col h-full items-center'>
                        <h1>Total Revenue</h1>
                        {
                            data?.revenue
                        }
                    </div>
                </div>
           </div>
        </div>
    );
};

export default AdminHome;