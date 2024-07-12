import React from "react";
import Card from "./mens/Card";

const Female = ({ scrollToRef, femaleslide, addToCart, productsArray }) => {
  return (
    <>
      <div className="w-full font-bold  text-center text-black text-[30px] sm:text-[40px]">
        <h1>Female Product</h1>
      </div>
      <div
        ref={scrollToRef}
        className="w-full  py-6 grid grid-cols-1 grid-rows-1 gap-10 px-[5%]  md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3   "
      >
        {productsArray.map((fdata, index) => (
          <>
            {fdata.category_id == 2 && (
              <Card item={fdata} ind={index} addToCart={addToCart} />
            )}
          </>
        ))}
      </div>
      <div className="w-full  items-center justify-center flex border-b-2 border-black mb-[40px] py-6 ">
        <button
          onClick={femaleslide}
          className="bg-black  text-white font-bold py-2 px-12 rounded-[20px]  active:bg-green-900 hover:bg-orange-800"
        >
          Back To Top
        </button>
      </div>
    </>
  );
};

export default Female;
