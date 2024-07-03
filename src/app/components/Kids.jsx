import React from "react";
import Card from "./mens/Card";

const Kids = ({ kidRef, amigos, addToCart }) => {
  const kdata = [
    {
      full: "Kidz Clothes Pack",
      img: "images/clo-1.jpeg",
      price: "$400",
      desc: "50% off This Season",
    },
    {
      full: "5-7 Kidz CLothes",
      img: "images/clo-2.jpeg",
      price: "$320",
      desc: " This Product made in china",
    },
    {
      full: "7-10 Kid-Clothes",
      img: "images/clo-1.jpeg",
      price: "$110",
      desc: "This Product made in USA ",
    },
    {
      full: "Toy-Gun Juishonal",
      img: "images/gun-1.jpeg",
      price: "$150",
      desc: "This is new product launch by K-Toys",
    },
    {
      full: "Gun-Shikoran",
      img: "images/gun-2.jpeg",
      price: "$150",
      desc: "This Gun is inspired by J-45",
    },
    {
      full: "Full PACK Of Toys",
      img: "images/toy-1.jpeg",
      price: "$610",
      desc: "Heaven of Toys",
    },
    {
      full: "Ferrari-Texios-",
      img: "images/toy-2.jpeg",
      price: "$680",
      desc: "This Car Looks Texios",
    },
    {
      full: "Range-Toy-Rover",
      img: "images/toy-3.jpeg",
      price: "$640",
      desc: "This Car look Rover",
    },
    {
      full: "Yahama-91",
      img: "images/toy-4.jpeg",
      price: "$440",
      desc: "This Produucts Looks like Yahama",
    },
  ];
  return (
    <>
      <div className="w-full font-bold mt-[10px] text-center text-black text-[40px]">
        <h1>Kids Product</h1>
      </div>

      <div
        ref={kidRef}
        className=" grid grid-cols-3 grid-rows-3 gap-10 px-[5%] pt-[20px]    "
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
