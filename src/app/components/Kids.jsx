import React from "react";
import Card from "./mens/Card";

const Kids = ({ kidRef, amigos, addToCart, productsArray }) => {
  return (
    <>
      <div className="w-full font-bold mt-[10px] text-center text-black text-[30px] sm:text-[40px]">
        <h1>Kids Product</h1>
      </div>

      <div
        ref={kidRef}
        className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-10 px-[5%] pt-[20px]    "
      >
        {productsArray.map((kdata, index) => (
          <>
            {kdata.category_id == 3 && (
              <Card item={kdata} ind={index} addToCart={addToCart} />
            )}
          </>
        ))}
      </div>
      <div className="w-full items-center justify-center flex border-b-2 border-black  py-6 ">
        <button
          onClick={amigos}
          className="bg-black  text-white font-bold py-2 px-12 rounded-[20px]  active:bg-green-900 hover:bg-orange-800"
        >
          Back To Top
        </button>
      </div>
    </>
  );
};

export default Kids;
