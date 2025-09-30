import React from "react";

const products = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  title: "سيروم عناية بالبشرة",
  tag: "العناية",
  price: 140,
  old: 180,
  img: "/images/5761650_1142.png",
}));

function ProductCard({ p }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 flex items-center justify-center">
        <img src={p.img} alt={p.title} className="h-32 object-contain" />
      </div>
      <div className="px-4 pb-4 pt-0 text-center" dir="rtl">
        <div className="text-xs text-gray-500 mb-1">{p.tag}</div>
        <h5 className="font-medium text-gray-800 mb-1">{p.title}</h5>
        <div className="text-sm text-gray-400 line-through">رس {p.old}</div>
        <div className="text-green-900 font-semibold">رس {p.price}</div>
        <button className="mt-3 w-full bg-green-900 text-white py-2 rounded">أضف للسلة</button>
      </div>
    </div>
  );
}

function ProductsGrid() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <p className="text-green-800 mb-1">الأكثر مبيعاً</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">سر الجمال الذي يبحث عنه الجميع</h3>
          <p className="text-gray-500">اكتشفِ الخيارات الرائجة التي تعزز جمالك وتلبي احتياجاتك الشخصية</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid; 