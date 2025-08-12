import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Users, Video, Stethoscope, Zap, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Trophy,
      title: "Athletic Rehabilitation",
      description: "Specialized recovery programs designed for professional and amateur athletes",
      image: "https://images.pexels.com/photos/4153354/pexels-photo-4153354.jpeg",
      features: [
        "Injury assessment and diagnosis",
        "Personalized treatment plans",
        "Performance optimization",
        "Return-to-sport protocols",
        "Injury prevention strategies"
      ],
      color: "text-[#8CC070]",
      bgColor: "bg-[#8CC070]"
    },
    {
      icon: BookOpen,
      title: "Medical Education & CPD",
      description: "Evidence-based continuing professional development for healthcare providers",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      features: [
        "Accredited CPD courses",
        "Evidence-based content",
        "Interactive learning modules",
        "Certification programs",
        "Peer networking opportunities"
      ],
      color: "text-[#FAA95E]",
      bgColor: "bg-[#FAA95E]"
    },
    {
      icon: Video,
      title: "Digital Consultations",
      description: "Remote assessments and treatment planning available worldwide",
      image: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg",
      features: [
        "Video consultations",
        "Movement analysis",
        "Treatment plan development",
        "Progress monitoring",
        "Global accessibility"
      ],
      color: "text-[#3398FF]",
      bgColor: "bg-[#3398FF]"
    },
    {
      icon: Users,
      title: "In-Person & Online Courses",
      description: "Comprehensive training programs for medical professionals",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      features: [
        "Hands-on workshops",
        "Online learning platforms",
        "Small group sessions",
        "Practical skill development",
        "Flexible scheduling"
      ],
      color: "text-[#8CC070]",
      bgColor: "bg-[#8CC070]"
    },
    {
      icon: Stethoscope,
      title: "Medical Consultations",
      description: "Expert clinical advice and second opinions for complex cases",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      features: [
        "Clinical case reviews",
        "Treatment recommendations",
        "Diagnostic support",
        "Collaborative care planning",
        "Professional mentorship"
      ],
      color: "text-[#FAA95E]",
      bgColor: "bg-[#FAA95E]"
    },
    {
      icon: Zap,
      title: "Resources & Mentorship",
      description: "Ongoing support and guidance for career and practice development",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      features: [
        "One-on-one mentoring",
        "Career guidance",
        "Research collaboration",
        "Professional networking",
        "Resource libraries"
      ],
      color: "text-[#3398FF]",
      bgColor: "bg-[#3398FF]"
    }
  ];

  const stats = [
    { number: "500+", label: "Athletes Treated", color: "text-[#8CC070]" },
    { number: "15+", label: "Years Experience", color: "text-[#FAA95E]" },
    { number: "50+", label: "CPD Courses", color: "text-[#3398FF]" },
    { number: "25+", label: "Countries Reached", color: "text-[#8CC070]" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3398FF]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Shaun Offers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive rehabilitation services and educational programs designed 
              for athletes and medical professionals seeking excellence in performance and practice.
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
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-[#898E96] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Service Categories
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Each service is tailored to meet the specific needs of athletes and healthcare 
              professionals, combining evidence-based practice with personalized care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${service.bgColor} bg-opacity-80 flex items-center justify-center`}>
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#3398FF] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#898E96] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className={`h-5 w-5 ${service.color} flex-shrink-0`} />
                        <span className="text-[#898E96]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`${service.bgColor} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
                Specialized Expertise
              </h2>
              <p className="text-[#898E96] text-lg mb-6 leading-relaxed">
                Shaun's expertise spans across multiple disciplines, combining advanced 
                clinical knowledge with practical experience in high-performance environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#8CC070] rounded-full"></div>
                  <span className="text-[#898E96]">Sports Medicine & Rehabilitation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#FAA95E] rounded-full"></div>
                  <span className="text-[#898E96]">Biomechanics & Movement Analysis</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#3398FF] rounded-full"></div>
                  <span className="text-[#898E96]">Evidence-Based Practice</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#8CC070] rounded-full"></div>
                  <span className="text-[#898E96]">Professional Education & Training</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5794949/pexels-photo-5794949.jpeg"
                alt="Shaun's expertise"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3398FF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Take the first step towards optimized performance and enhanced expertise. 
              Book a consultation to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#8CC070] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7AB05F] transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3398FF] transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>View Training Events</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;