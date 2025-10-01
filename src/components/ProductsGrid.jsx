import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const products = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  title: "سيروم عناية بالبشرة",
  tag: "العناية",
  price: 140,
  old: 180,
  img: "/images/Rectangle_8_260x 1 (1).png",
}));

function ProductCard({ p }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      {/* Discount badge */}
      <div className="absolute top-3 right-3 z-10 font-[Scheherazade_New] bg-[#BD1C1C] text-white text-xs px-2 py-1 ">
        10%-
      </div>
      <div className="p-6 flex items-center justify-center">
        <img src={p.img} alt={p.title} className="h-32 object-contain" />
      </div>
      <div className="px-4 pb-4 pt-0 text-center" dir="rtl">
        {/* Rating stars */}
        <div className="flex justify-center mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" />
            </svg>
          ))}
        </div>
        <div className="text-[14px] text-[#597445] font-[Scheherazade_New]  mb-1">
          {p.tag}
        </div>
        <h5 className="font-medium text-[#1E2519] mb-1 font-[Scheherazade_New]">
          {p.title}
        </h5>
        <div className="flex items-center justify-center gap-1">
          <div className="text-[#BD1C1C] text-[14px]">ر.س {p.price}</div>
          <div className="text-[14px] text-[#1E251996] line-through">
            ر.س {p.old}
          </div>
        </div>

        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-[#597445] text-white py-2 ">
          <span>
            <ShoppingCartIcon />
          </span>
          أضف للسلة
        </button>
      </div>
    </div>
  );
}

function ProductsGrid() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <p className="text-[#597445] font-[Scheherazade_New] text-[14px] mb-1">
            الأكثر مبيعــــــــــــــــــا
          </p>
          <h3 className="text-[28px] border-b border-[#597445] w-fit mx-auto py-2 font-[Scheherazade_New] md:text-3xl font-bold mb-2">
            سر الجمال الذي يبحث عنه الجميع
          </h3>
          <p className="text-[16px] font-[Scheherazade_New]">
            استكشف الخيارات الرائجة التي تعزز جمالك وتلبي احتياجاتك الشخصية
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;
