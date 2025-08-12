import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Trophy, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const testimonialCategories = [
  {
    title: "Elite Athletes",
    icon: Trophy,
    color: "text-[#8CC070]",
    bgColor: "bg-[#8CC070]/80",
    borderColor: "border-[#8CC070]/50",
    testimonials: [
      {
        name: "Marcus Johnson",
        sport: "Professional Rugby Player",
        image: "https://images.pexels.com/photos/1878414/pexels-photo-1878414.jpeg",
        quote: "Shaun's rehabilitation program got me back on the field stronger than ever after my ACL injury. His attention to detail and personalized approach made all the difference in my recovery journey.",
        rating: 5,
        achievement: "Springbok Player",
        result: "Returned to play 3 weeks ahead of schedule"
      },
      {
        name: "Emma Thompson",
        sport: "Olympic Swimmer",
        image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
        quote: "The personalized approach and attention to detail in my recovery plan was exceptional. Shaun understood not just my injury but my goals as an athlete.",
        rating: 5,
        achievement: "Olympic Medalist",
        result: "Achieved personal best times post-recovery"
      },
      {
        name: "David Rodriguez",
        sport: "Professional Cyclist",
        image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
        quote: "Working with Shaun transformed my approach to injury prevention. His expertise helped me maintain peak performance throughout my career.",
        rating: 5,
        achievement: "Tour de France Competitor",
        result: "Completed season injury-free"
      }
    ]
  },
  {
    title: "Medical Professionals",
    icon: Stethoscope,
    color: "text-[#FAA95E]",
    bgColor: "bg-[#FAA95E]/80",
    borderColor: "border-[#FAA95E]/50",
    testimonials: [
      {
        name: "Dr. Sarah Mitchell",
        profession: "Sports Medicine Physician",
        image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
        quote: "Shaun's CPD courses have significantly enhanced my clinical practice and patient outcomes. The evidence-based approach and practical applications are outstanding.",
        rating: 5,
        achievement: "Lead Sports Physician",
        result: "Improved patient recovery rates by 30%"
      },
      {
        name: "Dr. James Wilson",
        profession: "Physiotherapist",
        image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
        quote: "The mentorship and guidance I received from Shaun was invaluable. His expertise helped me develop advanced treatment protocols for complex cases.",
        rating: 5,
        achievement: "Clinic Director",
        result: "Reduced patient recurrence rates by 40%"
      },
      {
        name: "Dr. Lisa Chen",
        profession: "Rehabilitation Specialist",
        image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
        quote: "Shaun's digital consultation platform revolutionized how I approach remote patient care. The quality of guidance and support is exceptional.",
        rating: 5,
        achievement: "Department Head",
        result: "Expanded practice reach by 200%"
      }
    ]
  }
];

const TestimonialsSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % testimonialCategories[currentCategory].testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + testimonialCategories[currentCategory].testimonials.length) % 
      testimonialCategories[currentCategory].testimonials.length
    );
  };

  const changeCategory = (index) => {
    setCurrentCategory(index);
    setCurrentIndex(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f4f8] to-[#e3e9f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#3398FF] mb-4">Trusted By Champions</h2>
          <p className="text-xl text-[#898E96] max-w-2xl mx-auto">
            Hear from elite athletes and medical professionals who've experienced transformative results
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white/30 backdrop-blur-sm p-1 shadow-lg border border-white/20">
            {testimonialCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => changeCategory(index)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  currentCategory === index 
                    ? `${category.bgColor} text-white shadow-sm backdrop-blur-md transform scale-105 border border-white/20` 
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/20"
                }`}
              >
                <div className="flex items-center gap-2">
                  <category.icon size={18} />
                  {category.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialCategories[currentCategory].testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 overflow-hidden"
            >
              <div className={`h-2 w-full ${testimonialCategories[currentCategory].bgColor}`}></div>
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote 
                    className={`${testimonialCategories[currentCategory].color} opacity-80`} 
                    size={32} 
                  />
                </div>
                <p className="text-lg text-gray-800 mb-6 text-center italic">"{testimonial.quote}"</p>
                
                <div className="mb-6 p-4 bg-white/30 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-sm font-medium text-gray-700">Key Result:</div>
                  <div className="text-sm text-gray-600">{testimonial.result}</div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? 
                        "text-[#FAA95E] fill-[#FAA95E] animate-pulse" : 
                        "text-gray-300"}
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.sport || testimonial.profession}
                      {testimonial.achievement && ` • ${testimonial.achievement}`}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentCategory}-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 overflow-hidden"
            >
              <div className={`h-2 w-full ${testimonialCategories[currentCategory].bgColor}`}></div>
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote 
                    className={`${testimonialCategories[currentCategory].color} opacity-80`} 
                    size={32} 
                  />
                </div>
                <p className="text-lg text-gray-800 mb-6 text-center italic">
                  "{testimonialCategories[currentCategory].testimonials[currentIndex].quote}"
                </p>
                
                <div className="mb-6 p-4 bg-white/30 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="text-sm font-medium text-gray-700">Key Result:</div>
                  <div className="text-sm text-gray-600">
                    {testimonialCategories[currentCategory].testimonials[currentIndex].result}
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={20}
                      className={i < testimonialCategories[currentCategory].testimonials[currentIndex].rating ? 
                        "text-[#FAA95E] fill-[#FAA95E]" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonialCategories[currentCategory].testimonials[currentIndex].image} 
                    alt={testimonialCategories[currentCategory].testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonialCategories[currentCategory].testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonialCategories[currentCategory].testimonials[currentIndex].sport || 
                       testimonialCategories[currentCategory].testimonials[currentIndex].profession}
                      {testimonialCategories[currentCategory].testimonials[currentIndex].achievement && 
                       ` • ${testimonialCategories[currentCategory].testimonials[currentIndex].achievement}`}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#3398FF] hover:bg-white transition-all z-10 border border-white/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#3398FF] hover:bg-white transition-all z-10 border border-white/30"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonialCategories[currentCategory].testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 
                    `${testimonialCategories[currentCategory].bgColor} w-6 opacity-100 backdrop-blur-sm` : 
                    "bg-gray-300/80 opacity-70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            to="/testimonials" 
            className="inline-block bg-gradient-to-r from-[#3398FF] to-[#8CC070] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore More Success Stories
              <ChevronRight className="h-5 w-5" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;