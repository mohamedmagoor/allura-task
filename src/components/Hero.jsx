import { ArrowLeft } from "lucide-react";
import React from "react";

function Hero() {
  return (
    // <section className="w-full bg-white" dir="rtl">
    //   <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch py-6">
    //     <div className="hidden lg:block rounded-lg overflow-hidden">
    //       <img src="/images/Group 2863.png" alt="left" className="h-full w-full object-cover" />
    //     </div>
    //     <div className="bg-[#e7f0dc] rounded-lg p-6 flex flex-col items-center justify-center text-center">
    //       <img src="/images/Asset 1@4x 3.png" alt="logo" className="h-10 w-auto mb-6" />
    //       <h2 className="text-3xl md:text-4xl text-green-900 font-bold mb-3">العناية التي</h2>
    //       <h3 className="text-3xl md:text-4xl text-green-900 font-bold mb-4">تستحقها بشرتك</h3>
    //       <p className="text-gray-700 mb-6">منتجات طبيعية %100 لتغذية بشرتك</p>
    //       <button className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-green-900 text-white">اكتشف المزيد ↤</button>
    //       <div className="mt-6 flex items-center gap-2">
    //         <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
    //         <span className="h-1.5 w-1.5 rounded-full bg-green-900"></span>
    //         <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
    //       </div>
    //     </div>
    //     <div className="rounded-lg overflow-hidden">
    //       <img src="/images/photo_2021-11-21_10-54-47 1.png" alt="right" className="h-full w-full object-cover" />
    //     </div>
    //   </div>
    // </section>
    <section className="flex p-relative" dir="rtl">
      <img
        className="absolute left-1/2 top-1/4 w-[110px] mt-3 -translate-x-1/2"
        src="/images/Group 5.svg"
        alt=""
      />

      <div>
        <img src="/images/Frame 5.png" alt="" />
      </div>
      <div>
        <div className="relatvie">
          <img className="absolute " src="/images/water.png" alt="" />
          <div className="absolute mt-[80px] text-center top-1/2 left-1/2 -translate-x-1/2 font-[Scheherazade_New] bold -translate-y-1/2 text-[40px]">
            <p className="text-[#3e582b] font-[700] ">
              العنايـــــــة التي <br />
              تستحقهـــــا بشرتــــــــــــــــــــــــك
            </p>
            <p className="text-[24px]">منتجات طبيعية 100% لتغذية بشرتك</p>
          </div>

          <div className="btn-animated transition-all duration-300 ease-in-out absolute z-10 mt-[225px] top-1/2 left-1/2 -translate-x-1/2">
            <button
              id="animatedBtn"
              className="flex cursor-pointer relative hover:scale-[80%] transition-all duration-300 ease-in-out  text-center  font-[Scheherazade_New]  -translate-y-1/2 text-[24px] items-center px-6 py-3 bg-primary text-white   bg-[#2E431B] transition-colors"
            >
              اكتشــــف المزيد
              <span className="text-xl mr-2">
                <ArrowLeft size={24} color="currentColor" />
              </span>
              <div
                id="borderBn"
                className="borderBn  z-[-1]   absolute w-[100%] h-[100%] border-1 border-[#3e582b] hover:border-0 hover:scale-[90%]  transition-all duration-300 ease-in-out  top-1 left-1"
              ></div>
            </button>
          </div>
        </div>

        <img src="/images/Rectangle 57.png" alt="" />
      </div>
      <div>
        <img src="/images/Frame 3.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;
