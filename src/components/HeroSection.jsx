import AnimatedBtn from "./AnimatedBtn";
import AnimatedBullets from "./AnimatedBullets";

function HeroSection() {
  return (
    <section
      id="hero-section-big"
      style={{ backgroundImage: "url('images/Rectangle57.png')" }}
      className="hero-section-big lg:h-[90vh] flex flex-col lg:flex-row  justify-between"
    >
      <div className="first-img flex items-center justify-center">
        <img
          className="lg:w-full lg:h-full w-[70%] h-[60%] "
          src="images/Frame 3.png"
          alt=""
        />
      </div>
      <div className="hero-content relative flex flex-col mb-5  text-center">
        <img
          className="absolute top-0  left-[220px] hidden lg:block"
          src="/images/water.png"
          alt=""
        />
        <img
          className="absolute top-0  left-[220px] md:hidden block"
          src="/images/water.png"
          alt=""
        />
        <img
          className="absolute bottom-0 right-[350px] md:hidden block"
          src="/images/water.png"
          alt=""
        />
        <div className="logo-img flex mt-5 justify-center mb-4">
          <img
            className="mt-5 w-[110px] z-[999] mb-5"
            src="images/Group 5.svg"
            alt=""
          />
        </div>
        <p className="text-[#3e582b] z-[999] mt-5 mb-5 text-[40px] font-[600] font-[Scheherazade_New] ">
          العنايـــــــة التي <br />
          تستحقهـــــا بشرتــــــــــــــــــــــــك
        </p>
        <p className="text-[24px] text-[#1E2519C7] font-[Scheherazade_New]">
          منتجات طبيعية 100% لتغذية بشرتك
        </p>
        <AnimatedBtn />
        <AnimatedBullets />
      </div>

      <div className="second-img lg:block hidden">
        <img className="w-full h-full" src="images/Frame 5.png" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
