"use client";
import React, { useRef } from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
import Female from "./components/Female";
const page = () => {
  const scrollToRef = useRef(null);

  const scrollToSection = () => {
    console.log("hit");
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white w-full h-full   ">
      <Navbar scrollToSection={scrollToSection} />
      <Product scrollToRef={scrollToRef} />
      <Female scrollToSection={scrollToSection}/>
    </div>
  );
};

export default page;
