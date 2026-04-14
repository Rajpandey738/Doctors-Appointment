import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000000] px-4 sm:px-[6%] py-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
        {/* ----Left Section---- */}
        <div>
          <div className="flex cursor-pointer">
            <img src={assets.logo} alt="" className="w-[50px] h-[50px]" />
            <h1 className="text-2xl font-bold text-white">Doctorly</h1>
          </div>
          <p className="text-gray-400 mt-4">
            Get our Doctor tips to your inbox
          </p>
          <button className="border-2 border-amber-50 text-white px-4 py-1 md:px-6 md:py-2 mt-6 rounded-full font-medium transition-all duration-300 hover:bg-amber-50 hover:text-[#1C352D] cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* ----Center Section---- */}
        <div>
          {" "}
          <h1 className="text-xl text-white font-bold">Company Info</h1>
          <ul className="text-gray-400 mt-2">
            <NavLink
              to="/"
              onClick={() => {
                scrollTo(0, 0);
              }}
            >
              <li className="mt-2 cursor-pointer hover:text-gray-200">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                scrollTo(0, 0);
              }}
            >
              <li className="mt-2 cursor-pointer hover:text-gray-200">
                About Us
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                scrollTo(0, 0);
              }}
            >
              <li className="mt-2 cursor-pointer hover:text-gray-200">
                Contact Us
              </li>
            </NavLink>
            <li className="mt-2 cursor-pointer hover:text-gray-200">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* ----Right Section---- */}
        <div>
          <h1 className="text-xl text-white font-bold">Contact Info</h1>
          <ul className="text-gray-400 mt-2">
            <li className=" cursor-pointer hover:text-gray-200">
              (316) 444-0223
            </li>
            <li className=" cursor-pointer hover:text-gray-200">
              doctorly@gmail.com
            </li>
            <li className=" cursor-pointer hover:text-gray-200">
              www.doctorly.com
            </li>
          </ul>

          <h1 className="text-xl text-white font-bold mt-2">Follow Us</h1>
          <div className="flex mt-2">
            <img
              src={assets.facebook}
              alt="facebook"
              className="w-6 h-6 bg-white cursor-pointer rounded-full mx-1"
            />
            <img
              src={assets.instagram}
              alt="instagram"
              className="w-6 h-6 bg-white cursor-pointer rounded-full mx-1"
            />
            <img
              src={assets.linkedIn}
              alt="linkedin"
              className="w-6 h-6 bg-white cursor-pointer rounded-full mx-1"
            />
            <img
              src={assets.youtube}
              alt="youtube"
              className="w-6 h-6 bg-white cursor-pointer rounded-full mx-1"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <hr className="border-gray-500" />
        <p className="text-white mt-3">
          &copy; Copyright 2025 Doctorly - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
