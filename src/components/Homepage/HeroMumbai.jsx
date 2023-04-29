import React from "react";
import MumBaiBG from "../../img/DSC_7101.jpg";
import Logomumbai from "../../img/ktmumbai.png";
const HeroMumbai = () => {
  return (
    <div className=" w-full h-full relative">
      <div
        className="w-full  text-center h-full bg-cover md:bg-center flex justify-center items-center   bg-[center_left_60rem] "
        style={{ backgroundImage: `url(${MumBaiBG})` }}
      >
        <section className=" ">
          <img
            src={Logomumbai}
            className="xl:w-[500px] lg:w-[400px] w-80 lg:ml-96 ml-0  content-center object-cover"
            alt="mumbai-text"
          />
        </section>
      </div>
    </div>
  );
};

export default HeroMumbai;
