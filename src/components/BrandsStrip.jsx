import React from "react";

const brands = [
  "images/brands/620387cd8c40850004419121 1.svg",
  "images/brands/saie 1.svg",

  "images/brands/151eb5b84120e-removebg-preview 1.svg",

  "images/brands/Subtract.png",

  "images/brands/2560px-Sephora_logo 1.svg",
  "images/brands/Dior_logo.svg",
];

function BrandsStrip() {
  return (
    <div
      className="w-full py-3 hidden md:block  bg-[#3E582B] text-white"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between text-xl md:text-2xl">
        {brands.map((b) => (
          <img src={b} alt="" key={b}></img>
        ))}
      </div>
    </div>
  );
}

export default BrandsStrip;
