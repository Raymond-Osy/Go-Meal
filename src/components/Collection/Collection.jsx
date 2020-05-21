import React from "react";
import pyramid from "../../assets/images/food9.jpg";
import swallow from "../../assets/images/food103.jpg";

const Collection = () => (
  <div className="flex flex-col">
    <div className="mx-8 my-2">
      <h1 className="text-green-900 text-3xl font-extrabold leading-tight mt-5">
        Collections
      </h1>
      <p className="text-gray-700 text-base leading-tight">
        Explore curated lists of top restaurants, cafes, pubs, and bars in your
        area, based on trends
      </p>
    </div>
    <div className="flex mx-8 my-2">
      <div className="flex flex-row">
        <div className="flex-1 relative h-48 w-full mr-3">
          <img
            className="w-full h-full m-auto object-cover rounded"
            alt="food"
            src={pyramid}
          />
          <div className="flex flex-col absolute p-2 bottom-0 left-0 bg-gray-900 bg-opacity-50 w-full">
            <div className="flex flex-row items-center cursor-pointer">
              <h1 className="text-white text-xl">Trending</h1>
              <i className="fas fa-caret-right text-white text-xl pt-1 px-3"></i>
            </div>
          </div>
        </div>

        <div className="flex-1 relative h-48 w-full">
          <img
            className="w-full h-full m-auto object-cover rounded"
            alt="food"
            src={swallow}
          />
          <div className="flex flex-col absolute p-2 bottom-0 left-0 bg-gray-900 bg-opacity-50 w-full">
            <div className="flex flex-row items-center cursor-pointer">
              <h1 className="text-white text-xl">Deliveries</h1>
              <i className="fas fa-caret-right text-white text-xl pt-1 px-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collection;
