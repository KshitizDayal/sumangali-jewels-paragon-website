import React from "react";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import WhatsNew from "./components/WhatsNew";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="pb-10">
      <HeroSection />
      <Categories />
      <WhatsNew />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
