import React from "react";
import HeroSection from "../components/Landing/HeroSection";
import ServicesSection from "../components/Landing/ServicesSection";

function LandingPage() {
  return (
    <div className="h-full">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default LandingPage;
