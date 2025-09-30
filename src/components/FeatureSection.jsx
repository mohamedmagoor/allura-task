import React from "react";

function FeatureSection() {
  return (
    <section className="w-full bg-[#e7f0dc]" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-center lg:text-right text-gray-800 mb-2">افضل الأقسام</p>
          <h3 className="text-center lg:text-right text-2xl md:text-3xl font-bold mb-6">استكشف مجموعة متنوعة من الأقسام المتاحة</h3>
          <div className="hidden lg:block border-b border-green-900 w-24 mb-8"></div>
          <div className="relative bg-white/0 rounded-xl p-4 text-center lg:text-right">
            <div className="relative mx-auto w-[420px] max-w-full">
              <img src="/images/Group 5.png" alt="mascara" className="w-full h-auto" />
            </div>
            <div className="mt-4 text-gray-700">
              <div className="text-sm">المكياج</div>
              <div className="font-semibold">ماسكارا الورا مضادة للمياه</div>
              <div className="text-sm text-gray-500"><span className="line-through">رس 180</span> <span className="text-red-600">رس 140</span></div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col items-start lg:items-start gap-8">
          <h4 className="text-3xl font-bold">ماسكارا</h4>
          <ul className="space-y-6 text-2xl text-gray-700">
            <li className="border-b pb-2 w-fit">كريم أساس</li>
            <li className="border-b pb-2 w-fit">حمرة شفاه</li>
            <li className="border-b pb-2 w-fit">حمرة خدود</li>
            <li className="border-b pb-2 w-fit">أيشادو</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection; 