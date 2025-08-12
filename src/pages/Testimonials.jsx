import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Trophy, Stethoscope, Users, Medal } from 'lucide-react';

const Testimonials = () => {
  const testimonialCategories = [
    {
      title: "Elite Athletes",
      icon: Trophy,
      color: "text-[#8CC070]",
      bgColor: "bg-[#8CC070]",
      testimonials: [
        {
          name: "Marcus Johnson",
          sport: "Professional Rugby Player",
          image: "https://images.pexels.com/photos/1878414/pexels-photo-1878414.jpeg",
          quote: "Shaun's rehabilitation program got me back on the field stronger than ever after my ACL injury. His attention to detail and personalized approach made all the difference in my recovery journey.",
          rating: 5,
          achievement: "Springbok Player"
        },
        {
          name: "Emma Thompson",
          sport: "Olympic Swimmer",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
          quote: "The personalized approach and attention to detail in my recovery plan was exceptional. Shaun understood not just my injury but my goals as an athlete.",
          rating: 5,
          achievement: "Olympic Medalist"
        },
        {
          name: "David Rodriguez",
          sport: "Professional Cyclist",
          image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
          quote: "Working with Shaun transformed my approach to injury prevention. His expertise helped me maintain peak performance throughout my career.",
          rating: 5,
          achievement: "Tour de France Competitor"
        }
      ]
    },
    {
      title: "Medical Professionals",
      icon: Stethoscope,
      color: "text-[#FAA95E]",
      bgColor: "bg-[#FAA95E]",
      testimonials: [
        {
          name: "Dr. Sarah Mitchell",
          profession: "Sports Medicine Physician",
          image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
          quote: "Shaun's CPD courses have significantly enhanced my clinical practice and patient outcomes. The evidence-based approach and practical applications are outstanding.",
          rating: 5,
          achievement: "Lead Sports Physician"
        },
        {
          name: "Dr. James Wilson",
          profession: "Physiotherapist",
          image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
          quote: "The mentorship and guidance I received from Shaun was invaluable. His expertise helped me develop advanced treatment protocols for complex cases.",
          rating: 5,
          achievement: "Clinic Director"
        },
        {
          name: "Dr. Lisa Chen",
          profession: "Rehabilitation Specialist",
          image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
          quote: "Shaun's digital consultation platform revolutionized how I approach remote patient care. The quality of guidance and support is exceptional.",
          rating: 5,
          achievement: "Department Head"
        }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "ACL Recovery Success",
      category: "Professional Rugby",
      duration: "8 weeks",
      outcome: "100% return to play",
      description: "Complete ACL rehabilitation program resulting in stronger return to professional rugby within 8 weeks of surgery.",
      image: "https://images.pexels.com/photos/163454/football-american-football-runner-player-163454.jpeg"
    },
    {
      title: "Shoulder Impingement Resolution",
      category: "Olympic Swimming",
      duration: "12 weeks",
      outcome: "Personal best achieved",
      description: "Comprehensive shoulder rehabilitation program that not only resolved impingement but improved overall performance.",
      image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg"
    },
    {
      title: "Chronic Back Pain Management",
      category: "Professional Cycling",
      duration: "16 weeks",
      outcome: "Pain-free performance",
      description: "Long-term management strategy for chronic lumbar pain resulting in sustained pain-free competitive cycling.",
      image: "https://images.pexels.com/photos/163407/cyclists-training-sports-fitness-163407.jpeg"
    }
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: Trophy },
    { number: "500+", label: "Athletes Treated", icon: Users },
    { number: "25+", label: "Sports Covered", icon: Medal },
    { number: "15+", label: "Years Experience", icon: Star }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3398FF]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Real stories from elite athletes and medical professionals who have 
              experienced Shaun's expertise and achieved exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-[#8CC070] mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-[#3398FF] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#898E96] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Categories */}
      {testimonialCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? "py-20 bg-gray-50" : "py-20 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <category.icon className={`h-12 w-12 ${category.color}`} />
                <h2 className="text-4xl font-bold text-[#3398FF]">
                  {category.title}
                </h2>
              </div>
              <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
                Hear from {category.title.toLowerCase()} who have worked with Shaun 
                and experienced transformative results in their careers and practice.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 right-4 ${category.bgColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {testimonial.achievement}
                    </div>
                  </div>
                  <div className="p-8">
                    <Quote className={`h-8 w-8 ${category.color} mb-4`} />
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#FAA95E] fill-current" />
                      ))}
                    </div>
                    <p className="text-[#898E96] italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-[#3398FF] text-lg">{testimonial.name}</p>
                      <p className="text-[#898E96]">
                        {testimonial.sport || testimonial.profession}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Case Studies Section */}
      <section className="py-20 bg-[#3398FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Case Studies
            </h2>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              Detailed case studies showcasing specific rehabilitation successes 
              and the methodologies that led to exceptional outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#8CC070] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.category}
                    </span>
                    <span className="text-[#FAA95E] font-semibold">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#3398FF] mb-3">
                    {study.title}
                  </h3>
                  <p className="text-[#898E96] mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="bg-[#8CC070] text-white px-4 py-2 rounded-lg text-center font-semibold">
                    Outcome: {study.outcome}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Featured Video Testimonial
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Watch as professional athletes and medical professionals share 
              their experiences working with Shaun Jankielsohn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-[#3398FF] rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Video Testimonials</h3>
                  <p className="text-blue-100">Coming Soon - Interactive video testimonials from our clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#898E96]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-gray-200 text-xl mb-8">
              Ready to achieve your goals and become the next success story? 
              Book a consultation with Shaun and start your journey to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#8CC070] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7AB05F] transition-colors">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#898E96] transition-colors">
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;