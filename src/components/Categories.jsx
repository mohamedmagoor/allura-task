import React from "react";

const categories = [
  { title: "العناية بالشعر", img: "/images/Frame 1618872594.png" },
  { title: "العناية بالجسم", img: "/images/Frame 1618872593.png" },
  { title: "اليدين والقدمين", img: "/images/Frame 1618872592.png" },
  { title: "العناية بالبشرة", img: "/images/Frame 1618872591.png" },
  { title: "العطور", img: "/images/6445521 1.png" },
  { title: "المكياج", img: "/images/408729230_863a89f2-768c-4d86-b4fc-95889bad6073 1.png" },
];

function Categories() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-sm text-green-900">التصنيفات</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">كل ما تحتاجه في مكان واحد</h3>
          <p className="text-gray-500">من العناية بالشعر إلى مستحضرات البشرة والعطور</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden text-center p-4">
              <img src={c.img} alt={c.title} className="mx-auto h-28 object-contain" />
              <h4 className="mt-4 text-green-900 font-semibold">{c.title}</h4>
              <p className="text-[12px] text-gray-500">55 قطعة</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories; 