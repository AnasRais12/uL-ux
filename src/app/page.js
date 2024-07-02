"use client";
import React, { useRef, useState } from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
import Female from "./components/Female";
import Kids from "./components/Kids";
import SideBar from "./components/SideBar";

const page = () => {
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
  console.log(cartItem);

  return (
    <div className="bg-white w-full h-full ">
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
        setcartitem={cartItem}
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
