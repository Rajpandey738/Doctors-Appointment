import React, { useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const RelatedDoc = ({ speciality, docId }) => {
  const [relDoc, setRelDoc] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id != docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      <div className="flex flex-col items-center mt-10 mb-6 px-3">
        <h1 className="text-2xl font-medium">RELATED DOCTOR</h1>
        <p className="text-sm text-gray-500">
          Simply browse through our extensive list of trusted doctors
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center pt-5 px-8 sm:px-16">
        {relDoc.slice(0, 5).map((item, index) => (
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
    </div>
  );
};

export default RelatedDoc;
