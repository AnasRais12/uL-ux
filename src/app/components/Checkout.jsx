import React from "react";
import { ImCross } from "react-icons/im";

const Checkout = ({ check, setcheck, cartitem, subtotal }) => {
  const total = subtotal + (subtotal / 100) * 10 + 100;
  return (
    <>
      {/* <div
        className={` ${
          check == true
            ? " game w-full  overflow-y-auto sm:px-2 px-1  sm:w-[55%] md:w-[45%] lg:w-[30%]"
            : "w-0 overflow-hidden"
        } bg-red-300 shadow-lg fixed duration-300 top-0 right-0 py-[20px] h-screen  rounded-[10px] z-50`}
      >
        <div className="w-full py-2 px-4 text-[22px] flex justify-end">
          <ImCross onClick={() => setcheck(false)} />
        </div>
      </div> */}
      <div
        className={` ${
          check == true ? "" : "hidden"
        } fixed top-0 left-0 bottom-0 right-0 bg-[#00000087] z-30 flex justify-center items-center`}
      >
        <div className=" bg-white w-[60%] rounded-3xl">
          <div className="px-10 py-5 border-b flex justify-between items-center">
            <h1 className="text-[22px] font-bold">Checkout</h1>
            <button
              onClick={() => setcheck(false)}
              className="text-[22px] font-bold"
            >
              <ImCross />
            </button>
          </div>
          <div className="h-[600px] overflow-auto px-12 py-3 text-[18px]">
            

            <div className="flex space-x-5 w-[20%] border-b-2 py-2">
              <h1>Subtotal:</h1>
              <h1>Rs {subtotal}</h1>
            </div>
            <div className="flex space-x-5 w-[20%]   border-b-2 py-2">
              <h1>GST:</h1>
              <h1>10%</h1>
            </div>
            <div className="flex space-x-5 w-[40%]    border-b-2 py-2">
              <h1>Deleivery Charges:</h1>
              <h1>Rs 100</h1>
            </div>
            <div className="flex w-[20%]  space-x-5 border-b-2 py-2">
              <h1>Total:</h1>
              <h1>Rs {total}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
