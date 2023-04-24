import React from "react";
import logo from "../img/logo-s-black.png";

const TopBar = () => {
  return (
    <div className=" z-40 w-full fixed  py-2 ">
      <div className="w-full flex justify-between">
        <div></div>
        <div>
          <img src={logo} className=" w-36 " />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopBar;
