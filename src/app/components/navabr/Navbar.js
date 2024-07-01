import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
    <div className="w-full h-[10vh] bg-black py-2 flex items-center justify-around ">
      <div className="w-[60px] h-[50px] bg-red-500 rounded-[50%]  ">
        <img className="w-full h-[50px] rounded-[50%] border-2 border-white" src="images/online.avif"/>
      </div>
      <div className="w-[60%]  h-[40px] ">
        <input className="w-full h-[40px] rounded-[15px] border-2 pl-5 " type="text" placeholder="Search"/>
      </div>
      <div className="w-[15%]  py-1 flex items-center gap-[25px] text-[22px] text-white  ">
        
        <Link className='border-2 border-black hover:border-b-orange-100'  href=''>Help</Link>
        <Link className='border-2 border-black hover:border-b-orange-100'  href=''>Sign In</Link>
        <Link className='border-2 border-black hover:border-b-orange-100'  href=''><MdShoppingCartCheckout/></Link>



      </div>
    </div>
      <div className="w-full h-full  text-black font-bold text-center pt-[30px] text-[40px] ">
        <h1 className=" heading mb-[3rem] ">Men's Product</h1>
      </div>
    </>
  );
};

export default Navbar;
