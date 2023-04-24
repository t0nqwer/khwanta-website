import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { links } from "../constants/side-menu";
import { useLocation } from "react-router-dom";
const Pathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Sidebar = () => {
  console.log(Pathname());
  return (
    <div className="w-full bg-white h-full hidden lg:flex flex-col text-base  justify-between px-10 select-none ">
      <div className=" pt-6 ">
        <Logo />
      </div>
      <div
        id="menu"
        className="grow flex flex-col justify-center space-y-4  font-normal  "
      >
        {links.map((link, index) => {
          if (link.pathname === Pathname()) {
            return (
              <a key={index} href={link.pathname} className="nav-active">
                {link.title}
              </a>
            );
          }
          return (
            <a key={index} href={link.pathname} className="nav">
              {link.title}
            </a>
          );
        })}
      </div>
      <div id="side-bar-footer" className="flex flex-col space-y-4 pb-5 ">
        <div className=" text-xl space-x-4 text-gray-700 flex">
          <a href="https://www.facebook.com/khwantathai">
            <TiSocialFacebook />
          </a>
          <a href="https://www.instagram.com/khwanta.handicraft/">
            <TiSocialInstagram />
          </a>
        </div>
        <div className=" text-xs text-gray-700">
          <p>© 2022 KHWANTA LIMITED PARTNERSHIP</p>
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
