import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash,FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
 
 const [axiosSecure]=useAxiosSecure();
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const handleAdmin=(user)=>{
        fetch(`http://localhost:5000/user/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                refetch();
                Swal.fire("Make Admin Successfull")
            }
        })
  }

  return (
    <div>
      <h1>All Users</h1>
      <h1>{users?.length}</h1>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 ml-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 h-10 w-10 py-4">
                    {item.name}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.email}
                  </td>
                  <td onClick={()=>handleAdmin(item)} className="px-6  py-4">{
                    item.role == "admin"?"admin":<FaUserCircle className="h-8 w-8 "></FaUserCircle>
                  }</td>
                  <td
                    className="px-6  cursor-pointer py-4"
                  >
                    <FaTrash></FaTrash>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
