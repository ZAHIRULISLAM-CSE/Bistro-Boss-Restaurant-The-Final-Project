import React from "react";
import useMenu from "../hooks/useMenu";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menuData, refetch] = useMenu();
  const [axiosSecure]=useAxiosSecure();
 
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`)
        .then(res =>{ 
            if(res.data.deletedCount>0){
                Swal.fire("Deleted!", "Your Item has been deleted.", "success");
                refetch();
            }
        })
      }
    });
  };
  return (
    <div>
        <p className="text-2xl mt-8 text-center">Hurry Up</p>
        <h1 className="text-center text-3xl mb-8 mt-4">Manage All Items</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 py-3">
                Serial No
              </th>
              <th scope="col" className="px-6 ml-6 py-3">
                Item Image
              </th>
              <th scope="col" className="px-6 py-3">
                Item Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                menuData && menuData.map((item, index) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 h-10 w-10 py-4">
                        <img src={item.image} alt="" />
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </td>
                      <td className="px-6  py-4">{item.price}</td>
                      <td>
                          Update
                      </td>
                      <td
                    onClick={() => handleDelete(item._id)}
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
  );
};

export default ManageItems;
