import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Card from "./Card";
const HeroProduct = () => {
  const { heros } = useSelector((state) => state.products);

  const [CardWidth, setCardWidth] = useState(0);
  const [SliderWidth, setSliderWidth] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [show, setShow] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    let Slidercontainer = document.getElementById("slider-container");
    let slider = document.getElementById("slider");
    let card = slider.getElementsByTagName("li");

    let SlidercontainerWidth = Slidercontainer.offsetWidth;
    let cardWidth = SlidercontainerWidth / show;
    const windowwidth = window.innerWidth;
    if (windowwidth >= 1200) setShow(3);
    if (windowwidth < 1200) setShow(2);
    if (windowwidth < 700) setShow(1);
    setSliderWidth(card.length * cardWidth);

    setCardWidth(SlidercontainerWidth / show);
  }, [heros]);
  const prev = () => {
    console.log(marginLeft);
    if (marginLeft === 0) return;
    setMarginLeft(marginLeft + CardWidth);
  };
  const next = () => {
    console.log(marginLeft);
    let slider = document.getElementById("slider");

    console.log(
      SliderWidth,
      marginLeft,
      Math.abs(marginLeft - CardWidth) + CardWidth * show
    );
    if (Math.abs(marginLeft) + CardWidth * show === SliderWidth) return;
    setMarginLeft(marginLeft - CardWidth);
  };
  return (
    <div className=" bg-secound h-full flex flex-col">
      <div className=" w-full h-48 flex text-center pt-10  justify-center items-center md:text-5xl text-4xl ">
        Lastest Collection{" "}
      </div>
      <div className=" relative w-full grow bg-secound flex justify-center items-center gap-2 xs:p-0 p-5 ">
        <div className=" w-1/12 xs:relative left-0 absolute  ">
          <div className="w-full xs:text-right text-brand">
            <button onClick={prev} className="text-brand">
              <MdNavigateBefore />
            </button>
          </div>
        </div>
        <div
          id="slider-container"
          className=" xs:w-10/12 w-full overflow-hidden "
        >
          <ul
            id="slider"
            className={`flex w-full transition-all duration-700 ease-in-out `}
            style={{ width: `${SliderWidth}px`, marginLeft: `${marginLeft}px` }}
          >
            {heros.map((product) => (
              <Card
                key={product.product_id}
                product={product}
                CardWidth={CardWidth}
              />
            ))}
          </ul>
        </div>
        <div className="w-1/12 xs:relative right-3 absolute  ">
          <div className="w-full text-brand text-left ">
            <button onClick={next}>
              <MdNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
