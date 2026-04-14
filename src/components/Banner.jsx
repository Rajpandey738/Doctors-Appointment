import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex my-30 md:my-20 bg-[#1C352D] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12">
      {/* -----Left side----- */}
      <div
        className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5
      "
      >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-6">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/create-account");
            scrollTo(0, 0);
          }}
          className="border-2 border-amber-50 text-white px-4 py-2 md:px-6 md:py-3 mt-6 rounded-full font-medium transition-all duration-300 hover:bg-amber-50 hover:text-[#1C352D] cursor-pointer"
        >
          Create account
        </button>
      </div>

      {/* -----Right side----- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={assets.appointment_img}
          alt=""
          className="w-full absolute bottom-0 right-0 max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
