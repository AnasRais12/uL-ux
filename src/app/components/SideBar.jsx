import React, { useEffect, useState } from "react";
import { GiSplitCross } from "react-icons/gi";

function SideBar({ isSideBar, setIsSideBar, cartitem }) {
  const [total, settotal] = useState(0);
  // const [item, setitem] = useState([data])

  useEffect(() => {
    if (cartitem.length > 0) {
      const newtotal = cartitem.reduce((acc, currentItem) => {
        return acc + currentItem.price;
      }, 0);
      settotal(newtotal);
    }
  }, [cartitem]);
  
  return (
    <div
      className={` ${
        isSideBar == true
          ? " game w-[52%] overflow-y-auto px-2  sm:w-[45%] md:w-[40%] lg:w-[30%]"
          : "w-0 overflow-hidden"
      }   bg-white shadow-lg fixed duration-300 top-0 right-0 py-[20px] h-screen  rounded-[10px] z-40`}
    >
      <div className="w-full py-1 flex justify-end px-5  font-bold text-[25px] text-white gap-[30px]">
        <button className="" onClick={() => setIsSideBar(false)}>
          <GiSplitCross className="hover:scale-150 text-red-700 text-[25px]" />
        </button>
      </div>
      <div className="w-full py-8   flex justify-center  items-center font-bold text-[12px] text-green-950  sm:text-[20px] md:text-[20px] ">
        <h1>Your Shopping Cart</h1>
      </div>
      <div
        className="w-full py-4 flex items-center px-2 gap-5 font-bold sm:text-[25px] text-[11px] 
    "
      >
        <h1 className="w-[45%] ">Prodcut </h1>
        <h1 className="w-[45%] sm:text-end text-end  ">Price</h1>
      </div>

      {cartitem.map((item, index) => (
        <div key={index} className="">
          <div className="  w-full text-[20px] py-3 font-bold">
            <div className="w-full border-b-2 border-slate-400 flex items-center py-[10px] px-2 gap-2 ">
              <div className="sm:w-[220px]  w-[200px] py-2 flex gap-1 items-center ">
                <img
                  className="w-[40px] h-[40px]   rounded-[50%] object-cover"
                  src={item.img}
                />
                <h1 className="text-[12px] sm:text-[18px]"> {item.full}</h1>
              </div>
              <div className="w-[80px] sm:w-[100px]  lg:w-[120px]   sm:justify-end  py-2 flex justify-end px-1  ">
                <h1 className=" text-[10px] sm:text-[18px]"> ${item.price}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center">
        <h4 className=" sm:px-6 px-4 sm:py-2 py-1 mb-[10px] rounded-[10px] bg-green-950 font-bold text-white">
          ${total}
        </h4>
      </div>
      <button className=" w-full px-1 text-[10px] sm:text-[15px] py-2 sm:px-4 sm:py-4 mt-[10px] rounded-[10px] bg-black font-bold text-white hover:bg-orange-600">
        Proceed To Checkout
      </button>
      {/* <div className="cart-items">
        <ul>
          {item.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </li>
          ))}
        </ul>
      </div>
      <p>Total: ${total}</p> */}
    </div>
  );
}

export default SideBar;
