import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAnItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure]=useAxiosSecure();

  const imageKey=import.meta.env.VITE_imageKey;
  const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${imageKey}`

  const onSubmit = (data) => {
        const formData=new FormData();
        formData.append("image",data.image[0]);

        fetch(imageHostingUrl,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(imgdata => {
            if(imgdata.success){
                const imageUrl=imgdata.data.display_url;
                const {name,price,category,recipe}=data;
                const newItem={name,price: parseFloat(price),category,recipe,image:imageUrl}
                axiosSecure.post("/menu",newItem)
                .then(data=>{
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
  };

  return (
    <div>
      <h1 className="text-3xl mt-6  text-center">Add An Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-12 mx-auto">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Receipe Name
          </label>
          <input
            type="text"
            placeholder="Receipe Name"
            {...register("name", { required: true })}
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="lg:flex w-full gap-8">
          <select
            className="h-12"
            {...register("category", { required: true })}
          >
            <option value="">Select...</option>
            <option value="salad">Salad</option>
            <option value="drinks">Drinks</option>
          </select>
          <div className="mb-6 w-full">
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <textarea
         {...register("recipe", { required: true })}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Details"
        ></textarea>

        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="file_input"
        >
          Upload file
        </label>
        <input
         {...register("image", { required: true })}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          id="file_input"
          type="file"
        />

        <button
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddAnItem;
