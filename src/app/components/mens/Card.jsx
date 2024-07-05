import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";

function Card({ item, ind, addToCart }) {
  const [click, setclick] = useState(false);
  const [sumbit, setsumbit] = useState(false);

  let change = () => {
    setclick(true);
  };
  const handler = (event) => {
    setsumbit(true);
  };
  return (
    <>
      {/* <div key={ind} className="w-full  duration-200 py-[30px] relative bg-yellow-900 px-[55px] "> */}
      <div className=" w-full hover:scale-110 duration-200 relative rounded-[10px] border-4 border-black flex flex-col  text-black font-bold text-center py-[20px] items-center bg-white shadow-black shadow-lg  ">
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
          <div
            onClick={() => addToCart(item)}
            className="py-2 px-8 mb-[10px] flex justify-center items-center
               hover:bg-green-400 active:bg-green-950 bg-black text-white rounded-[20px] gap-[10px] cursor-pointer "
          >
            Add To Cart{" "}
            <span className="text-[18px]">
              <MdShoppingCartCheckout />
            </span>
          </div>
          {/* {click && (
            <div className="   bg-gray-200 w-[74%] h-[340px]   absolute top-[90px] left-[58px] rounded-[5px] ">
              {setsumbit ? (
                <form
                  onSubmit={handler}
                  className="flex flex-col   w-full px-1 "
                  action=""
                >
                  <h1 className="mb-[8px] font-bold text-[25px]">
                    Pay With Paypal
                  </h1>
                  <label>
                    <h1 className="mb-[6px]">Enter Paypal Email: </h1>
                    <input
                      required
                      className="mb-[8px] py-2 border-2 pl-2 "
                      type="email"
                      placeholder=" Your Email"
                    />
                  </label>
                  <label>
                    <h1 className="mb-[6px]">Enter Code: </h1>

                    <input
                      required
                      className="mb-[8px] py-2 border-2 pl-2 "
                      type="password"
                      placeholder="Your Code"
                    />
                  </label>

                  <button
                    className="mt-[8px] py-1 px-6 bg-black text-white focus:bg-red-950 rounded-[30px]"
                    type="sumbit"
                  >
                    <span>Pay</span> {item?.price}
                  </button>
                </form>
              ) : (
                "Wait"
              )}
            </div>
          )} */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Card;
