import React from "react";
import { HeroMumbai, SideBar } from "./components";
import { Contact, History, Homepage, Shop, SingleProduct, Story } from "./page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="text-5xl  flex    overflow-visible ">
          <div className=" md:w-64 w-0 shrink-0 h-screen z-10 fixed">
            <SideBar />
          </div>
          <div className="bg-brand grow max-w-screen overflow-visible  ml-0 flex ">
            <div className="md:w-64 h-full w-0 shrink-0">s</div>
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
