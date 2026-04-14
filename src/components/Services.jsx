import React from "react";
import { service } from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="mt-[4rem] mb-[2rem]">
      <div className="flex flex-wrap gap-3">
        {service.map((item, index) => (
          <div
            key={item.id}
            className="w-full sm:w-[48%] lg:w-[23%] flex justify-center"
          >
            <ServiceCard
              image={item.image}
              heading={item.title}
              discription={item.discription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
