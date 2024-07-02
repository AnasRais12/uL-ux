import React from 'react'
import Card from './mens/Card'
const Fdata = [
    {
      full: "Estilient Perfume",
      img: "images/perfume-1.avif",
      price: "$150",
      desc: "15 Hours Lasting",
    },
    {
      full: "Corocial Perfume",
      img: "images/perfume-2.avif",
      price: "$260",
      desc: "Crocial Latest Perfume.  ",
    },
    {
      full: "Luisional Perfume",
      img: "images/perfume-3.avif",
      price: "$410",
      desc: "Luisional 3-days Lasting ",
    },
    {
      full: "Jusionhenal Jacket",
      img: "images/jacket-1.avif",
      price: "$340",
      desc: "Jusiohnemal Latets Demand",
    },
    {
      full: "Kusional Watch",
      img: "images/FEMALE-1.webp",
      price: "$280",
      desc: "Watch has diff abitlity to wear",
    },
    {
      full: "Fusional Sandle",
      img: "images/womes-2.avif",
      price: "$500",
      desc: "Simple and flexible Sandle.",
    },
    {
      full: "Ndure Glasses ",
      img: "images/glass.avif",
      price: "$440",
      desc: "This Glasses save sunlight.",
    },
    {
      full: "Maxios",
      img: "images/female-2.avif",
      price: "$540",
      desc: "This is latest version of maximos",
    },
    {
      full: "Ouisiona Watch",
      img: "images/female-3.avif",
      price: "$740",
      desc: "Ouisionina has avalible on World's store",
    },
  ];

const Female = ({scrollToSection}) => {
  return (
    <>
    <div className='w-full font-bold  text-center text-black text-[40px]'>
        <h1>Female Product</h1>
    </div>
    <div className='w-full  py-6 bg-blue-500 grid grid-cols-3 grid-rows-3 '>
        {Fdata.map((fdata,index)=>(
    <Card item={fdata } ind={index} />

        ))}
    </div>
    </>
  )
}

export default Female