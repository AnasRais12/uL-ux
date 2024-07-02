import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";
import { FaFemale } from "react-icons/fa";
const Navbar = ({ scrollToSection }) => {
  return (
    <>
      <div className="w-full h-[10vh] bg-black py-2 flex items-center justify-around ">
        <div className="w-[60px] h-[50px] bg-red-500 rounded-[50%]  ">
          <img
            className="w-full h-[50px] rounded-[50%] border-2 border-white"
            src="images/online.avif"
          />
        </div>
        <div className="w-[60%]  h-[40px] ">
          <input
            className="w-full h-[40px] rounded-[15px] border-2 pl-5 "
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="w-[15%]  py-1 flex items-center gap-[25px] text-[22px] text-white  ">
          <Link
            className="border-2 border-black hover:border-b-orange-100"
            href=""
          >
            Help
          </Link>
          <Link
            className="border-2 border-black hover:border-b-orange-100"
            href=""
          >
            Sign In
          </Link>
          <Link
            className="border-2 border-black hover:border-b-orange-100"
            href=""
          >
            <MdShoppingCartCheckout />
          </Link>
        </div>
      </div>
      <div className="w-full  h-[10vh] flex items-center font-bold text-black text-[20px] px-4">
        <HiShoppingCart className=" text-[30px] text-black hover:animate-spin duration-50" />
        <div
          className="w-full bg-white text-black h-[10vh] justify-center items-center gap-[50px]
       flex"
        >
          <button
            onClick={() => scrollToSection}
            className="text-[25px] flex items-center"
          >
            <BiMale className="text-[30px] hover:animate-bounce" />
            <h1 className="border-2 border-white  hover:border-b-black">
              Men's Product
            </h1>
          </button>
          <button onClick={() => scrollToSection} 
          className="flex items-center text-[25px]">
            <FaFemale className="text-[30px] hover:animate-bounce" />
            <h1 className="text-[25px] border-2 border-white hover:border-b-black">
              Female Product
            </h1>
          </button>
          <div className="flex items-center text-[25px]">
            <FaChild className=" hover:animate-bounce" />
            <h1 className=" border-2 border-white hover: hover:border-b-black">
              {" "}
              Kid's Product
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-white flex">
        <div className="w-[50%] h-[70vh] bg-yellow-700 border-r-4 border-black">
          <img className="w-full h-[70vh]" src="images/store-2.avif" />
        </div>
        <div className="w-[50%] h-[70vh] bg-yellow-700 border-r-4 border-black">
          <img className="w-full h-[70vh]" src="images/store.avif" />
        </div>
      </div>
      <div className="w-full h-full bg-gray-900  text-black font-bold text-center pt-[20px]  text-[40px] ">
        <h1 className=" heading  ">Men's Product</h1>
      </div>
    </>
  );
};

export default Navbar;
