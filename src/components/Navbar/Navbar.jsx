import React from "react";
import { Link } from "react-router-dom"
import pizza from "../../assets/svg/pizza.svg";

const Navbar = () => (
  <nav className="flex absolute w-full top-0 items-center justify-between flex-wrap p-6 shadow-lg bg-white">
    <header className="flex items-center flex-shrink-0 text-red-500 mr-6">
      <img src={pizza} className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" />
      <span className="font-semibold text-3xl tracking-tight">Go-Meal</span>
    </header>

    {/*  Harmbuger for screens smaller screens */}
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-red-500 hover:border-red-500">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>

    <div className="w-full block flex-grow lg:justify-end lg:flex lg:items-center lg:w-auto">
      <div className="text-base">
        <Link to="signin" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red-500 mr-8">
          Sign in
        </Link>

        <Link to="signup" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red-500 mr-8">
          Sign up
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
