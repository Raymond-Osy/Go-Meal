import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import chef from "../assets/images/chef.jpg";


const Signin = () => (
  <div class="flex flex-col">
    <Navbar />
    <div className="flex justify-center mt-48">
      <img src={chef} className="w-3/12 md:w-2/12 lg:w-1/12" />
    </div>
    <div className="flex justify-center m-4">
      <h1 className="border-b-2 border-red-500 rounded-sm">Create an Account</h1>
    </div>
    <div className="flex justify-center my-4">
      <form class="shadow-lg w-3/4 md:w-2/3 lg:w-1/2 rounded px-8 pt-6 pb-8 mb-24">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Email Address">
            Email Address
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-mail" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="***********" />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <div class="flex items-center justify-between mb-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Log in
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="flex">
          <p>Resturant? Log into your account <Link to="restaurant-dashboard" className="text-red-500 pointer">here</Link></p>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default Signin;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       