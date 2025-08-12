import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/CTASection";
import FeaturedResources from '../components/Home/FeaturedResources'
import FeaturedEventsCarousel from '../components/Home/FeaturedEventsCarousel'
import InteractiveContactSection from '../components/Home/InteractiveContactSection'
const Home = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-[#f7f9fc] to-[#ffffff]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedResources />
      <TestimonialsSection />
            <FeaturedEventsCarousel />
      <InteractiveContactSection />
    </div>
  );
};

export default Home;
