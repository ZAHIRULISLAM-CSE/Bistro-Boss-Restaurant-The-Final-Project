import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signInWithEP } = useContext(AuthContext);
  const onSubmit = (data) => {
        signInWithEP(data.email,data.password)
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-12 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            name="email"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {errors?.email?.type && (
          <span className="mb-4 text-red-600">Email field is required</span>
        )}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            name="password"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {errors?.password?.type && (
          <span className="mb-4 text-red-600">Password field is required</span>
        )}
        <br />
        <button
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <p className=" mt-3 text-lg">
          Dont have an account?
          <Link
            to="/register"
            className="text-blue-700 underline  cursor-pointer "
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
