import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";

function Card({ item, ind, addToCart, settoggle, toggle }) {
  const [click, setclick] = useState(false);
  const [sumbit, setsumbit] = useState(false);

  const handler = (event) => {
    setsumbit(true);
  };
  return (
    <>
      {/* <div key= className="w-full  duration-200 py-[30px] relative bg-yellow-900 px-[55px] "> */}
      <div className=" w-[100%]  px-2 hover:scale-110 duration-200 relative rounded-[10px] border-4 border-black flex flex-col  text-black font-bold text-center py-[20px] items-center bg-white shadow-black shadow-lg sm:w-[100%] sm:px-0 md:px-0 lg:px-0 ">
        <h1 className="text-[25px] mb-[10px]">{item?.full}</h1>
        <div className="w-[150px] h-[180px] rounded-[50%] duration-300 ">
          <img
            className="w-full h-[150px] rounded-[50%] duration-300 "
            src={item?.img}
          />
        </div>
        <div className="mt-[10px]  ">
          <h4 className="text-[25px] ">${item?.price}</h4>
        </div>
        <div className="">
          <h5 className="text-[15px] mb-[10px] overflow-hidden">
            {item?.desc}
          </h5>
        </div>
        <div className="">
          {item.toggle == true ? (
            <button
              onClick={() => addToCart(item)}
              className="py-2 px-8 mb-[10px] flex justify-center items-center hover:bg-gray-400  focus:bg-red-950 active:bg-red-950 bg-black text-white rounded-[20px] gap-[10px] cursor-pointer "
            >
              Add To Cart
              <span className="text-[18px]">
                <MdShoppingCartCheckout />
              </span>
            </button>
          ) : (
            "Added To The Cart"
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Card;
