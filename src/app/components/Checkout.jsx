import React from "react";
import { ImCross } from "react-icons/im";

const Checkout = ({ check, setcheck, cartitem, subtotal }) => {
  const percent = 0.2;
  const gst = subtotal * percent

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
        } fixed top-0 left-0 bottom-0 right-0 bg-[#0000001a] z-30 flex justify-center items-center`}
      >
        <div className=" bg-white w-[100%] sm:w-[80%] md:w-[80%] lg:w-[60%] border-4 border-black overflow-hidden h-[550px] py-2 rounded-3xl duration-300">
          <div className="px-10 py-5  border-b flex justify-between items-center mb-[15px]">
            <h1 className="text-[22px] font-bold">Checkout</h1>
            <button
              onClick={() => setcheck(false)}
              className="text-[22px] font-bold"
            >
              <ImCross className="text-red-700 hover:scale-125" />
            </button>
          </div>
          <div className="flex w-full py-2 sm:px-4 px-1  sm:justify-center justify-start">
          <div className="sm:w-[50%] w-[60%] sm:border-t-4  border-2 sm:border-l-4 sm:px-6 px-0 border-black overflow-y-auto overflow-x-auto
          h-[450px] ">
            <div className="w-full  border-b-4 border-black  mb-[15px] mt-[15px]  ">
          <h1 className="font-bold text-[11px] sm:text-[22px] text-center py-2 shadow-lg text-green-950 ">Items Selected From Cart</h1>
          </div>
            {cartitem.map((item)=>(
              <>
              <div className=" full w-full  py-5 flex sm:gap-[10px] gap-1 ml-1 ">
                <div className="flex">
               <img className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px] rounded-[50%]" src={item.img}/>
               <p className="text-black  rounded-[50%] text-[10px] sm:text-[18px]   ">{item.quantity}</p>
               </div>
                <h1 className=" name font-bold sm:text-[22px] text-[15px] ">{item.full}</h1>


              </div>
              </>
            ))}
             
          </div>

          <div className=" sm:border-4 border-2 border-black border-b-0 px-2 sm:w-[40%] w-[60%] py-3 flex-col flex text-[18px] justify-center">
            

            <div className="flex space-x-1  justify-center border-b-2 py-2 mb-[10px] sm:text-[20px] text-[15px] items-center font-bold">
              <h1>Subtotal:</h1>
              <h1 className="text-[11px] sm:text-[18px] text-green-500">${subtotal}</h1>
            </div>
            <div className="flex space-x-2 sm:text-[20px] text-[15px] items-center font-bold justify-center mb-[10px]    border-b-2 py-2">
              <h1 className="">GST:</h1>
              <h1 className="text-green-500 text-[11px] sm:text-[18px]">10%</h1>
            </div>
            <div className="flex space-x-2  justify-center  sm:text-[20px] text-[15px] items-center font-bold mb-[10px]    border-b-2 py-2">
              <h1>Deleivery:</h1>
              <h1 className="text-green-500 text-[11px] sm:text-[18px]">${gst}</h1>
            </div>
            <div className="flex sm:text-[20px] text-[15px]  justify-center items-center font-bold mb-[10px]   space-x-2 border-b-2 py-2">
              <h1>Total:</h1>
              <h1 className="text-green-500 text-[11px] sm:text-[18px]">${total}</h1>
            </div>
            <div className="flex  items-center justify-center   space-x-2 border-b-2 py-2">

            <button className="sm:py-2 sm:px-6 py-1 px-3 hover:bg-green-600 text-[12px] sm:text-[18px] font-bold hover:text-black bg-black text-white rounded-[20px]">${total}</button>
            </div>
          </div>
        </div>
      </div>

      </div>

    </>
  );
};

export default Checkout;
