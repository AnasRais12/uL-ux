import React from "react";

function Card({ item, ind,anas}) {
  return (
    <>
      <div key={ind} className="w-full h-[500px] px-20 py-[20px]">
        <div className="w-[340px]   rounded-[10px] border-4 border-black flex flex-col h-[380px] text-black font-bold text-center py-[30px]  items-center  ">
          <h1 className="text-[25px] mb-[10px]">{item?.full}</h1>
          <div className="w-[150px] h-[150px]   rounded-[50%] bg-red-100">
            <img
              className="w-full h-[150px] mb-[10px]  rounded-[50%]"
              src={item?.img}
            />
            <h4 className="text-[25px] mb-[10px]">{item?.price}</h4>
            <h5 className="text-[15px] mb-[10px]">{item?.desc}</h5>
            <h6>{anas}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
