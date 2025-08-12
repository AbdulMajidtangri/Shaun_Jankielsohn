import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Injury Recovery Tailored for Performance Athletes",
      subtitle: "Expert rehabilitation services combining cutting-edge techniques with personalized care",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      cta: "Explore Services"
    },
    {
      title: "Online CPD Courses for Medical Professionals",
      subtitle: "Advance your expertise with evidence-based continuing professional development",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
      cta: "View Courses"
    },
    {
      title: "Elite Athletes Trust Shaun's Expertise",
      subtitle: "Proven results with professional athletes across multiple sports disciplines",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      cta: "Read Testimonials"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(51, 152, 255, 0.7), rgba(51, 152, 255, 0.7)), url(${slide.image})`
                }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={index}
                className="text-center max-w-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 flex items-center justify-center space-x-3"
                >
                  <div className="w-12 h-0.5 bg-[#8CC070]" />
                  <span className="text-[#8CC070] font-medium tracking-wider">EXPERTISE SINCE 2008</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-200">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/services"
                    className="group relative flex items-center justify-center px-8 py-4 overflow-hidden font-medium rounded-lg bg-[#8CC070] text-white shadow-lg hover:bg-[#7AB05F] transition-all duration-300"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-all group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7AB05F] to-[#8CC070] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    to="/"
                    className="group relative flex items-center justify-center px-8 py-4 overflow-hidden font-medium rounded-lg border-2 border-gray-200 text-white shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Link>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-20 hover:scale-110"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-20 hover:scale-110"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#8CC070] w-8" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-[#8CC070] opacity-20 blur-xl" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-400 opacity-20 blur-xl" />
    </section>
  );
};

export default HeroSection;