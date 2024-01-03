import React from "react";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import WhatsNew from "./components/WhatsNew";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="pb-10">
      <HeroSection />
      <Categories />
      <WhatsNew />
      <Contact />
    </div>
  );
}

export default App;
