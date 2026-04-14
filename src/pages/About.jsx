import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* ----------------- Top Section ----------------- */}
      <div className="w-full px-6 md:px-16 lg:px-28 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">
            ABOUT <span className="text-[#1C352D]">US</span>
          </p>
          <div className="w-20 h-1 bg-[#1C352D] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={assets.about_image}
              alt="About us"
              className="rounded-2xl shadow-lg w-[90%] md:w-[80%] lg:w-[70%] object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a passionate team dedicated to providing the best
              healthcare services for our community. Our mission is to make
              medical support easily accessible, affordable, and trustworthy for
              everyone. With highly experienced doctors, modern facilities, and
              a patient-first approach, we ensure that your health is always in
              safe hands.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To become a trusted healthcare partner by combining technology,
              compassion, and expertise. We strive to deliver a seamless
              experience that bridges the gap between patients and healthcare
              providers.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------- Why Choose Us Section ----------------- */}

      <div className="flex flex-col md:flex-row items-center justify-around gap-12 px-6 md:px-16 lg:px-28 py-16 bg-gray-200">
        {/* Left: Doctor Image Section */}
        <div className="relative flex justify-center">
          <div className="hidden sm:block absolute bottom-0 left-0 w-full h-[300px] bg-[#1C352D] rounded-tl-[70px] rounded-tr-[70px]"></div>
          <img
            src={assets.aboutDoc}
            alt="Doctor"
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-medium text-gray-700">CHOOSE US</h1>
          <p className="text-3xl font-bold text-[#1C352D] mb-6 ">
            Why Choose Us
          </p>

          <ul className="space-y-4">
            {[
              "Safety Is Our First Priority",
              "Flexible Treatment Options",
              "Reliable & Transparent Pricing",
              "Diagnosis With Advanced Technology",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <img src={assets.checkIcon} alt="check" className="w-6 h-6" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="mt-8 px-6 py-2 bg-[#1C352D] text-white rounded-xl shadow-md hover:bg-[#264d3f] transition duration-300 cursor-pointer"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
