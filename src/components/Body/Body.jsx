import React from "react";
import mainImg from "../../assets/images/food7.jpg";
import pyramid from "../../assets/images/food9.jpg";
import swallow from "../../assets/images/food103.jpg";
import mobileApp from "../../assets/images/mobileApp.png";
import orderMeal from "../../assets/svg/order.svg";
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
            <a className="text-center rounded-full py-4 px-12 bg-green-600 hover:bg-green-700 text-white text-xl font-bold" href="#">I'm Hungry</a>
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
      <div className="flex flex-col md:flex-row  px-8 items-center justify-center">
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={orderMeal} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Make an order online</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={foodRest} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">We dispatch a rider</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={food} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">You enjoy your meal</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
      </div>
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
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Breakfast</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={lunch}/>
                <p className="font-bold tracking-wide">Lunch</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={dinner}/>
                <p className="font-bold tracking-wide">Dinner</p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={pizza}/>
                <p className="font-bold tracking-wide">Take out</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={cup}/>
                <p className="font-bold tracking-wide">Café</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={foodRest}/>
                <p className="font-bold tracking-wide">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections section */}
      <div className="flex flex-col">
        <div className="mx-8 my-2">
          <h1 className="text-green-900 text-3xl font-extrabold leading-tight mt-5">Collections</h1>
          <p className="text-gray-700 text-base leading-tight">Explore curated lists of top restaurants, cafes, pubs, and bars in your area, based on trends</p>
        </div>
        <div className="flex mx-8 my-2">
          <div className="flex flex-row">
            <div className="flex-1 relative h-48 w-full mr-3">
              <img className="w-full h-full m-auto object-cover rounded" src={pyramid} />
              <div className="flex flex-col absolute p-2 bottom-0 left-0 bg-gray-900 bg-opacity-50 w-full">
                <div className="flex flex-row items-center cursor-pointer">
                  <h1 className="text-white text-xl">Trending</h1> 
                  <i class='fas fa-caret-right text-white text-xl pt-1 px-3'></i>
                </div>
              </div>
            </div>

            <div className="flex-1 relative h-48 w-full">
              <img className="w-full h-full m-auto object-cover rounded" src={swallow} />
              <div className="flex flex-col absolute p-2 bottom-0 left-0 bg-gray-900 bg-opacity-50 w-full">
                <div className="flex flex-row items-center cursor-pointer">
                  <h1 className="text-white text-xl">Deliveries</h1>
                  <i class='fas fa-caret-right text-white text-xl pt-1 px-3'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile app download section */}
    <section className="flex items-center px-8">
        <div className="flex-1 py-2 px-4 justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-none mt-5">Restaurants in your pocket</h1>
            <p className="text-gray-700 text-xl font-hairline mb-2">Go-meal app makes it easy for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</p>
            <div className="flex flex-row">
              <img src={android} class="w-1/3 mr-5" alt="Image google mobile download"/>
              <img src={ios} class="w-1/3" alt="Image apple mobile download"/>
            </div>
        </div>
        <div className="flex-1 self-center text-center hidden md:block md:pl-16 lg:pl-24">
            <img src={mobileApp} class="md:w-full lg:w-9/12 text-center" alt="Image of rice delicacy"/>
        </div>
    </section>
  </div>
);

export default Body;
 