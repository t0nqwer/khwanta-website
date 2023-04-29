import React from "react";
import SumamalHero from "../../img/2142019_190422_0205 - Copy.jpg";
const HeroKhwanta = () => {
  return (
    <div className="bg-brand w-full h-full">
      <div className="flex sm:flex-row flex-col h-full">
        <div className="sm:w-1/2 w-full  bg-secound h-full text-center md:text-2xl text-xl flex justify-center items-center ">
          <p className="w-3/5 ">
            “เราเชื่อว่าผ้าไทยนั้นมีคุณค่าในเรื่องของงานทอมือและลายผ้าอยู่แล้วแต่งานออกแบบ
            DESIGN ก็สำคัญไม่น้อยไปกว่ากันจึงมุ่งเน้นและพัฒนาเรื่องงานออกแบบ”
          </p>
        </div>
        <div className="sm:w-1/2 w-full h-full">
          <img src={SumamalHero} className=" object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroKhwanta;
