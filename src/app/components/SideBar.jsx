import React, { useEffect, useState } from "react";
import { GiSplitCross } from "react-icons/gi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Checkout from "./Checkout";

function SideBar({
  isSideBar,
  setIsSideBar,
  cartitem,
  cartnumber,
  setcartnumber,
  upgrade,
  removeFromCart,
  minus,
  check,
  setcheck,
  total,
  settotal,
}) {

  useEffect(() => {
    if (cartitem.length >= 0) {
      const newtotal = cartitem.reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.quantity;
      }, 0);
      settotal(newtotal);
    }
    // else {
    //   settotal(0);
    // }
  }, [cartitem]);

  return (
    <div
      className={` ${
        isSideBar == true
          ? " game w-full  overflow-y-auto sm:px-2 px-1  sm:w-[55%] md:w-[45%] lg:w-[30%]"
          : "w-0 overflow-hidden"
      }   bg-white shadow-lg fixed duration-300 top-0 right-0 py-[20px] h-screen  rounded-[10px] z-30`}
    >
      <div className="w-full py-1 flex justify-end px-5  font-bold text-[25px] text-white gap-[30px]">
        <button className="" onClick={() => setIsSideBar(false)}>
          <ImCross className="hover:scale-150 text-red-700 text-[25px]" />
        </button>
      </div>
      <div className="w-full py-8   flex justify-center  items-center font-bold text-[22px] text-green-950  sm:text-[20px] md:text-[20px] ">
        <h1>Your Shopping Cart</h1>
      </div>
      <div
        className="w-full py-4 flex items-center  px-2 justify-between  font-bold sm:text-[25px] text-[22px] 
    "
      >
        <h1 className=" ">Prodcut </h1>
        <h1 className=" sm:text-start  w-[37%] sm:w-[35%]   ">Price</h1>
      </div>

      {cartitem.map((item, index) => (
        <div key={index} className="flex border shadow-lg mb-[20px] mr-0 ">
          <div className="w-full    flex items-center py-[10px] justify-around ">
            <div className="w-[50%]  sm:w-[55%] sm: py-2 flex   items-center text-[18px]  ">
              <img
                className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]    rounded-[50%] object-cover"
                src={item.img}
              />
              <h1 className="text-[12px] sm:text-[18px] px-2"> {item.full}</h1>
              <button className="px-1 text-[14px] minus" onClick={() => minus(item)}>
                <FaMinus
                  className={
                    item.quantity === 1
                      ? "   opacity-5 bg-white cursor-not-allowed "
                      : "  "
                  }
                />
              </button>
              <p className="plus">{item.quantity}</p>
              <button className="" onClick={() => upgrade(item)}>
                <FaPlus className="plus-1 px-1 text-[18px] sm:text-[22px]" />
              </button>
            </div>
            <div className="w-[37%] justify-between items-center py-2 flex    ">
              <h1 className=" delete text-[14px] sm:text-[18px] sm:px-4 px-6 text-center ">
                {" "}
                ${item.price}
              </h1>
              <button
                className=" sm:text-[20px] mr-2 text-[12px] hover:text-red-500 "
                onClick={() => removeFromCart(item)}
              >
                {" "}
                <MdDelete className="text-red-600 hover:text-red-700 hover:scale-125 " />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center">
        <h4 className=" sm:px-6 px-4 sm:py-2 py-1 mb-[10px]  rounded-[10px] bg-green-950 font-bold text-white">
          ${total}
        </h4>
      </div>

      <button
        onClick={() => setcheck(true)}
        className=" w-full px-1 text-[10px] sm:text-[15px] py-2 sm:px-4 sm:py-4 mt-[10px] rounded-[10px] bg-black font-bold text-white hover:bg-orange-600"
      >
        Checkout {cartitem?.length}
      </button>
      {/* <Checkout  />/ */}
    </div>
  );
}

export default SideBar;
