import React, { useState, useEffect } from "react";
import { HeroMumbai, MobileMenu, SideBar, TopBar } from "./components";
import { Contact, History, Homepage, Shop, SingleProduct, Story } from "./page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store/Store";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

const App = () => {
  const [width, setWidth] = useState(1000);
  const wi = window.innerWidth;
  console.log(wi);
  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { IsActive } = useSelector((state) => state.menuActive);
  return (
    <BrowserRouter>
      {IsActive ? <MobileMenu /> : ""}
      <div className="text-5xl  flex    overflow-visible ">
        {wi < 1024 ? <TopBar /> : ""}
        <div className=""></div>
        <div className="lg:w-64 w-0 shrink-0 h-screen z-10 fixed">
          <SideBar />
        </div>
        <div className="bg-brand  w-screen max-w-screen overflow-visible  ml-0 ">
          {/* <div className="lg:w-64 h-full w-0 shrink-0">
              {" "}
              <SideBar />
            </div> */}
          <div className=" lg:pl-64 pl-0 w-full overflow-visible">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="shop" element={<Shop />} />
              <Route path="story" element={<Story />} />
              <Route path="history" element={<History />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product/:id" element={<SingleProduct />} />
            </Routes>
            {/* <Homepage /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
