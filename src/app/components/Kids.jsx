import React from "react";
import Card from "./mens/Card";

const Kids = ({ kidRef, amigos, addToCart }) => {
  const kdata = [
    {
      id: 1,
      full: "Kidz Clothes Pack",
      img: "images/clo-1.jpeg",
      price: 400,
      desc: "50% off This Season",
      id: 2,
    },
    {
      full: "5-7 Kidz CLothes",
      img: "images/clo-2.jpeg",
      price: 220,
      desc: " This Product made in china",
      id: 3,
    },
    {
      full: "7-10 Kid-Clothes",
      img: "images/clo-1.jpeg",
      price: 320,
      desc: "This Product made in USA ",
      id: 4,
    },
    {
      full: "Toy-Gun Juishonal",
      img: "images/gun-1.jpeg",
      price: 520,
      desc: "This is new product launch by K-Toys",
      id: 5,
    },
    {
      full: "Gun-Shikoran",
      img: "images/gun-2.jpeg",
      price: 250,
      desc: "This Gun is inspired by J-45",
      id: 6,
    },
    {
      full: "Full Pack Of Toys",
      img: "images/toy-1.jpeg",
      price: 700,
      desc: "Heaven of Toys",
      id: 7,
    },
    {
      full: "Ferrari-Texios-",
      img: "images/toy-2.jpeg",
      price: 450,
      desc: "This Car Looks Texios",
      id: 8,
    },
    {
      full: "Range-Toy-Rover",
      img: "images/toy-3.jpeg",
      price: 300,
      desc: "This Car look Rover",
      id: 9,
    },
    {
      full: "Yahama-91",
      img: "images/toy-4.jpeg",
      price: 400,
      desc: "This Produucts Looks like Yahama",
      id: 10,
    },
  ];
  return (
    <>
      <div className="w-full font-bold mt-[10px] text-center text-black text-[30px] sm:text-[40px]">
        <h1>Kids Product</h1>
      </div>

      <div
        ref={kidRef}
        className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-10 px-[5%] pt-[20px]    "
      >
        {kdata.map((kdata, index) => (
          <Card item={kdata} ind={index} addToCart={addToCart} />
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
