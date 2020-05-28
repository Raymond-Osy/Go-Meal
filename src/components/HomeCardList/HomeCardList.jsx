import React from "react";
import Card from "../Card/Card"
import orderMeal from "../../assets/svg/order.svg";
import foodRest from "../../assets/svg/food-rest1.svg";
import food from "../../assets/svg/food.svg";


const HomeCardList = () => (
  <div className="flex flex-col md:flex-row px-8 items-center justify-center">
    <Card image={orderMeal} title="Make an order online" text="Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress." />
    <Card image={foodRest} title="We dispatch a rider" text="Make an order online" text="Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress."/>
    <Card image={food} title="You enjoy your meal" text="Getting your favorite dish has never been more easier. Order that dream meal with just the click of your fingers, no stress." />
  </div>
);

export default HomeCardList;
