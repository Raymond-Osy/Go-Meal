import React from "react";
import mainImg from "../../assets/images/food7.jpg";
import orderMeal from "../../assets/svg/order.svg";
import foodRest from "../../assets/svg/food-rest1.svg";
import food from "../../assets/svg/food.svg";

const Body = () => (
  <div>
    <section className="flex items-center my-20 px-8">
        <div className="flex-1 py-2 px-4 mt-24">
            <h1 className="text-3xl font-extrabold uppercase leading-tight">Order delicious meal on the go!</h1>
            <p className="text-gray-700 text-xl font-hairline mt-5 mb-10">We prepare your favorite dishes and deliver it at your door step</p>
            <a className="text-center rounded-full py-4 px-12 bg-green-600 hover:bg-green-700 text-white" href="#">I'm Hungry</a>
        </div>
        <div className="flex-1 hidden md:block">
            <img src={mainImg} alt="Image of rice delicacy"/>
        </div>
    </section>

    <section className="bg-gray-100">
      <div className="flex justify-center">
        <h1 className="text-gray-900 text-3xl font-extrabold leading-tight mt-5">How it works</h1>
      </div>
      <div className="flex flex-col md:flex-row  px-8 items-center justify-center">
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={orderMeal} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={foodRest} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={food} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Body;
