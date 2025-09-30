import React from "react";

const brands = ["Dior", "SEPHORA", "CLINIQUE", "MAC", "FENTY", "saie"];

function BrandsStrip() {
  return (
    <div className="w-full bg-green-900 text-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between text-xl md:text-2xl">
        {brands.map((b) => (
          <span key={b} className="opacity-90">{b}</span>
        ))}
      </div>
    </div>
  );
}

export default BrandsStrip; 