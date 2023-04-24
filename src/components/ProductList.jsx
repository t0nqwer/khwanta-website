import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 ">
      {products.map((product) => (
        <Card key={product.product_id} product={product}>
          {product.name}
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
