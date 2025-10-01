function AnimatedBullets() {
  return (
    <>
      <div className="animated-bullets mt-[90px] flex items-center justify-center gap-2 mt-4">
        <span className="bullet active w-[12px] h-[12px] rounded-full bg-[#597445]"></span>
        <div className="rounde-border flex items-center justify-center w-[20px] h-[20px] rounded-full border-1 border-[#597445]">
          <span className="bullet  active w-[12px] h-[12px] rounded-full bg-[#597445]"></span>
        </div>

        <span className="bullet  active w-[12px] h-[12px] rounded-full bg-[#597445]"></span>
      </div>
    </>
  );
}
export default AnimatedBullets;
