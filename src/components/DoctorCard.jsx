import React from "react";
import { assets } from "../assets/assets";

const DoctorCard = ({ image, name, speciality, location, fee }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row cursor-pointer hover:translate-y-[-10%] transition-all duration-500">
      {/* Image Section */}
      <div className="sm:w-1/3 w-full h-[300px] sm:h-auto">
        <img
          src={image}
          alt={name}
          className="w-[300px] h-[300px] sm:w-full sm:h-full object-cover mx-auto sm:mx-0"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:w-2/3 w-full flex flex-col justify-center gap-2">
        <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
        <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-base">
          <img src={assets.specialist} alt="" className="w-[18px] h-[18px]" />
          {speciality}
        </p>
        <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-base">
          <img src={assets.fees} alt="" className="w-[18px] h-[18px]" />₹{fee}
        </p>
        <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-base">
          <img src={assets.location} alt="" className="w-[18px] h-[18px]" />
          {location}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
