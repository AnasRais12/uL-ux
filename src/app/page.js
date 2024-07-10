"use client";
import React, { useRef, useState } from "react";
import Navbar from "./components/navabr/Navbar";
import Product from "./components/Product";
import Female from "./components/Female";
import Kids from "./components/Kids";
import SideBar from "./components/SideBar";
import Add from "./components/add";

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
  const [cartnumber, setcartnumber] = useState(0);

  const addToCart = (item) => {
    if (!cartItem.find((items) => items.id === item.id)) {
      // const addprodcut = cartItem.find((add) => add.id === item);
      setCartItem([...cartItem, { ...item, quantity: 1 }]);

      // } else {
      //   setCartItem(
      //     cartItem.map((cart) =>
      //       cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      //     )
      //   );
      // }
    }
  };
  const productsArray = [
    {
      id: 11,
      category_id: 2,
      full: "Estilient Perfume",
      img: "images/perfume-1.avif",
      price: 150,
      desc: "15 Hours Lasting",
    },
    {
      id: 12,
      category_id: 2,
      full: "Corocial Perfume",
      img: "images/perfume-2.avif",
      price: 250,
      desc: "Crocial Latest Perfume.  ",
    },
    {
      id: 13,
      category_id: 2,
      full: "Luisional Perfume",
      img: "images/perfume-3.avif",
      price: 310,
      desc: "Luisional 3-days Lasting ",
    },
    {
      id: 14,
      category_id: 2,
      full: "Jusionhenal Jacket",
      img: "images/jacket-1.avif",
      price: 340,
      desc: "Jusiohnemal Latets Demand",
    },
    {
      id: 15,
      category_id: 2,
      full: "Kusional Watch",
      img: "images/FEMALE-1.webp",
      price: 280,
      desc: "Watch has diff abitlity to wear",
    },
    {
      id: 16,
      category_id: 2,
      full: "Fusional Sandle",
      img: "images/womes-2.avif",
      price: 500,
      desc: "Simple and flexible Sandle.",
    },
    {
      id: 17,
      category_id: 2,
      full: "Ndure Glasses ",
      img: "images/glass.avif",
      price: 440,
      desc: "This Glasses save sunlight.",
    },
    {
      id: 18,
      category_id: 2,
      full: "Maxios",
      img: "images/female-2.avif",
      price: 540,
      desc: "This is latest version of maximos",
    },
    {
      id: 19,
      category_id: 2,
      full: "Ouisiona Watch",
      img: "images/female-3.avif",
      price: 740,
      desc: "Ouisionina has avalible on World's store",
    },

    {
      id: 1,
      category_id: 3,
      full: "Kidz Clothes Pack",
      img: "images/clo-1.jpeg",
      price: 400,
      desc: "50% off This Season",
      id: 2,
      category_id: 3,
    },
    {
      full: "5-7 Kidz CLothes",
      img: "images/clo-2.jpeg",
      price: 220,
      desc: " This Product made in china",
      id: 3,
      category_id: 3,
    },
    {
      full: "7-10 Kid-Clothes",
      img: "images/clo-1.jpeg",
      price: 320,
      desc: "This Product made in USA ",
      id: 4,
      category_id: 3,
    },
    {
      full: "Toy-Gun Juishonal",
      img: "images/gun-1.jpeg",
      price: 520,
      desc: "This is new product launch by K-Toys",
      id: 5,
      category_id: 3,
    },
    {
      full: "Gun-Shikoran",
      img: "images/gun-2.jpeg",
      price: 250,
      desc: "This Gun is inspired by J-45",
      id: 6,
      category_id: 3,
    },
    {
      full: "Full Pack Of Toys",
      img: "images/toy-1.jpeg",
      price: 700,
      desc: "Heaven of Toys",
      id: 7,
      category_id: 3,
    },
    {
      full: "Ferrari-Texios-",
      img: "images/toy-2.jpeg",
      price: 450,
      desc: "This Car Looks Texios",
      id: 8,
      category_id: 3,
    },
    {
      full: "Range-Toy-Rover",
      img: "images/toy-3.jpeg",
      price: 300,
      desc: "This Car look Rover",
      id: 9,
      category_id: 3,
    },
    {
      full: "Yahama-91",
      img: "images/toy-4.jpeg",
      price: 400,
      desc: "This Produucts Looks like Yahama",
      id: 10,
      category_id: 3,
    },
    {
      full: "Jordan-1",
      img: "images/big-shoe2.png",
      price: 200,
      desc: "Jordan-2 is completely flexible and soft to",
      id: 28,
      category_id: 1,
    },
    {
      full: "Dunki",
      img: "images/big-shoe3.png",
      price: 220,
      desc: "Dunki has gadget to make your speed fast ",
      id: 20,
      category_id: 1,
    },
    {
      full: "Nike",
      img: "images/jordna-2.avif",
      price: 210,
      desc: "Nike this product has inspired to dunki ",
      id: 21,
      category_id: 1,
    },
    {
      full: "Polo-shirt",
      img: "images/polo-2.webp",
      price: 140,
      desc: "This is new product launch by Polo v-jh.",
      id: 22,
      category_id: 1,
    },
    {
      full: "Polo-jh",
      img: "images/polo-1.avif",
      price: 180,
      desc: "This shirt  is insipired by jordan story",
      id: 23,
      category_id: 1,
    },
    {
      id: 24,
      category_id: 1,
      full: "Polo",
      img: "images/polo.webp",
      price: 100,
      desc: "Simple and flexible and reasonbale price.",
    },
    {
      full: "Texios",
      img: "images/rado-2.avif",
      price: 440,
      id: 25,
      category_id: 1,
      desc: "This Watch has some amazing effects.",
    },
    {
      full: "Maxios",
      img: "images/rado-1.webp",
      price: 540,
      desc: "This is latest version of maximos",
      id: 26,
      category_id: 1,
    },
    {
      full: "G-shock9xm",
      img: "images/watch-3.avif",
      price: 740,
      desc: "G-shock 9xm has avalible on G-shock store",
      id: 27,
      category_id: 1,
    },
  ];
  const upgrade = (product) => {
    setCartItem(
      cartItem.map((cart) =>
        cart.id === product.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };
  const removeFromCart = (product) => {
    setCartItem(cartItem.filter((item) => item.id !== product.id));
  };
  const minus= (items)=>{
    setCartItem(
      cartItem.map((cart) =>
        cart.id === items.id ? { ...cart, quantity: cart.quantity > 1? cart.quantity-1 : 1,  } : cart
      )
    );

  }

  return (
    <>
      <div className=" w-full h-full bg-gray-200 ">
        <Navbar
          cartItem={cartItem}
          scrollToSection={scrollToSection}
          scroll={scrollSection}
          kids={kidscroll}
          topslide={topslide}
          setIsSideBar={setIsSideBar}
        />

        <SideBar
          cartnumber={cartnumber}
          setcartnumber={setcartnumber}
          isSideBar={isSideBar}
          setIsSideBar={setIsSideBar}
          cartitem={cartItem}
          removeFromCart={removeFromCart}
          upgrade={upgrade}
          minus={minus}
        />
        <Product
          scrollToRe={scroll}
          slide={slide}
          addToCart={addToCart}
          productsArray={productsArray}
        />
        <Female
          femaleslide={femaleslide}
          scrollToRef={scrollToRef}
          addToCart={addToCart}
          productsArray={productsArray}
        />
        <Kids
          kidRef={kid}
          amigos={amigos}
          addToCart={addToCart}
          productsArray={productsArray}
        />
        <Add />
      </div>
    </>
  );
};
export default page;
