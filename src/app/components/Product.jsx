import React from "react";
import Card from "./mens/Card";
function Product({ scrollToRef }) {
  const data = [
    {
      full: "Jordan-1",
      img: "images/big-shoe2.png",
      price: "$200",
      desc: "Jordan-2 is completely flexible and soft to",
    },
    {
      full: "Dunki",
      img: "images/big-shoe3.png",
      price: "$220",
      desc: "Dunki has gadget to make your speed fast ",
    },
    {
      full: "Nike",
      img: "images/jordna-2.avif",
      price: "$210",
      desc: "Nike this product has inspired to dunki ",
    },
    {
      full: "Polo-shirt",
      img: "images/polo-2.webp",
      price: "$140",
      desc: "This is new product launch by Polo v-jh.",
    },
    {
      full: "Polo-jh",
      img: "images/polo-1.avif",
      price: "$180",
      desc: "This shirt  is insipired by jordan story",
    },
    {
      full: "Polo",
      img: "images/polo.webp",
      price: "$100",
      desc: "Simple and flexible and reasonbale price.",
    },
    {
      full: "Texios",
      img: "images/rado-2.avif",
      price: "$440",
      desc: "This Watch has some amazing effects.",
    },
    {
      full: "Maxios",
      img: "images/rado-1.webp",
      price: "$540",
      desc: "This is latest version of maximos",
    },
    {
      full: "G-shock9xm",
      img: "images/watch-3.avif",
      price: "$740",
      desc: "G-shock 9xm has avalible on G-shock store",
    },
  ];

  return (
    <div
      ref={scrollToRef}
      className=" rounded-[10px] shadow-lg w-full grid gird-rows-3 grid-cols-3  "
    >
      {data.map((datas, index) => (
        <Card item={datas} ind={index} />
      ))}
    </div>
  );
}

export default Product;
