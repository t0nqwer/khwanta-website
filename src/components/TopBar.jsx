import React from "react";
import logo from "../img/logo-s-black.png";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { setMenu } from "../store/Menu";
import { useDispatch, useSelector } from "react-redux";
const TopBar = () => {
  const dispatch = useDispatch();
  const { IsActive } = useSelector((state) => state.menuActive);
  return (
    <div className=" z-40 w-full fixed   py-2 ">
      <div class="absolute inset-0 bg-gradient-to-b from-white  to-transparent opacity-50"></div>
      <div className=" relative w-full flex justify-center">
        <div
          onClick={() => dispatch(setMenu(true))}
          className=" absolute text-3xl left-0 h-full flex items-center pl-3"
        >
          <MdOutlineMenu />
        </div>
        <div>
          <img src={logo} className=" w-36 " />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
