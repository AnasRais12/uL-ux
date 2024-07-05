"use client";
import React, { useRef, useState } from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
import Female from "./components/Female";
import Kids from "./components/Kids";
import SideBar from "./components/SideBar";

const page = () => {
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
      full: "Full Pack Of Toys",
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
  const topslide = useRef(null);
  const slide = () => {
    topslide.current.scrollIntoView({ behavior: "smooth" });
  };
  const amigos = () => {
    topslide.current.scrollIntoView({ behavior: "smooth" });
  };
  const femaleslide = () => {
    topslide.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToRef = useRef(null);
  const scrollToSection = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroll = useRef(null);
  const scrollSection = () => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  const kid = useRef(null);
  const kidscroll = () => {
    kid.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isSideBar, setIsSideBar] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  function addToCart(item) {
    setCartItem([...cartItem, item]);
  }

  return (
    <div className=" w-full h-full bg-gray-200 ">
      <Navbar
        scrollToSection={scrollToSection}
        scroll={scrollSection}
        kids={kidscroll}
        topslide={topslide}
        setIsSideBar={setIsSideBar}
        />

      <SideBar
        isSideBar={isSideBar}
        setIsSideBar={setIsSideBar}
        cartitem={cartItem}
        data={kdata}
       />
      <Product scrollToRe={scroll} slide={slide} addToCart={addToCart} />
      <Female
        femaleslide={femaleslide}
        scrollToRef={scrollToRef}
        addToCart={addToCart}
      />
      <Kids kidRef={kid} amigos={amigos} addToCart={addToCart} />
    </div>
  );
};

export default page;
