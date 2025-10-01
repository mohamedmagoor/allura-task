import React from "react";

const categories = [
  {
    title: "العنايـــة بالبشــــــرة",
    img: "/images/Group 1618873507 (1).png",
  },
  {
    title: "العنايـــة بالجســــم",
    img: "/images/404540786_3d80a414-dc95-4f1d-968c-c6a4b90dbbbc 1 (2).png",
  },
  { title: "اليدين والقدمين", img: "/images/Group 1618873519 (1).png" },
  { title: "العنايـــة بالشعر", img: "/images/6445521 1.png" },
  { title: "العطـــــــــور", img: "/images/Group 1618873512.png" },
  {
    title: "المكيــــــاج",
    img: "/images/408729230_863a89f2-768c-4d86-b4fc-95889bad6073 1.png",
  },
];

function Categories() {
  return (
    <section className="w-full bg-white" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-sm text-green-900 font-[Scheherazade_New]">
            التصنيفات
          </p>
          <h3 className="text-2xl md:text-3xl border-b w-fit mx-auto py-2 font-bold text-gray-900 mb-2 font-[Scheherazade_New]">
            كل ما تحتاجه في مكان واحد
          </h3>
          <p className="text-gray-500 font-[Scheherazade_New]">
            من العناية بالشعر إلى مستحضرات البشرة والعطور
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  transition duration-300 lg:grid-cols-6 gap-6">
          {categories.map((c) => (
            <div
              id="categoryCard"
              key={c.title}
              className="group relative hover:scale-[90%] bg-transparent     hover:scale[90%] duration-700 transition overflow-hidden text-center p-4"
            >
              <div className="overlay bg-[#f6f6f6] absolute z-[0] top-0 left-0 right-0 bottom-0 top-[60px] group-hover:bg-[#e7f0dc]  z-[-1]   transition-opacity duration-700"></div>
              <img
                src={c.img}
                alt={c.title}
                className="mx-auto h-28 object-contain transform scale-90 group-hover:scale-[1.2]   duration-700"
              />
              <h4 className="mt-4 z-[1] relative text-green-900 font-semibold font-[Scheherazade_New]">
                {c.title}
              </h4>
              <p className="text-[12px] relative z-[1] text-gray-500 font-[Scheherazade_New]">
                55 قطعة
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
