import React from "react";
import headImg from "../img/1V9A8898.jpg";
import {
  BsShop,
  BsFacebook,
  BsTelephone,
  BsLine,
  BsInstagram,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" ">
      <div className="relative h-fit ">
        <div className=" w-full object-center">
          <img src={headImg} className=" object-cover h-[800px] w-full " />
        </div>
        <div className="absolute top-0 z-20 bg-black bg-opacity-40  w-full">
          <div className=" xl:ml-auto xl:mr-0 lg:w-1/2 w-full py-64 mx-auto  ">
            <div className=" text-white text-center   md:text-5xl text-4xl  leading-normal tracking-[.20em] font-semibold ">
              Contact Us
            </div>
          </div>
          <div className="mx-auto bg-secound w-[95%] py-10 pb-14 ml-auto mr-0">
            <div className="flex lg:flex-row flex-col justify-center items-center ">
              <div className="lg:w-1/2 w-full text-brand text-8xl font-bold flex  justify-center items-center">
                <h1 className="md:text-right text-center">Contact</h1>
              </div>
              <div className=" lg:w-1/2 w-full 2xl:pr-28 lg:pr-10 md:pr-3 px-5 mt-7 text-gray-700 text-base sm:text-lg font-medium mx-auto lg:text-left text-center">
                <div className=" flex space-x-10 mb-5 ">
                  <BsShop className="text-2xl" />
                  <p>
                    ศูนย์การเรียนรู้ขวัญตา 355 หมู่ 5 ตำบลโพธิ์ชัย
                    อำเภอเมืองหนองบัวลำภู จังหวัดหนองบัวลำภู 39000
                  </p>
                </div>
                <div className=" flex space-x-10 mb-5 ">
                  <BsTelephone className="text-2xl" />
                  <p>+66 62 826 6929</p>
                </div>
                <div className=" flex space-x-10 mb-5 ">
                  <MdEmail className="text-2xl" />
                  <p>khwantahandicraft@gmail.com</p>
                </div>
                <a
                  href="https://www.facebook.com/khwantathai"
                  className=" flex space-x-10 mb-5 "
                >
                  <BsFacebook className="text-2xl" />
                  <a href="https://www.facebook.com/khwantathai">
                    https://www.facebook.com/khwantathai
                  </a>
                </a>
                <a
                  href="https://www.instagram.com/khwanta.handicraft/"
                  className=" flex space-x-10 mb-5 "
                >
                  <BsInstagram className="text-2xl" />
                  <a href="https://www.instagram.com/khwanta.handicraft/">
                    https://www.instagram.com/khwanta.handicraft/
                  </a>
                </a>
                <div className=" flex space-x-10 mb-5 justify-center mt-10 ">
                  <a
                    href="https://lin.ee/M3rLQI1"
                    className=" bg-brand flex justify-center items-center text-white font-bold py-3 px-10 rounded "
                  >
                    <BsLine className="text-3xl mr-2" />
                    เพิ่มเพื่อน
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
