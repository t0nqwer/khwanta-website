import { useRef, useEffect, useState } from "react";
import {
  HeroKhwanta,
  HeroMumbai,
  HeroProduct,
  HeroSumamal,
} from "../components";
import useNearestValue from "../hooks/useNearestValue";
import ProductApi from "../api/ProductApi";
import { useDispatch } from "react-redux";
import { addheros } from "../store/Reducer";
import { useHorizontalScroll } from "../hooks/HorizontalScroll";
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await ProductApi.get("/web/Hero");

      dispatch(addheros(data));
    };
    fetchProducts();
  }, []);
  return (
    <div
      id="main"
      className="text-5xl bg-black   snap-y  h-screen overflow-x-hidden overflow-y-scroll max-xs:scrollbar-hide  "
    >
      <div id="section-1" className=" md:snap-start  bg-brand h-[95%]">
        <HeroMumbai />
      </div>

      <div id="section-2" className=" md:snap-start  bg-brand h-[100%] ">
        <HeroProduct />
      </div>

      <div
        id="section-3"
        className=" md:snap-start  bg-brand md:h-[90%] h-4/5  "
      >
        <HeroSumamal />
      </div>
      <div id="section-4" className=" md:snap-center bg-brand  h-4/5 ">
        <HeroKhwanta />
      </div>
      <div className=" bg-brand  ">
        <div className="mx-auto  w-full py-20 ml-auto mr-0">
          <div className=" 2xl:mx-52 md:mx-10 mx-8  text-xl text-center">
            <p className="font-medium text-secound">" "</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
