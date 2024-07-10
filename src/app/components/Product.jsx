import React from "react";
import Card from "./mens/Card";
function Product({ scrollToRe, slide, addToCart, productsArray }) {
  return (
    <>
      <div
        ref={scrollToRe}
        className=" rounded-[10px] shadow-lg w-full grid gird-rows-1 grid-cols-1 gap-10 px-[5%] mb-[20px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3"
      >
        {productsArray.map((datas, index) => (
          <>
            {datas.category_id == 1 && (
              <Card item={datas} ind={index} addToCart={addToCart} />
            )}
          </>
        ))}
      </div>
      <div className="w-full items-center justify-center flex border-b-2 border-black mb-[40px] py-6 ">
        <button
          onClick={slide}
          className="bg-black  text-white font-bold py-2 px-12 rounded-[20px]  active:bg-green-900 hover:bg-orange-800"
        >
          Back To Top
        </button>
      </div>
    </>
  );
}

export default Product;
