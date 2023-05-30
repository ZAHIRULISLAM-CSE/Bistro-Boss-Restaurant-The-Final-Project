import React from "react";
import useAddededCart from "../hooks/useAddededCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useAddededCart();
  const price = cart.reduce((sum, item) => {
    return item.price + sum;
  }, 0);

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
        fetch(`http://localhost:5000/usercart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
            refetch();
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex text-lg mt-12 mb-12 lg:text-2xl font-semibold justify-center gap-8">
        <h1 className="">Total Items:{cart.length}</h1>
        <h1>Price:{price}</h1>
        <button>Pay</button>
      </div>
      <div>
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
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
    </div>
  );
};

export default MyCart;
