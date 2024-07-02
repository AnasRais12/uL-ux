import React, { useState } from "react";

function Card({ item, ind,}) {
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
      <div key={ind} className="w-full   py-[30px] relative bg-yellow-900 px-[55px] ">
        <div className=" w-[340px]   rounded-[10px] border-4 border-black flex flex-col  text-black font-bold text-center py-[20px] bg-yellow-600  items-center  ">
          <h1 className="text-[25px] mb-[10px]">{item?.full}</h1>
          <div className="w-[150px] h-[180px]    rounded-[50%]   duration-300 hover:animate-bounce    ">
            <img
              className="w-full h-[150px]   rounded-[50%] duration-300  hover:scale-125  "
              src={item?.img}
            />
          </div>

          <div className="mt-[10px]  ">
            <h4 className="text-[25px] ">{item?.price}</h4>
          </div>
          <div className="">
            <h5 className="text-[15px] mb-[10px] overflow-hidden">
              {item?.desc}
            </h5>
          </div>
          <div className="">
            <button
              onClick={change}
              className="py-2 px-8 mb-[10px] hover:bg-green-400 focus:bg-green-950 bg-black text-white rounded-[20px] "
            >
              Buy
            </button>
            {click && (
              
              <div className="   bg-gray-200 w-[74%] h-[340px]   absolute top-[90px] left-[58px] rounded-[5px] ">
                {setsumbit ?(
                <form onSubmit={handler} className="flex flex-col   w-full px-1 " action="">
                  

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
                )  : "Wait"}

                {/* This is the content that appears when the button is clicked./ */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
