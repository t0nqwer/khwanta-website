import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { links } from "../constants/side-menu";
import { useLocation } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { setMenu } from "../store/Menu";
import { useDispatch, useSelector } from "react-redux";

const Pathname = () => {
  const location = useLocation();
  return location.pathname;
};
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const MobileMenu = () => {
  const dispatch = useDispatch();
  const { IsActive } = useSelector((state) => state.menuActive);
  useEffect(() => {
    const background = document.getElementById("mobile-menu-background");
    const element = document.getElementById("mobile-menu");
    if (IsActive) {
      background.classList.add("opacity-0");
      element.classList.add("-translate-x-full");
      delay(1).then(() => {
        element.classList.remove("-translate-x-full");
        background.classList.remove("opacity-0");
      });
    }
  }, [IsActive]);
  const handleClick = () => {
    const element = document.getElementById("mobile-menu");
    const background = document.getElementById("mobile-menu-background");
    // element.classList.add("translate-x-0");
    background.classList.add("opacity-0");
    element.classList.add("-translate-x-full");
    delay(310).then(() => {
      // element.classList.remove("translate-x-0");
      dispatch(setMenu(false));
    });
  };
  return (
    <div className="fixed z-50 w-full h-screen flex select-none ">
      <div
        id="mobile-menu"
        className=" transition-all duration-300  shrink-0  xs:w-64 w-full h-screen  bg-brand absolute z-50 "
      >
        <div className="relative w-full h-screen xs:pb-0 pb-14">
          <div
            className=" absolute xs:text-2xl text-4xl right-3 top-2 active:bg-brand rounded-full p-2 active:text-white"
            onClick={handleClick}
          >
            <MdOutlineClose />
          </div>
          <div className="w-full bg-white h-full  flex flex-col text-base  justify-between px-10 select-none ">
            <div className=" pt-6 ">
              <Logo />
            </div>
            <div
              id="menu"
              className="grow flex flex-col justify-center xs:items-start items-center space-y-4  font-normal  "
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
        </div>
      </div>
      <div
        id="mobile-menu-background"
        className=" w-full transition-opacity duration-300  bg-zinc-900 bg-opacity-95"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default MobileMenu;
