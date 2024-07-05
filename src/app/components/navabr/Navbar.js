import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";
import { FaFemale } from "react-icons/fa";
import Making from "../Making";

const Navbar = ({ scrollToSection, scroll, kids, topslide, setIsSideBar }) => {
 
  return (
    <>
      <div
        ref={topslide}Empowering Your Lifestyle Choices
        className="w-full  bg-black py-3 flex items-center justify-around "
      >
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
        <div className=" py-2 flex items-center gap-[25px] text-[19px]  text-white ">
          <Link
            className="border-2 border-black hover:border-b-orange-100 " target="blank"
            href ="/help">
            Help
          </Link>
          <Link
            className="border-2 border-black hover:border-b-orange-100"
            href=""
          >
            Sign In
          </Link>
          <button
            onClick={() => setIsSideBar(true)}
            className="border-2 border-black hover:border-b-orange-100"
          >
            <MdShoppingCartCheckout className="text-[26px]" />
          </button>
        </div>
      </div>
      <div className="w-full bg-white px-2 py-3  flex items-center font-bold text-black text-[20px]">
        <HiShoppingCart className=" bg-white text-[30px]   text-black hover:animate-spin duration-50" />
        <div className="w-full bg-white text-black h-[10vh] justify-center items-center gap-[50px]  flex">
          <button onClick={scroll} className="text-[20px] flex items-center">
            <BiMale className="text-[20px] hover:animate-bounce  text-red-900" />
            <h1 className="border-2 border-white  hover:border-b-black">
              Men's Product
            </h1>
          </button>
          <button
            onClick={scrollToSection}
            className="flex items-center text-[20px]"
          >
            <FaFemale className="text-[20px] hover:animate-bounce text-red-900" />
            <h1 className="text-[20px] border-2 border-white hover:border-b-black">
              Female Product
            </h1>
          </button>
          <button onClick={kids} className="flex items-center text-[20px]">
            <FaChild className=" hover:animate-bounce text-red-900" />
            <h1 className=" border-2 border-white hover: hover:border-b-black">
              Kid's Product
            </h1>
          </button>
        </div>
      </div>
    <Making/>



       <div className="w-full bg-blue-800 flex ">
       </div> 
      <div className="w-full h-full  text-black font-bold text-center  mb-[40px]  text-[40px] ">
        <h1 className=" heading  ">Men's Product</h1>
      </div>
    </>
  );
};

export default Navbar;
