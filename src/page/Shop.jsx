import React, { useEffect, useState } from "react";
import ProductApi from "../api/ProductApi";
import { useDispatch } from "react-redux";
import { ProductList } from "../components";
import { addproduct } from "../store/Reducer";

const Shop = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await ProductApi.get("/web/products");
      console.log(data);
      dispatch(addproduct(data));
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Shop;
