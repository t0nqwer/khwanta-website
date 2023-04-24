import React, { useState, useEffect } from "react";
import { HeroMumbai, SideBar, TopBar } from "./components";
import { Contact, History, Homepage, Shop, SingleProduct, Story } from "./page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

const App = () => {
  const [width, setWidth] = useState(1200);
  const wi = window.innerWidth;
  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="text-5xl  flex    overflow-visible ">
          {width < 768 ? <TopBar /> : ""}
          <div className=""></div>
          <div className="lg:w-64 w-0 shrink-0 h-screen z-10 fixed">
            <SideBar />
          </div>
          <div className="bg-brand grow max-w-screen overflow-visible  ml-0 flex ">
            <div className="lg:w-64 h-full w-0 shrink-0">s</div>
            <div className="grow overflow-visible">
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
    </Provider>
  );
};

export default App;
