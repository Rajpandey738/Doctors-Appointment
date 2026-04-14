import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="mx-4 sm:mx-[6%] mb-5">
      <p className="text-2xl text-[#1C352D] font-medium text-center mt-5 mb-10">
        Browse through the Doctors speciality.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col mb-7 sm:mb-0 border-b-2 sm:border-none pb-4 sm:pb-0 gap-4 text-sm text-[#1C352D]">
          {specialityData.map((spec, idx) => (
            <p
              key={idx}
              onClick={() =>
                speciality === spec.speciality
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec.speciality}`)
              }
              className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
                speciality === spec.speciality ? "bg-[#1C352D] text-white" : ""
              }`}
            >
              {spec.speciality}
            </p>
          ))}

          {/* <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "General physician"
                ? "bg-[#1C352D] text-white"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "Gynecologist" ? "bg-[#1C352D] text-white" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "Dermatologist" ? "bg-[#1C352D] text-white" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "Pediatricians" ? "bg-[#1C352D] text-white" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "Neurologist" ? "bg-[#1C352D] text-white" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-[#1c352D] rounded-2xl hover:bg-[#1C352D] hover:text-white transition-all duration-500 ${
              speciality === "Gastroenterologist"
                ? "bg-[#1C352D] text-white"
                : ""
            }`}
          >
            Gastroenterologist
          </p> */}
        </div>
        <div className="w-full flex flex-wrap flex-col md:flex-row gap-4">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="w-full md:w-[48%] lg:w-[42%] xl:w-[31%] flex"
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
      </div>
    </div>
  );
};

export default Doctors;
