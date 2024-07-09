"use client";
import React, { useState } from "react";
import AboutComp from "../components/AboutComp";

function page() {
  const [first, setfirst] = useState(["Anas"]);
  function addMe(item) {
    setfirst([...first, item]);
  }
  return (
    <div>
      <AboutComp addMe={addMe} />
      {first.map((item,index)=><div key={index}>{item}</div>)}
    </div>
  );
}

export default page;
