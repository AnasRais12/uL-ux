import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";
import { FaFemale } from "react-icons/fa";
import Making from "../Making";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";


const Navbar = ({ scrollToSection, scroll, kids, topslide, setIsSideBar,cartnumber }) => {
  const [click, setclick] = useState(false);

  const toggle = () => {
    setclick(!click);
  };
  return (
    <>
      <div
        ref={topslide}
        Empowering
        Your
        Lifestyle
        Choices
        className="w-full  bg-black py-3 flex items-center justify-around px-4 relative "
      >
        <div className="px-1 py-3 rounded-[50%] sm:px-3   ">
          <img
            className="w-[100px] px-0 h-[60px] rounded-[50%] border-2 border-black sm:w-full sm:h-[50px]"
            src="images/online.avif"
          />
        </div>
        <div className="w-[100%]  h-[40px] px-2 sm:w-[60%] sm:px-4 ">
          <input
            className="w-full h-[40px] rounded-[5px] border-2 pl-5 "
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex  items-center gap-[5px] text-[19px]  text-white sm:gap-[25px]     ">
          <Link
            className="border-2 border-black hover:border-b-orange-100 hidden sm:block "
            target="blank"
            href="/help"
          >
            Help
          </Link>
          <div
            className=" items-center  gap-[4px] border-2 border-black hover:border-b-orange-100  hidden sm:flex-row sm:flex
          "
          >
            <Link className="" href="">
              Sign
            </Link>
            <p>In</p>
          </div>
          <button
            onClick={toggle} 
            
            className="py-2 px-2 font-bold text-[18px]    rounded-[20px] block sm:hidden"
          >

            {click ?(
             < GiSplitCross className="font-bold text-[23px] text-white"/>)  : <FaBars className="font-bold text-[23px]" /> }
          </button>
          
          {click && (
            <div className="w-[27%] py-10 duration-500    bg-black text-white absolute right-0 bottom-[-175px] border-4 border-black rounded-[5px] justify-center flex flex-col  px-2 font-bold text-[17px] items-center sm:hidden ">
              <div className="rounded-[50%]   bg-blue-600 mt-[5px] mb-[5px]  ">
               
              </div>
              <Link
                className="border-2 border-black hover:border-b-orange-100 mb-[5px]  "
                target="blank"
                href="/help"
              >
                Help
              </Link>
              <Link
                className="border-2 border-black hover:border-b-orange-100 mb-[15px] "
                target="blank"
                href=""
              >
                Sign In
              </Link>
            </div>
          )}
          <div className="flex hover:border-b-orange-100 border-black border-2">
          <button
            onClick={() => setIsSideBar(true)}
            className="border-2 border-black "
          >
            <MdShoppingCartCheckout className="text-[26px]" />
          </button>
          <p className="text-red-600">{cartnumber}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-2 py-3  flex items-center font-bold text-black text-[20px] border-b-2 border-black mb-[40px] sm:mb-0  ">
        <div className="w-full bg-white text-black py-0 justify-center items-center flex-col gap-[15px] flex lg:gap-[50px] sm:gap-[30px] sm:flex-row md:gap-[40px] "   >
          
          <button
            onClick={scrollToSection}
            className="flex items-center text-[20px]"
          >
              <h1 className="text-[20px] border-2 border-white hover:border-b-black">
              Female Product
            </h1>
            <FaFemale className="text-[20px] hover:animate-bounce text-red-900" />
          
          </button>
          <button onClick={scroll} className="text-[20px] flex items-center">
          <h1 className="border-2 border-white  hover:border-b-black">
              Men's Product
            </h1>
            <BiMale className="text-[20px] hover:animate-bounce  text-red-900" />
            
          </button>
          <button onClick={kids} className="flex items-center text-[20px] mb-[20px] sm:mb-0">
          <h1 className=" border-2 border-white hover: hover:border-b-black">
              Kid's Product
            </h1>
            <FaChild className=" hover:animate-bounce text-red-900" />
           
          </button>
        </div>
      </div>
      <Making />

      <div className="w-full bg-blue-800 flex "></div>
      <div className="w-full h-full  text-black font-bold text-center  mb-[40px]  text-[30px] sm:text-[40px] ">
        <h1 className=" heading  ">Men's Product</h1>
      </div>
    </>
  );
};

export default Navbar;
