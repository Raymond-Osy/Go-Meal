import React from "react";

const Card = ({image, title, text}) => (
    <div className="bg-white rounded overflow-hidden max-w-xs shadow-2xl text-center items-center p-2 m-6">
      <img
        className="w-3/12 m-auto mt-3"
        src={image}
        alt="order meal on the go"
      />
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2"><h3>{title}</h3></div>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
);

export default Card;
