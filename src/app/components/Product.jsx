import React from "react";
import Card from "./mens/Card";
function Product({ scrollToRe, slide, addToCart }) {
  const data = [
    {
      full: "Jordan-1",
      img: "images/big-shoe2.png",
      price: 200,
      desc: "Jordan-2 is completely flexible and soft to",
      quan: 1,
    },
    {
      full: "Dunki",
      img: "images/big-shoe3.png",
      price: 220,
      desc: "Dunki has gadget to make your speed fast ",
      id:20,
    },
    {
      full: "Nike",
      img: "images/jordna-2.avif",
      price: 210,
      desc: "Nike this product has inspired to dunki ",
      id:21,

    },
    {
      full: "Polo-shirt",
      img: "images/polo-2.webp",
      price: 140,
      desc: "This is new product launch by Polo v-jh.",
      id:22,
    },
    {
      full: "Polo-jh",
      img: "images/polo-1.avif",
      price: 180,
      desc: "This shirt  is insipired by jordan story",
      id:23,

    },
    {
      id:24,
      full: "Polo",
      img: "images/polo.webp",
      price: 100,
      desc: "Simple and flexible and reasonbale price.",
    },
    {
      full: "Texios",
      img: "images/rado-2.avif",
      price: 440,
      id:25,
      desc: "This Watch has some amazing effects.",
    },
    {
      full: "Maxios",
      img: "images/rado-1.webp",
      price: 540,
      desc: "This is latest version of maximos",
      id:26,
    },
    {
      full: "G-shock9xm",
      img: "images/watch-3.avif",
      price: 740,
      desc: "G-shock 9xm has avalible on G-shock store",
      id:27,
      
    },
  ];

  return (
    <>
      <div
        ref={scrollToRe}
        className=" rounded-[10px] shadow-lg w-full grid gird-rows-1 grid-cols-1 gap-10 px-[5%] mb-[20px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3"
      >
        {data.map((datas, index) => (
          <Card item={datas} ind={index} addToCart={addToCart} />
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
