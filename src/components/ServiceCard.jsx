import React from "react";

const ServiceCard = ({ image, heading, discription }) => {
  return (
    <div className="w-[280px] bg-white shadow-lg rounded-lg p-5 hover:bg-[#1C352D] hover:text-white transition duration-300 flex flex-col items-center cursor-pointer">
      <div className="w-24 h-24 my-3 bg-zinc-200 rounded-full flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="w-18 h-18 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-lg font-bold my-5">{heading}</h1>
      <p className="text-gray-600 text-sm">{discription}</p>
    </div>
  );
};

export default ServiceCard;
