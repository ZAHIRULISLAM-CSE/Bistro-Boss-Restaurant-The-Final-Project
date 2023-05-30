import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin,logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signInWithEP } = useContext(AuthContext);
  const onSubmit = (data) => {
    signInWithEP(data.email, data.password)
      .then((result) => {
        const user = result.user;
        Swal.fire("Login is Successfull");
        navigate(state, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result)
        const name =result.user.displayName;
        const email=result.user.email;
        const sendingData={email,name};
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendingData),
        })
          .then((res) => res.json())
          .then((data) => {
              logOut();
              navigate("/login");
          });
      })
      .catch((error) => {});
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
            Register
          </Link>
        </p>
      </form>
      <div>
        <h1 className="text-center">Or!!!!</h1>
        <div className="text-center mt-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
