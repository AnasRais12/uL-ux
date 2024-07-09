import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Help = () => {
  return (
    <>
    <div className="w-full sm:py-5 bg-gradient-to-r from-green-950 via-green-900  to-black py-10">
      <div className="w-full h-[40vh] font-bold flex justify-center items-center text-white sm:text-[40px] text-[20px] ">
        <h1>How Can We Help  You?</h1>
      </div>
      <div className="w-full   flex flex-col">
        <div className="w-full bg-gray-200 py-10 flex justify-center items-center gap-16    ">
          <div className="py-10 bg-white flex px-4 items-center rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <IoSettingsOutline className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold inline-block border-1 border-white">
                Getting Started
              </h1>
              <p className="text-[12px] mt-[5px]">
                "Our 'Getting Started' section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
          <div className="py-10 bg-white flex px-4 items-center  rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <FaUserAlt className="text-[40px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold ">User Account</h1>
              <p className="text-[12px] mt-[5px]">
                "Our 'User Setting' section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 py-10 flex justify-center items-center gap-16  ">
          <div className="py-10 bg-white flex px-4 items-center rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <FaLock className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Security Option</h1>
              <p className="text-[12px] mt-[5px]">
                "Our 'Security Option' section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
          <div className="py-10 bg-white flex px-4 items-center  rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <MdPayments className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Payment Method</h1>
              <p className="text-[12px] mt-[5px]">
                "Our'Payment Method'section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200  py-10 flex justify-center items-center gap-16  ">
          <div className="py-10 bg-white flex px-4 items-center rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <AiFillProduct className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Prodcut Features</h1>
              <p className="text-[12px] mt-[5px]">
                "Our'Product Feature'section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
          <div className="py-10 bg-white flex px-4 items-center  rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500  ">
            <MdOutlineDashboardCustomize className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Customization </h1>
              <p className="text-[12px] mt-[5px]">
                "Our'Customization opti'section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 py-10 flex justify-center items-center gap-16  ">
          <div className="py-10 bg-white flex px-4 items-center rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <FaDownload className="text-[50px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Digital Download</h1>
              <p className="text-[12px] mt-[5px]">
                "Our 'Digital Download' section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
          <div className="py-10 bg-white flex px-4 items-center  rounded-[15px] shadow-lg shadow-black text-blue-600 hover:scale-125 duration-500 ">
            <MdOutlineMail className="text-[70px]" />
            <div className="flex flex-col px-2">
              <h1 className="text-[20px] font-bold">Email Marketing</h1>
              <p className="text-[12px] mt-[5px]">
                "Our 'Email Marketing' section is designed.
                <br />
                Games we provide a step-by-step guide
                <br /> how to make the most of our services{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-gray-200  flex justify-center pt-[20px] flex-col ">
        <h1 className="font-bold mb-[5px] text-[24px] text-center">
          Did'nt find an answer
        </h1>
        <h4 className="text-center">
          Our Team has ready to answer your question.
        </h4>
        <div className="w-full h-[10vh]  flex px-10 gap-4 items-center justify-center text-gray-900">
          <div className="px-2 py-2  rounded-[50%] text-[22px]">
            <FaTwitter className="w-full" />
          </div>
          <div className="px-2 py-2  rounded-[50%] text-[22px] ">
            <FaFacebook className="w-full" />
          </div>
          <div className="px-2 py-2  rounded-[50%] text-[22px] ">
            <FaDiscord className="w-full" />
          </div>
          <div className="px-2 py-2  rounded-[50%] text-[22px]">
            <FaInstagram className="w-full" />
          </div>

        </div>
        <div className="w-full py-2 flex justify-center items-center ">
        <button  className="bg-blue-600 text-white font-bold  py-2 px-6 rounded-[15px] hover:bg-red-500 focus:bg-green-700"> Contact Us</button>
        </div>
        </div>
        </div>
    </>
  );
};

export default Help;
