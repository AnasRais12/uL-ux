import React from "react";
import Card from "./mens/Card";
const Fdata = [
  {
    full: "Estilient Perfume",
    img: "images/perfume-1.avif",
    price: 150,
    desc: "15 Hours Lasting",
  },
  {
    full: "Corocial Perfume",
    img: "images/perfume-2.avif",
    price: 250,
    desc: "Crocial Latest Perfume.  ",
  },
  {
    full: "Luisional Perfume",
    img: "images/perfume-3.avif",
    price: 310,
    desc: "Luisional 3-days Lasting ",
  },
  {
    full: "Jusionhenal Jacket",
    img: "images/jacket-1.avif",
    price: 340,
    desc: "Jusiohnemal Latets Demand",
  },
  {
    full: "Kusional Watch",
    img: "images/FEMALE-1.webp",
    price: 280,
    desc: "Watch has diff abitlity to wear",
  },
  {
    full: "Fusional Sandle",
    img: "images/womes-2.avif",
    price: 500,
    desc: "Simple and flexible Sandle.",
  },
  {
    full: "Ndure Glasses ",
    img: "images/glass.avif",
    price: 440,
    desc: "This Glasses save sunlight.",
  },
  {
    full: "Maxios",
    img: "images/female-2.avif",
    price: 540,
    desc: "This is latest version of maximos",
  },
  {
    full: "Ouisiona Watch",
    img: "images/female-3.avif",
    price: 740,
    desc: "Ouisionina has avalible on World's store",
  },
];

const Female = ({ scrollToRef, femaleslide, addToCart }) => {
  return (
    <>
      <div className="w-full font-bold  text-center text-black text-[30px] sm:text-[40px]">
        <h1>Female Product</h1>
      </div>
      <div
        ref={scrollToRef}
        className="w-full  py-6 grid grid-cols-1 grid-rows-1 gap-10 px-[5%] sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3   "
      >
        {Fdata.map((fdata, index) => (
          <Card item={fdata} ind={index} addToCart={addToCart} />
        ))}
      </div>
      <div className="w-full items-center justify-center flex border-b-2 border-black mb-[40px] py-6 ">
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
