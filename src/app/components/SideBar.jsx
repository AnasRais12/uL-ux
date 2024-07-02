import React from "react";

function SideBar({ isSideBar, setIsSideBar,setcartitem}) {
  return (
    <div
      className={` ${
        isSideBar == true
          ? "w-[30%] overflow-y-auto px-5"
          : "w-0 overflow-hidden"
      }  bg-white fixed duration-300 top-0 right-0 h-screen `}
    >
      <div className="flex w-full items-center justify-end">
        <button onClick={() => setIsSideBar(false)}>X</button>
      </div>
      {setcartitem.map((item,index)=>(

        
        <div key={index} className="">
            <div className=" bg-blue-600 w-full h-[80px] text-[20px] py-1 font-bold">
            <div className="w-full  border-b-2 border-black flex items-center gap-[11rem] px-1">
            <h1>{item.full}</h1>
            <h1>{item.price}</h1>
            </div>
            </div>

        </div>
      ))}
    </div>
  );
}

export default SideBar;
