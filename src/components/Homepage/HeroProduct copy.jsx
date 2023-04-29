import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHorizontalScroll } from "../../hooks/HorizontalScroll";
const HeroProduct = () => {
  const scrollRef = useHorizontalScroll();
  const [position, setPosition] = useState(1);
  const [scrollWidth, setScrollWidth] = useState(0);
  const { heros } = useSelector((state) => state.products);
  useEffect(() => {
    const element = document.getElementById("content");
    let scrollW = element.scrollWidth;
    setScrollWidth(scrollW);
    console.log(scrollW);
  }, [heros]);

  const scrollhandlerfront = () => {
    const element = document.getElementById("content");
    const test = element.scrollWidth - element.offsetWidth;
    console.log(test, (scrollWidth / heros.length) * position);
    if (test < (scrollWidth / heros.length) * position) {
      console.log(heros.length, position);
      element.scrollTo((scrollWidth / heros.length) * position, 0);
      setPosition(heros.length);
    } else {
      console.log(
        heros.length,
        position + 1,
        (scrollWidth / heros.length) * position + 1
      );
      element.scrollTo((scrollWidth / heros.length) * position + 1, 0);
      setPosition(position + 1);
    }
  };
  const scrollhandlerback = () => {
    const element = document.getElementById("content");
    const test = element.scrollWidth - element.offsetWidth;
    console.log(test, (scrollWidth / heros.length) * position);
    if (test < (scrollWidth / heros.length) * position) {
      console.log(3, position, (scrollWidth / heros.length) * (position - 1));
      element.scrollTo((scrollWidth / heros.length) * (position - 1), 0);
      setPosition(position - 1);
    } else {
      console.log(5, position);
      element.scrollTo((scrollWidth / heros.length) * (position - 1), 0);
      setPosition(1);
    }
  };
  return (
    <div className=" relative w-full h-full ">
      <div
        className=" absolute top-[50%] z-50 bg-white cursor-pointer"
        onClick={scrollhandlerback}
      >
        {"<"}
      </div>
      <div
        className=" absolute right-0 top-[50%] z-50 bg-white cursor-pointer"
        onClick={scrollhandlerfront}
      >
        {">"}
      </div>
      <div
        id="content"
        className=" relative snap-x snap-mandatory scroll-smooth   w-full h-full gap-10  bg-secound flex   overflow-x-scroll   "
      >
        {heros.map((e, i) => (
          <div
            key={e.Front_img}
            id={i}
            className=" first:ml-10 snap-center flex justify-center  shrink-0 relative py-10 overflow-hidden "
          >
            <div className=" h-full">
              <img
                src={e.Front_img}
                className="relative shrink-0  object-cover h-[90%] bg-white"
              />
              <div className=" relative h-[10%] pt-2  select-none">
                <div className="proname ">
                  <h3 className=" text-sm truncate ">
                    {e?.design?.Design_Name}
                  </h3>
                </div>
                <h3 className=" text-sm text-neutral-500 mt-1">{`ผ้า${
                  e.fabric.Type.name
                }${e.fabric.Weaving.weaving_name}${
                  e.fabric.Color.FabricColorTechnique_name !== "เคมี"
                    ? e.fabric.Color.FabricColorTechnique_name
                    : ""
                }${
                  e?.fabric?.Pattern?.FabricPatternName
                    ? e?.fabric?.Pattern?.FabricPatternName
                    : ""
                }`}</h3>
                <h3 className=" text-sm text-neutral-700">{e.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProduct;
