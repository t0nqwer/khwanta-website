import { useRef, useEffect, useState } from "react";
import {
  HeroKhwanta,
  HeroMumbai,
  HeroProduct,
  HeroSumamal,
} from "../components";
import useNearestValue from "../hooks/useNearestValue";
const Homepage = () => {
  const [divPosition, setDivPosition] = useState([]);
  const [data, setData] = useState([]);
  const [target, setTarget] = useState(0);
  const scrollfunction = (e) => {
    console.log(e.target.id);
    console.log(e);
    document.getElementById(`section-${e.target.id}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [nearestValue, findNearestValue] = useNearestValue(divPosition, target);
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const divv = document.getElementById("main");
    console.log(divv.translate.valueOf());
    console.log();
    const position = window.pageYOffset;
    const scrollPercentage = (position / totalHeight) * 100;
    console.log(scrollPercentage, position, totalHeight);
    setScrollPosition(scrollPercentage);
  };

  const scrollToTop = (e) => {
    const sec1 = document.getElementById("section-1");
    const sec2 = document.getElementById("section-2");
    const sec3 = document.getElementById("section-3");
    const sec4 = document.getElementById("section-4");
    const arr = [
      Math.round((sec1.offsetTop / e.currentTarget.scrollHeight) * 100),
      Math.round((sec2.offsetTop / e.currentTarget.scrollHeight) * 100),
      Math.round((sec3.offsetTop / e.currentTarget.scrollHeight) * 100),
      Math.round((sec4.offsetTop / e.currentTarget.scrollHeight) * 100),
    ];
    const data = [
      { name: "section-1", value: arr[0], divname: "1" },
      { name: "section-2", value: arr[1], divname: "2" },
      { name: "section-3", value: arr[2], divname: "3" },
      { name: "section-4", value: arr[3], divname: "4" },
    ];
    setDivPosition(arr);
    setTarget(
      Math.round(
        (e.currentTarget.scrollTop / e.currentTarget.scrollHeight) * 100
      )
    );
    setData(data);
  };
  useEffect(() => {
    findNearestValue();
    const [reddot] = data.filter((item) => item.value === nearestValue);
    const graydot = data.filter((item) => item.value !== nearestValue);
    if (reddot) {
      document.getElementById(reddot?.divname).checked = true;
      graydot.map((item) => {
        document.getElementById(item.divname).checked = false;
      });
    }
  }, [target, divPosition]);

  return (
    <div
      id="main"
      className="text-5xl bg-black   snap-y  h-screen grow overflow-x-hidden overflow-y-scroll "
      onScroll={scrollToTop}
    >
      <div className="fixed z-50 right-10 h-full flex items-center">
        <div className="flex flex-col space-y-5">
          <div>
            <input
              type="radio"
              name="option"
              id="1"
              className="peer hidden"
              onChange={scrollfunction}
            />
            <label
              htmlFor="1"
              className="block cursor-pointer select-none rounded-xl p-2 text-center bg-neutral-500 hover:bg-neutral-400 bg-opacity-50 peer-checked:bg-brand"
            ></label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              id="2"
              className="peer hidden"
              onChange={scrollfunction}
            />
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-xl p-2 text-center bg-neutral-500 hover:bg-neutral-400 bg-opacity-50 peer-checked:bg-brand"
            ></label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              id="3"
              className="peer hidden"
              onChange={scrollfunction}
            />
            <label
              htmlFor="3"
              className="block cursor-pointer select-none rounded-xl p-2 text-center bg-neutral-500 hover:bg-neutral-400 bg-opacity-50 peer-checked:bg-brand"
            ></label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              id="4"
              className="peer hidden"
              onChange={scrollfunction}
            />
            <label
              htmlFor="4"
              className="block cursor-pointer select-none rounded-xl p-2 text-center bg-neutral-500 hover:bg-neutral-400 bg-opacity-50 peer-checked:bg-brand"
            ></label>
          </div>
        </div>
      </div>

      <div id="section-1" className=" snap-start  bg-brand h-[95%]">
        <HeroMumbai />
      </div>

      <div id="section-2" className=" snap-center  bg-brand h-4/5 ">
        <HeroProduct />
      </div>

      <div id="section-3" className=" snap-center  bg-brand h-4/5 ">
        <HeroSumamal />
      </div>
      <div id="section-4" className=" snap-center bg-brand  h-4/5 ">
        <HeroKhwanta />
      </div>
    </div>
  );
};

export default Homepage;
