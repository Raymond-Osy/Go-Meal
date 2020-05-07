import React from "react";
import mainImg from "../../assets/images/food7.jpg";
import dinner from "../../assets/images/dinner.png";
import pyramid from "../../assets/images/food9.jpg";
import sauce from "../../assets/images/food101.jpg";
import swallow from "../../assets/images/food103.jpg";
import orderMeal from "../../assets/svg/order.svg";
import foodRest from "../../assets/svg/food-rest1.svg";
import food from "../../assets/svg/food.svg";

const Body = () => (
  <div>
    {/* The section contains the apps introduction, call to action button, and the appetizing meal image */}
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
    {/* This section contains the three quick interactive steps to get started using the application */}
    <section className="bg-gray-100">
      <div className="flex justify-center">
        <h1 className="text-gray-900 text-3xl font-extrabold leading-tight mt-5">How it works</h1>
      </div>
      <div className="flex flex-col md:flex-row  px-8 items-center justify-center">
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={orderMeal} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={foodRest} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
          <img className="w-3/12 m-auto mt-3" src={food} alt="order meal on the go"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-sm">
              Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* This section contains the Services been offereed and the top trending meals my resturant for a given day(this would be powered by an API) */}
    <section className="bg-green-100 flex flex-col md:flex-row px-8">
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
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Lunch</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Dinner</p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Pocket</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Café</p>
              </div>
              <div className="text-center items-center">
                <img className="flex-1 w-5/12 m-auto mt-3" src={food}/>
                <p className="font-bold tracking-wide">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Menu section */}
      <div className="flex flex-col">
        <div className="mx-8 my-2">
          <h1 className="text-green-900 text-3xl font-extrabold leading-tight mt-5">Collections</h1>
          <p className="text-gray-700 text-base leading-tight">Explore curated lists of top restaurants, cafes, pubs, and bars in your area, based on trends</p>
        </div>
        <div className="flex">
          <div className="flex flex-row">
            <div className="flex-1 relative h-48 w-full">
              <img className="w-full h-full w-full m-auto object-cover bg-red-500" src={pyramid} />
              <div className="bg-green-500 flex flex-col absolute justify-center items-center bottom-0 left-0">
                <h1 className="text-black ">Trending</h1>
              </div>
            </div>

            {/* <img className="flex-1 w-5/12 m-auto mt-3 px-2" src={dinner} /> */}
          </div>
        </div>
        
      </div>
    </section>
  </div>
);

export default Body;
 