import React from "react";

function AboutComp({ addMe }) {
  return (
    <div className="flex flex-col space-y-4">
      <button onClick={() => addMe("Usama")}>Click me</button>
      <button onClick={() => addMe("Zaid")}>Click me</button>
    </div>
  );
}

export default AboutComp;
