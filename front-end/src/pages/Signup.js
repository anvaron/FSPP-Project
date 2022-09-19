import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
// import API from "api/axios.config";
// import { useUser } from "context/UserContext";
//import Layout from "layout/Layout";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { Link, Redirect, useLocation } from "react-router-dom";
// import PulseLoader from "react-spinners/PulseLoader";

// import AuthService from "../services/auth.service";

const API = process.env.REACT_APP_API_URL;

export default function Signup() {
  const navigate = useNavigate();

  const notify = () => {
    toast('New user registered successfully.');
    setTimeout(() => {
      navigate(`/`);
    }, 3000);
  }

  const [user, setUser] = useState({
    email: "", 
    password: "", 
    username: ""
  });

  const newUser = (user) => {
    axios
      .post(`${API}/signup`, user)
      .then(() => {
        notify();
      })
      .catch((error) => console.warn("catch", error));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newUser(user);

  };

  return (
    <div className="mx-auto my-10 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <Toaster />
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
      <h2 className="text-black dark:text-white sm:text-4xl">
          <span className="block font-bold text-center text-gray-500 text-2xl mt-2 mb-2">
          Signup
          </span>
      </h2>
      <p className="text-xl mt-2 w-full mx-auto text-gray-400 text-center justify-center">
        The world's most advanced trade platform.
      </p>
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ? 
        <Link
          to="/signin"
          className="text-sm ml-2 text-blue-500 underline hover:text-blue-700"
        >
          Signin
        </Link>
      </span>
      <div className="p-6 mt-0">
        <form action="#">
          <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 leading-10">Email</label>
                <input 
                  type="text" 
                  id="email" 
                  className=" rounded-sm border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder=""
                  required
                  value={user.email}
                  onChange={handleTextChange}
                />
              </div>
          </div>
          <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 leading-10">Password</label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" autoComplete="current-password" 
                  className=" rounded-sm border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder=""
                  required
                  value={user.password}
                  onChange={handleTextChange}
                />
              </div>
          </div>
          <div className="flex flex-col mb-2">
              <div className=" relative ">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 leading-10">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  className=" rounded-sm border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder=""
                  required
                  value={user.username}
                  onChange={handleTextChange}
                />
              </div>
          </div>
          <div className="flex w-full my-4">
            <button 
              type="submit" 
              className="py-2 px-4  bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm "
              onClick={(e) => handleSubmit(e)}
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}