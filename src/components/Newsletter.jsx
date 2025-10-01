import React from "react";

function Newsletter() {
  return (
    <>
      <style>
        {`
        .animatedImgWrapper {
           width: 400px;
          
          overflow: hidden;
          position: relative;
          display: flex;
           align-items: center;
           justify-content: center;
        }
        .animatedImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          animation: kenburns 12s linear infinite alternate;
        }
        @keyframes kenburns {
          0% {
            transform: scale(1.9) translate(10px, 10px);
          }
          100% {
            transform: scale(1.2) translate(-10px, -10px);
          }
        }
      `}
      </style>
      <section
        className="w-full grid relative grid-cols-2 md:grid-cols-4 gap-0 bg-white my-[80px]  "
        dir="rtl"
      >
        <div className="bluredContent flex-col text-center text-[#FFFFFF] text-[24px] font-[Scheherazade_New] absolute absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white/30 backdrop-blur-[4px]  w-[254px] h-[114px] flex items-center justify-center">
          <span className="block">@Allura.Cosmetics</span>
          <span className="text-[20px] block center">
            {" "}
            تابعنا على انستجرام{" "}
          </span>
        </div>
        <div>
          <img src="/images/Frame 1618872591.png" alt="" className="w-[100%]" />
        </div>

        <div className="animatedImgWrapper ">
          <img
            className="animatedImg w-[100%]"
            src="/images/Frame 1618872592.png"
            alt=""
          />
        </div>

        <div>
          <img src="/images/Frame 1618872593.png" alt="" className="w-[100%]" />
        </div>
        <div>
          <img src="/images/Frame 1618872594.png" alt="" className="w-[100%]" />
        </div>
      </section>
    </>
  );
}

export default Newsletter;
