import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 py-10 bg-gray-50">
      {/* ----Left Side---- */}
      <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 px-0 sm:px-6 py-6">
        <p className="text-3xl md:text-5xl font-bold leading-snug text-gray-800">
          Find a Doctor & Book Online
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Medical Recover is most focused in helping you Discover your most
          Beautiful.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#speciality">
            <Button variant="primary">Book An Appointment</Button>
          </a>
          <Button
            onClick={() => {
              navigate("/about");
              scrollTo(0, 0);
            }}
            variant="secondary"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* ----Right Side---- */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center px-6">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1C352D] rounded-tl-[50px] rounded-bl-[50px]"></div>
        <img
          src={assets.header_img}
          alt=""
          className="w-full max-w-md object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
