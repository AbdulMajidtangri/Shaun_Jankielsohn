import React, { useState } from "react";
import { Stethoscope, GraduationCap, Award, Monitor, Users, BookOpen, X } from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: "Athlete Rehabilitation",
    description: "Specialized recovery programs tailored for athletes.",
    details: [
      "Post-surgical rehabilitation",
      "Sports injury recovery",
      "Performance restoration",
      "Prevention programs"
    ],
    color: "#3398FF",
    fullDescription: "Our athlete rehabilitation programs are designed by top sports medicine specialists to help athletes recover from injuries and return to peak performance. We combine cutting-edge techniques with personalized care to ensure optimal recovery timelines."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Medical Education",
    description: "Evidence-based CPD courses for professionals.",
    details: [
      "CPD accredited courses",
      "In-person workshops",
      "Online learning modules",
      "Case-based learning"
    ],
    color: "#8CC070",
    fullDescription: "We offer comprehensive continuing professional development courses for medical practitioners looking to specialize in sports medicine. Our programs are accredited and taught by industry leaders."
  },
  {
    icon: <Award size={32} />,
    title: "Elite Athlete Support",
    description: "Programs for professional athletes.",
    details: [
      "Injury prevention",
      "Performance optimization",
      "Recovery protocols",
      "Season planning"
    ],
    color: "#FAA95E",
    fullDescription: "Dedicated support programs for elite athletes that focus on injury prevention, performance enhancement, and year-round health maintenance. We work directly with athletes and their teams."
  },
  {
    icon: <Monitor size={32} />,
    title: "Digital Consultations",
    description: "Remote assessments worldwide.",
    details: [
      "Video consultations",
      "Digital rehab programs",
      "Progress tracking",
      "24/7 support"
    ],
    color: "#FF6B6B",
    fullDescription: "Access our sports medicine specialists from anywhere in the world through our secure digital platform. Get expert opinions, rehabilitation plans, and follow-up care without geographical limitations."
  },
  {
    icon: <Users size={32} />,
    title: "Mentorship",
    description: "Guidance for sports medicine professionals.",
    details: [
      "1-on-1 mentoring",
      "Case reviews",
      "Career development",
      "Research collaboration"
    ],
    color: "#9B51E0",
    fullDescription: "Our mentorship program connects emerging sports medicine professionals with experienced practitioners for guidance, case discussions, and career development opportunities."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Resources",
    description: "Rehabilitation protocols library.",
    details: [
      "Exercise libraries",
      "Treatment guides",
      "Research summaries",
      "Protocol templates"
    ],
    color: "#2D9CDB",
    fullDescription: "Comprehensive digital resource library containing evidence-based protocols, exercise databases, and treatment guides for sports medicine practitioners."
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20  relative bg-gray-200 overflow-hidden">
      {/* Floating gradient bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.map((service, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: service.color,
              width: `${200 + (i * 50)}px`,
              height: `${200 + (i * 50)}px`,
              top: `${10 + (i * 10)}%`,
              left: `${5 + (i * 15)}%`,
              filter: 'blur(80px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#3398FF]/10 text-[#3398FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Professional Services
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Transformative <span className="text-[#3398FF]">Sports Medicine</span> Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3398FF] to-[#9B51E0] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Cutting-edge programs designed to elevate performance and accelerate recovery
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 relative">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="flex items-start mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0"
                  style={{
                    backgroundColor: `${selectedService.color}15`,
                    color: selectedService.color
                  }}
                >
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: selectedService.color }}>
                    {selectedService.title}
                  </h3>
                  <p className="text-lg text-gray-700">{selectedService.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {selectedService.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${selectedService.color}20` }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: selectedService.color }}
                        />
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Full Description:</h4>
                <p className="text-gray-700">{selectedService.fullDescription}</p>
              </div>

              <div className="mt-8">
                <button
                  className="px-6 py-3 rounded-lg font-medium text-white w-full"
                  style={{ backgroundColor: selectedService.color }}
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="relative  group h-full">
      {/* Card Background */}
      <div className="relative bg-gray-200 overflow-hidden rounded-2xl h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        {/* Color accent bar */}
        <div 
          className="absolute top-0 left-0 w-full h-1.5"
          style={{ backgroundColor: service.color }}
        />

        {/* Floating icon background */}
        <div
          className="absolute -top-10 -right-10 rounded-full opacity-10"
          style={{
            backgroundColor: service.color,
            width: '150px',
            height: '150px'
          }}
        />

        <div className="p-8 h-full flex flex-col">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: `${service.color}15`,
              color: service.color
            }}
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 
            className="text-2xl font-bold mb-3"
            style={{
              background: `linear-gradient(to right, ${service.color}, ${service.color}AA)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-[#64748B] mb-6">
            {service.description}
          </p>

          {/* Service points - always visible */}
          <ul className="space-y-3 mb-6">
            {service.details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                </span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>

          {/* Learn More button */}
          <div className="mt-auto pt-4">
            <button
              className={`px-6 py-3 rounded-lg font-medium text-center w-full transition-all duration-300`}
              style={{
                backgroundColor: `${service.color}10`,
                color: service.color
              }}
              onClick={onClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;