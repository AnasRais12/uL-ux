"use client"
import React from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
const page = () => {
  return (
    <div className="bg-white w-full h-full   ">
      <Navbar/>
      <Product/>
    </div>
  );
};

export default page;
