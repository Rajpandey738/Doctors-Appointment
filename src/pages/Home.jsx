import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import FindDoctor from "../components/FindDoctor";
import Services from "../components/Services";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="mx-4 sm:mx-[6%]">
        <Header />
        <Services />
        <SpecialityMenu />
      </div>
      <div>
        <FindDoctor />
      </div>
      <div className="mx-4 sm:mx-[6%]">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
