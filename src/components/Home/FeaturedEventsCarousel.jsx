import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

const FeaturedEventsCarousel = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Advanced Sports Rehabilitation Workshop",
      date: "2025-03-15",
      time: "09:00 - 17:00",
      location: "Cape Town",
      format: "In-Person",
      price: "R2,500",
      cpd: "8 CPD Points",
      description: "Hands-on workshop covering advanced rehabilitation techniques for sports injuries.",
      image: "https://images.pexels.com/photos/4153354/pexels-photo-4153354.jpeg",
      type: "workshop",
      seatsLeft: 8
    },
    {
      id: 2,
      title: "Evidence-Based Sports Medicine",
      date: "2025-03-22",
      time: "10:00 - 16:00",
      location: "Online",
      format: "Virtual",
      price: "R1,200",
      cpd: "6 CPD Points",
      description: "Implement evidence-based practice principles in clinical settings.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      type: "course",
      seatsLeft: 33
    },
    {
      id: 3,
      title: "Sports Medicine Conference",
      date: "2025-04-10",
      time: "08:00 - 18:00",
      location: "Cape Town ICC",
      format: "Hybrid",
      price: "R3,200",
      cpd: "10 CPD Points",
      description: "Keynote presentations and panel discussions with leading experts.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      type: "conference",
      seatsLeft: 113
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextEvent = () => {
    setDirection('right');
    setCurrentIndex((prev) => 
      (prev + 1) % featuredEvents.length
    );
  };

  const prevEvent = () => {
    setDirection('left');
    setCurrentIndex((prev) => 
      (prev - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'workshop': return 'bg-[#8CC070]/80';
      case 'course': return 'bg-[#3398FF]/80';
      case 'conference': return 'bg-[#FAA95E]/80';
      default: return 'bg-[#898E96]/80';
    }
  };

  const getSeatStatus = (seats) => {
    if (seats < 10) return 'text-red-500';
    if (seats < 30) return 'text-[#FAA95E]';
    return 'text-[#8CC070]';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e3e9f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3398FF] mb-4">
            Upcoming Professional Events
          </h2>
          <p className="text-xl text-[#898E96] max-w-2xl mx-auto">
            Enhance your skills with our evidence-based training programs
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Navigation */}
          <button 
            onClick={prevEvent}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-[#3398FF] hover:bg-white transition-all border border-white/30"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextEvent}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-[#3398FF] hover:bg-white transition-all border border-white/30"
            aria-label="Next event"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ 
                x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
                opacity: 0 
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ 
                x: direction === 'right' ? -100 : 100,
                opacity: 0 
              }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/30"
            >
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={featuredEvents[currentIndex].image}
                    alt={featuredEvents[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className={`${getEventColor(featuredEvents[currentIndex].type)} text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20`}>
                      {featuredEvents[currentIndex].type.charAt(0).toUpperCase() + featuredEvents[currentIndex].type.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-[#3398FF] mb-4">
                    {featuredEvents[currentIndex].title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#3398FF]" />
                      <span className="text-gray-700">
                        {new Date(featuredEvents[currentIndex].date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#8CC070]" />
                      <span className="text-gray-700">{featuredEvents[currentIndex].time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-[#FAA95E]" />
                      <span className="text-gray-700">{featuredEvents[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`h-5 w-5 rounded-full ${getSeatStatus(featuredEvents[currentIndex].seatsLeft)} border-2 ${getSeatStatus(featuredEvents[currentIndex].seatsLeft)}`} />
                      <span className="text-gray-700">
                        {featuredEvents[currentIndex].seatsLeft} seats left
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredEvents[currentIndex].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#3398FF]">
                        {featuredEvents[currentIndex].price}
                      </div>
                      <div className="text-sm text-[#8CC070] font-semibold">
                        {featuredEvents[currentIndex].cpd}
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#8CC070] to-[#3398FF] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2 backdrop-blur-sm border border-white/20">
                      <span>Register Now</span>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#3398FF] w-6 backdrop-blur-sm' : 'bg-gray-300/80'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsCarousel;