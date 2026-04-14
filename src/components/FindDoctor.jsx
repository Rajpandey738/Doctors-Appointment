import React from "react";
import { doctors } from "../assets/assets";
import DoctorCard from "./DoctorCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const FindDoctor = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 py-16 bg-gray-200 text-[#1C352D]">
      <h1 className="text-2xl font-medium">
        FIND OUR{" "}
        <span className="bg-[#1C352D] text-white px-1 py-8 rounded-[50%]">
          DOCTOR
        </span>
      </h1>
      <p className="text-[2rem] sm:text-4xl font-semibold my-6 mx-4">
        Discover Our Doctor's
      </p>
      <div className="w-full flex flex-wrap gap-4 justify-center pt-5 px-8 sm:px-16">
        {doctors.slice(0, 6).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="w-full sm:w-[48%] lg:w-[31%] flex"
          >
            <DoctorCard
              image={item.image}
              name={item.name}
              speciality={item.speciality}
              location={item.address.line1}
              fee={item.fees}
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default FindDoctor;
