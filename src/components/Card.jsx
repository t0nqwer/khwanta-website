import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.product_id}`);
  };
  return (
    <div className=" bg-neutral-100 cursor-pointer" onClick={handleClick}>
      <div className="">
        <img
          src={product.Front_img}
          className=" object-cover object-center h-[500px] w-[450px]"
          alt={product.name}
        />
      </div>
      <div className="py-3 px-3 relative  select-none">
        <div className="proname ">
          <h3 className=" text-sm truncate ">{product.design.Design_Name}</h3>
        </div>
        <h3 className=" text-sm text-neutral-500 mt-1">{`ผ้า${
          product.fabric.Type.name
        }${product.fabric.Weaving.weaving_name}${
          product.fabric.Color.FabricColorTechnique_name !== "เคมี"
            ? product.fabric.Color.FabricColorTechnique_name
            : ""
        }${product.fabric.Pattern.FabricPatternName}`}</h3>
        <h3 className=" text-sm text-neutral-700">{product.price}</h3>
      </div>
    </div>
  );
};

export default Card;
