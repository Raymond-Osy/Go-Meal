import React from "react";
import { Link } from "react-router-dom";
import HomeCardList from "../../components/HomeCardList/HomeCardList";
import Collection from "../Collection/Collection";
import mainImg from "../../assets/images/food7.jpg";
import mobileApp from "../../assets/images/mobileApp.png";
import foodRest from "../../assets/svg/food-rest1.svg";
import food from "../../assets/svg/food.svg";
import lunch from "../../assets/svg/lunch.svg";
import dinner from "../../assets/svg/dinner.svg";
import cup from "../../assets/svg/cup.svg";
import pizza from "../../assets/svg/pizza.svg";
import ios from "../../assets/svg/ios.svg";
import android from "../../assets/svg/android.svg";

const Body = () => (
  <div>
    {/* The section contains the apps introduction, call to action button, and the appetizing meal image */}
    <section className="flex items-center my-20 px-8">
        <div className="flex-1 py-2 px-4 mt-24">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">Order delicious meal on the go!</h1>
            <p className="text-gray-700 text-xl font-hairline mt-5 mb-10">We prepare your favorite dishes and deliver it at your door step</p>
            <Link className="text-center rounded-full py-4 px-12 bg-green-600 hover:bg-green-700 text-white text-xl font-bold" to="/signin">I'm Hungry</Link>
        </div>
        <div className="flex-1 hidden md:block">
            <img src={mainImg} alt="Image of rice delicacy"/>
        </div>
    </section>

    {/* This section contains the three quick interactive steps to get started using the application */}
    <section className="bg-gray-100">
      <div className="flex justify-center">
        <h1 className="text-gray-900 text-3xl font-extrabold leading-tight mt-5">How it works</h1>
      </div>
      <HomeCardList />
    </section>

    {/* This section contains the Services been offered and the top trending meals my resturant for a given day(this would be powered by an API) */}
    <section className="bg-green-100 flex flex-col md:flex-row px-8 py-5">
      {/* Service Section */}
      <div className="flex">
        <div className="flex-col">
          <div className="flex-col mx-8 my-2">
            <h1 className="text-green-900 text-3xl font-extrabold leading-tight mt-5">Services</h1>
            <p className="text-gray-700 text-base leading-tight">We want you to keep doing what matters to you most, so we got you covered with whatever you want.</p>
          </div>
          <div className="mx-8">
            <div className="flex flex-row">
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={food}/>
                <p className="font-bold tracking-wide">Breakfast</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={lunch}/>
                <p className="font-bold tracking-wide">Lunch</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={dinner}/>
                <p className="font-bold tracking-wide">Dinner</p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={pizza}/>
                <p className="font-bold tracking-wide">Take out</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={cup}/>
                <p className="font-bold tracking-wide">Café</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" alt="food" src={foodRest}/>
                <p className="font-bold tracking-wide">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections section */}
      <Collection />
    </section>

    {/* Mobile app download section */}
    <section className="flex items-center px-8">
        <div className="flex-1 py-2 px-4 justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-none mt-5">Restaurants in your pocket</h1>
            <p className="text-gray-700 text-xl font-hairline mb-2">Go-meal app makes it easy for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</p>
            <div className="flex flex-row">
              <img src={android} className="w-1/3 mr-5" alt="Image google mobile download"/>
              <img src={ios} className="w-1/3" alt="Image apple mobile download"/>
            </div>
        </div>
        <div className="flex-1 self-center text-center hidden md:block md:pl-16 lg:pl-24">
            <img src={mobileApp} className="md:w-full lg:w-9/12 text-center" alt="Image of rice delicacy"/>
        </div>
    </section>
  </div>
);

export default Body;
 