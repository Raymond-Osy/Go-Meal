import React from "react";
import mainImg from "../../assets/images/food7.jpg";

const Body = () => (
  <div>
    <section class="flex items-center my-20 px-8">
        <div class="flex-1 py-12 px-2">
            <h1 class="text-3xl font-extrabold">Order delicious meal on the go!</h1>
            <p class="text-xl font-hairline my-12">We prepare your favorite dishes and deliver it at your door step</p>
            <a class="text-center rounded-full py-4 px-12 bg-green-600 hover:bg-green-700 text-white" href="#">I'm Hungry</a>
        </div>
        <div class="flex-1 hidden md:block">
            <img src={mainImg} alt="Image of rice delicacy"/>
        </div>
    </section>
    <section>
      <div>
        <svg src=""></svg>
        <p>These are a brief decription</p>
      </div>
    </section>
  </div>
);

export default Body;
