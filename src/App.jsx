import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandsStrip from "./components/BrandsStrip";
import Categories from "./components/Categories";
import ProductsGrid from "./components/ProductsGrid";
import FeatureSection from "./components/FeatureSection";
import InstagramBanner from "./components/InstagramBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden  font-[Scheherazade_New] bg-white text-[#222]"
      dir="rtl"
    >
      <Header />
      <HeroSection />
      {/* <Hero /> */}
      <BrandsStrip />
      <Categories />
      <ProductsGrid />
      <FeatureSection />
      {/* <InstagramBanner /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
