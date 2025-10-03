import React, { useState } from "react";

const tabs = [
  { label: "ماسكــــــــــــــــارا", img: "/images/Group 1618873608.png" },
  { label: "كريم أســـــــــــاس", img: "/images/Property 1=Variant2.png" },
  { label: "حمرة شفــــــــــاه", img: "/images/rouge.png" },
  { label: "حمرة خدود", img: "/images/Property 1=Default.png" },
  { label: "أيشــــــــــــــــادو", img: "/images/shadow.png" },
];

function FeatureSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  const changeTab = (idx) => {
    if (idx === activeTab) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(idx);
      setFade(true);
    }, 200);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    changeTab((activeTab - 1 + tabs.length) % tabs.length);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    changeTab((activeTab + 1) % tabs.length);
  };

  return (
    <section
      className="w-full overflow-hidden relative min-h-[60vh] bg-[#E7F0DC] "
      dir="rtl"
    >
      <img
        className="absolute top-0 left-0 hidden lg:block"
        src="/images/tree.png"
        alt=""
      />
      <img
        className="absolute bottom-0 left-0  lg:hidden"
        src="/images/tree.png"
        alt=""
      />
      <img
        className="absolute top-[-250px] right-[0px] rotate-[180deg] "
        src="/images/tree.png"
        alt=""
      />
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-4 sm:py-10">
        <p className="text-center text-[18px] sm:text-[20px] font-[Scheherazade_New] text-[#202020]">
          افضـــــل الاقســـــــام
        </p>
        <h3 className="text-center font-[Scheherazade_New] border-b border-[#597445] w-fit mx-auto py-2 text-[#202020] text-[22px] sm:text-[28px] font-bold mb-6">
          استكشف مجموعة متنوعة من الأقسام المتاحة
        </h3>
        <div className="products flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <div className="products-tabs w-full lg:w-auto">
            <ul className="flex flex-col lg:flex-col gap-2 lg:mb-[150px] mb-0  justify-center">
              {tabs.map((tab, idx) => (
                <li
                  key={tab.label}
                  className={`text-[24px] p-3 md:p-0 sm:text-[24px] lg:text-[32px]  sm:mt-5 font-bold font-[Scheherazade_New] cursor-pointer transition-colors duration-200 ${
                    activeTab === idx
                      ? "text-[#202020]"
                      : "text-[#202020] opacity-60"
                  }`}
                  onClick={() => changeTab(idx)}
                >
                  <span
                    className={`pb-1 ${
                      activeTab === idx
                        ? "border-b-4 border-[#202020]"
                        : "border-b-0"
                    }`}
                  >
                    {tab.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-img flex items-center relative w-full lg:w-[60%] justify-center mb-6 lg:mb-0">
            <div className="relative w-[90vw] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-square flex items-center justify-center">
              <img
                className={`mx-auto w-full h-full object-contain transition-all duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                src={tabs[activeTab].img}
                alt={tabs[activeTab].label}
                style={{ transition: "opacity 0.2s" }}
              />

              <div
                onClick={handlePrev}
                className="absolute right-0 top-0 h-full"
                style={{
                  width: "20%",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                aria-label="السابق"
              />

              <div
                onClick={handleNext}
                className="absolute left-0 top-0 h-full"
                style={{
                  width: "20%",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                aria-label="التالي"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
