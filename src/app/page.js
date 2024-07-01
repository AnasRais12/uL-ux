"use client"
import React from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 via-blue-800 to-gray-400 w-full h-full   ">
      <Navbar/>
      <Product/>
    </div>
  );
};

export default page;
