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

function App() {
  return (
    <div className="min-h-screen font-['Scheherazade New',serif] bg-[#f6f6f6] text-[#222]" dir="rtl">
      <Header />
      <Hero />
      <BrandsStrip />
      <Categories />
      <ProductsGrid />
      <FeatureSection />
      <InstagramBanner />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
