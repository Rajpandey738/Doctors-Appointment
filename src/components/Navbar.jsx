import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Dropdown states
  const [showServices, setShowServices] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Close other dropdown when one is opened
  const toggleServices = () => {
    setShowServices((prev) => !prev);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
    setShowServices(false);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <div
        className="flex cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={assets.logo} alt="" className="w-[50px] h-[50px]" />
        <h1 className="text-2xl font-bold text-[#1C352D]">Doctorly</h1>
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>

        {/* Services Dropdown */}
        <div className="relative">
          <li
            onClick={toggleServices}
            className="py-1 px-2 cursor-pointer flex items-center gap-1 hover:text-[#1C352D] transition-colors duration-300"
          >
            SERVICES
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                showServices ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>

          {showServices && (
            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48 z-10 overflow-hidden">
              <NavLink to="/services/medicine">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Medicine
                </li>
              </NavLink>
              <NavLink to="/services/ambulance">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Ambulance
                </li>
              </NavLink>
              <NavLink to="/services/help">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Help
                </li>
              </NavLink>
            </ul>
          )}
        </div>

        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative">
            {/* Profile */}
            <img
              onClick={toggleProfile}
              className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img
              onClick={toggleProfile}
              className={`w-3 transition-transform duration-300 ${
                showProfile ? "rotate-180" : ""
              }`}
              src={assets.dropdown_icon}
              alt="Dropdown"
            />

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="px-4 py-2 hover:bg-red-50 text-red-500 hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/create-account")}
            className="text-white bg-[#1C352D] py-[8px] px-[12px] rounded-[20px] hover:bg-[#162820] transition duration-300 cursor-pointer"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
