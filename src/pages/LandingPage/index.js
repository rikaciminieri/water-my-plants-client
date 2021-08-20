import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LearnMore from "./components/LearnMore";


const LandingPage = () => {
  return (
    <div className="relative bg-gray-50">
      <Header />
      <main className="lg:relative">
          <HeroSection />
          <LearnMore />
      </main>
    </div>
  );
};

export default LandingPage;
