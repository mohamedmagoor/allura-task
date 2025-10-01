import { ArrowLeft } from "lucide-react";

function AnimatedBtn() {
  return (
    <>
      <div className="flex justify-center relative w-fit mx-auto ">
        <button className="bg-[#597445] relative group hover:[box-shadow:inset_0_8px_16px_rgba(0,0,0,0.3)]   transition-all duration-700  w-fit font-[Scheherazade_New] mt-[40px] felx cursor-pointer items-center justify-center text-center  text-white  py-4 px-[50px]  inline-flex items-center  ">
          <div className="border-aminated absolute top-1 left-1 group-hover:top-0 group-hover:left-0 transition-all duration-700 ease-in-out    border-1 border-[#597445] w-full h-full"></div>
          <span className="group-hover:opacity-80 text-[24px] transition-all hover:shadow-inner-md  duration-700  group-hover:scale-95 ">
            اكتشــــف المزيد{" "}
          </span>
          <span className="text-xl mr-2 transition-all hover:shadow-inner-md duration-700 ease-in-out group-hover:opacity-80 group-hover:scale-90  ">
            <ArrowLeft size={24} color="currentColor" />
          </span>
        </button>
      </div>
    </>
  );
}
export default AnimatedBtn;
