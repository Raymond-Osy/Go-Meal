import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SocialButton from "../../components/Button/SocialButton";
import FormInput from "../../components/Form/FormInput";
import Footer from "../../components/Footer/Footer";
import chef from "../../assets/images/chef.jpg";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";


const Signin = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex justify-center mt-48">
      <img src={chef} alt="chef icon" className="w-3/12 md:w-2/12 lg:w-1/12" />
    </div>
    <div className="flex justify-center m-4">
      <h1 className="border-b-2 border-red-500 rounded-sm text-lg">Log into your account</h1>
    </div>
    <div className="flex justify-center my-4">
      <form className="shadow-lg w-3/4 md:w-2/3 lg:w-1/2 rounded px-8 pt-6 pb-8 mb-24">
        <SocialButton bgColor="bg-red-400" hoverColor="hover:bg-red-300" socialIcon={google} socialPlatform="Google"/>
        <SocialButton bgColor="bg-blue-400" hoverColor="hover:bg-blue-300" socialIcon={facebook} socialPlatform="Facebook"/>
        <div className="flex justify-center text-gray-700">OR</div>
        <FormInput
          label="Email Address"
          placeholder="Email Address"
          name="email"
          type="email"
          required
        />

        {/* This is not yet a reusable component cos I wish to make it dynamic such that when a user doesn't add a password, the styling changes and the text comes out */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="***********" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Log in
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="flex">
          <p>Restaurant? Log into your account <Link to="add-restaurant" className="text-red-500 pointer">here</Link></p>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

export default Signin;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       