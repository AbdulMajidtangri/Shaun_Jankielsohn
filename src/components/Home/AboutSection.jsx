import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Activity } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/5794949/pexels-photo-5794949.jpeg"
                  alt="Shaun working with athlete"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative h-30 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/6456181/pexels-photo-6456181.jpeg"
                    alt="Sports rehabilitation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative h-30 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/6456159/pexels-photo-6456159.jpeg"
                    alt="Medical education"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#8CC070] text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Award className="mr-2" size={18} />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Meet Shaun Jankielsohn
            </h2>

            {/* Interactive Tabs */}
            <div className="flex border-b border-gray-900 mb-6 ">
              <button
                onClick={() => setActiveTab("bio")}
                className={`px-4 py-2 font-medium ${activeTab === "bio" ? "text-[#3398FF] border-b-2 border-[#3398FF]" : "text-[#898E96]"}`}
              >
                Biography
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-medium ${activeTab === "approach" ? "text-[#3398FF] border-b-2 border-[#3398FF]" : "text-[#898E96]"}`}
              >
                Approach
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 font-medium ${activeTab === "education" ? "text-[#3398FF] border-b-2 border-[#3398FF]" : "text-[#898E96]"}`}
              >
                Education
              </button>
            </div>

            {/* Tab Content */}
            <div className="mb-6">
              {activeTab === "bio" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#898E96] text-lg mb-4 leading-relaxed">
                    With over 15 years of experience in sports rehabilitation and medical education, 
                    Shaun bridges the gap between performance recovery and evidence-based practice.
                  </p>
                  <p className="text-[#898E96] text-lg leading-relaxed">
                    Combining cutting-edge rehabilitation techniques with personalized care, 
                    Shaun has helped countless athletes return to peak performance while advancing 
                    the field through research and education.
                  </p>
                </motion.div>
              )}
              {activeTab === "approach" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#898E96] text-lg mb-4 leading-relaxed">
                    Shaun's approach combines the latest evidence-based techniques with a 
                    deep understanding of athletic performance demands.
                  </p>
                  <p className="text-[#898E96] text-lg leading-relaxed">
                    Each rehabilitation program is tailored to the individual athlete's needs, 
                    sport-specific requirements, and performance goals.
                  </p>
                </motion.div>
              )}
              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#898E96] text-lg mb-4 leading-relaxed">
                    Shaun holds advanced degrees in Sports Medicine and Rehabilitation, 
                    with additional certifications in performance enhancement.
                  </p>
                  <p className="text-[#898E96] text-lg leading-relaxed">
                    He regularly contributes to medical journals and speaks at international 
                    conferences on sports rehabilitation topics.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Activity className="text-[#8CC070]" size={24} />
                </div>
                <div className="text-2xl font-bold text-[#8CC070]">500+</div>
                <div className="text-[#898E96] text-sm">Athletes Treated</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <BookOpen className="text-[#FAA95E]" size={24} />
                </div>
                <div className="text-2xl font-bold text-[#FAA95E]">50+</div>
                <div className="text-[#898E96] text-sm">Courses Delivered</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Award className="text-[#3398FF]" size={24} />
                </div>
                <div className="text-2xl font-bold text-[#3398FF]">15+</div>
                <div className="text-[#898E96] text-sm">Years Experience</div>
              </div>
            </div>

            <Link
              to="/contact"
              className="group relative overflow-hidden bg-[#3398FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2980d9] transition-all duration-300 inline-flex items-center"
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-all group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#2980d9] to-[#3398FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;