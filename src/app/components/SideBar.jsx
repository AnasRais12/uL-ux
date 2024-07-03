import React from "react";
import { GiSplitCross } from "react-icons/gi";
function SideBar({ isSideBar, setIsSideBar, setcartitem }) {
  let Price = setcartitem.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  return (
    <div
      className={` ${
        isSideBar == true
          ? "w-[30%] overflow-y-auto px-5"
          : "w-0 overflow-hidden"
      }   bg-white shadow-lg fixed duration-300 top-0 right-0 py-[20px] h-screen  rounded-[10px] z-40`}
    >
      <div className="w-full py-4 flex justify-end font-bold text-[25px] text-white gap-[30px]">
        <button className="" onClick={() => setIsSideBar(false)}>
          <GiSplitCross className="hover:scale-150 text-red-700 text-[25px]" />
        </button>
      </div>
      <div className="w-full py-8  flex justify-center items-center font-bold text-[25px] text-green-950 gap-[30px]">
        <h1>Your Shopping Cart</h1>
      </div>
      <div
        className="w-full py-4 flex items-center px-2 gap-2 font-bold text-[25px]
    "
      >
        <h1 className="w-[45%] ">Prodcut </h1>
        <h1 className="w-[45%] text-end">Price</h1>
      </div>

      {setcartitem.map((item, index) => (
        <div key={index} className="">
          <div className="  w-full text-[20px] py-3 font-bold">
            <div className="w-full border-b-2 border-slate-400 flex items-center py-[10px] px-2 gap-2 ">
              <div className="w-[45%] py-2 flex gap-4 ">
                <img className="w-[20%]   rounded-[50%]" src={item.img}/>
              <h1> {item.full}</h1>
              </div>
              <div className="w-[45%] py-2">
              <h1 className="text-right"> {item.price}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className=" w-full px-4 py-4 mt-[20px] rounded-[10px] bg-black font-bold text-white hover:bg-orange-600">Proceed to Checkout</button>
    </div>
  );
}

export default SideBar;
