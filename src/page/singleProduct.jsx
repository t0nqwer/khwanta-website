import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductApi from "../api/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { adddata } from "../store/Reducer";
import ImageSlider from "../components/ImageSlider";
import { SizeTable } from "../components";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  const { id } = useParams();
  const [Images, setImages] = useState([]);
  const [Sizedata, setSizedata] = useState([]);
  const [SizeList, setSizeList] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await ProductApi.get(`/web/SingleProduct/${id}`);
      console.log(data);
      dispatch(adddata(data));
    };
    fetchProducts();
  }, [id]);
  console.log(data);
  useEffect(() => {
    console.log(data);
    if (data) {
      const detailimage = data.Product_Cloth_Detail.map((e) => e.Img_Url);
      const imageArr = [data.Front_img, data.Back_img, ...detailimage];
      setImages(imageArr);
      const arr = [{ Size_ID: "" }];
      if (data?.design?.Size) {
        setSizeList(arr.concat(data?.design?.Size.map((e) => e)));
        setSizedata(data?.design?.Size[0]?.Size_De_Info);
      }
    }
  }, [data]);
  return (
    <div className="flex lg:flex-row flex-col w-full relative snap-y  overflow-x-hidden overflow-y-auto">
      <div className="xl:w-1/3 lg:w-1/2 relative shrink-0 lg:h-screen ">
        {Images.map((image) => {
          if (window.innerWidth >= 1024)
            return (
              <div className="  w-full  snap-center border-0  relative">
                <img src={image} alt="" className="object-cover" />
              </div>
            );
        })}
        {window.innerWidth < 1024 ? <ImageSlider images={Images} /> : ""}
      </div>
      <div className="xl:w-2/3  lg:w-1/2 sticky top-0 shrink-0 bg-white right-0 lg:h-screen flex justify-center items-center ">
        <div className="lg:w-[23rem] w-2/3 mx-auto lg:py-0 py-10 ">
          <h1 className="text-xl font-semibold ">
            {data?.design?.Design_Name}
          </h1>
          <h3 className=" text-sm text-neutral-500 mt-1">
            {data &&
              `ผ้า${data.fabric.Type.name}${data.fabric.Weaving.weaving_name}${
                data.fabric.Color.FabricColorTechnique_name !== "เคมี"
                  ? data.fabric.Color.FabricColorTechnique_name
                  : ""
              }${
                data?.fabric?.Pattern?.FabricPatternName
                  ? data?.fabric?.Pattern?.FabricPatternName
                  : ""
              }`}
          </h3>
          <h2 className="text-lg font-semibold ">฿ {data?.price}</h2>
          <div className="border-t border-black mt-5 border-1"></div>
          <h2 className="text-lg font-semibold text-center mt-3 "> ขนาด</h2>
          <div className="w-full mt-2 flex justify-center">
            <SizeTable data={data} SizeList={SizeList} Sizedata={Sizedata} />
          </div>
          <button className="w-full bg-brand text-xl p-4 mt-5 rounded-full">
            เพิ่มเพื่อนเลย
          </button>
          <h2 className="text-lg mt-5">
            สอบถามข้อมูลเพิ่มเติมทาง <b>LINE</b> พร้อมบริการสั่งซื้อและจัดส่งฟรี
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
