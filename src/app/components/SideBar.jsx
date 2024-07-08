import React, { useEffect, useState } from "react";
import { GiSplitCross } from "react-icons/gi";

function SideBar({ isSideBar, setIsSideBar, cartitem }) {
  const [total, settotal] = useState(0);
  // const [item, setitem] = useState([data])

    useEffect(()=>{
      if(cartitem.length> 0){
    const newtotal = cartitem.reduce((acc, currentItem) => {
        return acc + currentItem.price++
      
    }, 0);
    settotal(newtotal)
  }
  },[cartitem])
  console.log(total)
  return (
    <div
      className={` ${
        isSideBar == true
          ? " game w-[30%] overflow-y-auto px-5"
          : "w-0 overflow-hidden"
      }   bg-white shadow-lg fixed duration-300 top-0 right-0 py-[20px] h-screen  rounded-[10px] z-40`}
    >
      <div className="w-full py-4 flex justify-end font-bold text-[25px] text-white gap-[30px]">
        <button className="" onClick={() => setIsSideBar(false)}>
          <GiSplitCross className="hover:scale-150 text-red-700 text-[25px]" />
        </button>
      </div>
      <div className="w-full py-8  flex justify-center bg-blue-500  items-center font-bold text-[12px] text-green-950 gap-[30px] sm:text-[15px] ">
        <h1>Your Shopping Cart</h1>
      </div>
      <div
        className="w-full py-4 flex items-center px-2 gap-2 font-bold text-[25px]
    "
      >
        <h1 className="w-[45%] ">Prodcut </h1>
        <h1 className="w-[45%] text-end">Price</h1>
      </div>

      {cartitem.map((item, index) => (
        <div key={index} className="">
          <div className="  w-full text-[20px] py-3 font-bold">
            <div className="w-full border-b-2 border-slate-400 flex items-center py-[10px] px-2 gap-2 ">
              <div className="w-[45%] py-2 flex gap-4 ">
                <img className="w-[20%]   rounded-[50%]" src={item.img} />
                <h1> {item.full}</h1>
              </div>
              <div className="w-[45%] py-2">
                <h1 className="text-right"> ${item.price}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center">
      <h4 className=" px-6 py-2 mb-[10px] rounded-[10px] bg-green-950 font-bold text-white">
        ${total}
      </h4>
      </div>
      <button className=" w-full px-4 py-4 mt-[10px] rounded-[10px] bg-black font-bold text-white hover:bg-orange-600">
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
