import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ChevronRight, ExternalLink, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const eventTypes = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'workshops', name: 'Workshops', count: 5 },
    { id: 'courses', name: 'CPD Courses', count: 4 },
    { id: 'conferences', name: 'Conferences', count: 2 },
    { id: 'webinars', name: 'Webinars', count: 1 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced Sports Rehabilitation Workshop",
      type: "workshops",
      date: "2025-03-15",
      time: "09:00 - 17:00",
      location: "Cape Town Sports Medicine Centre",
      format: "In-Person",
      capacity: 30,
      enrolled: 22,
      price: "R2,500",
      cpd: "8 CPD Points",
      description: "Intensive hands-on workshop covering advanced rehabilitation techniques for sports injuries, including practical sessions and case studies.",
      image: "https://images.pexels.com/photos/4153354/pexels-photo-4153354.jpeg",
      featured: true,
      topics: ["Advanced Assessment", "Treatment Protocols", "Return to Sport", "Case Studies"]
    },
    {
      id: 2,
      title: "Evidence-Based Practice in Sports Medicine",
      type: "courses",
      date: "2025-03-22",
      time: "10:00 - 16:00",
      location: "Online",
      format: "Virtual",
      capacity: 100,
      enrolled: 67,
      price: "R1,200",
      cpd: "6 CPD Points",
      description: "Comprehensive course on implementing evidence-based practice principles in sports medicine and rehabilitation settings.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      featured: true,
      topics: ["Research Methods", "Critical Appraisal", "Implementation", "Quality Improvement"]
    },
    {
      id: 3,
      title: "International Sports Medicine Conference",
      type: "conferences",
      date: "2025-04-10",
      time: "08:00 - 18:00",
      location: "International Convention Centre, Cape Town",
      format: "Hybrid",
      capacity: 500,
      enrolled: 387,
      price: "R3,200",
      cpd: "10 CPD Points",
      description: "Annual conference bringing together leading experts in sports medicine, featuring keynote presentations and panel discussions.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      featured: false,
      topics: ["Latest Research", "Clinical Innovations", "Technology in Sports", "Networking"]
    },
    {
      id: 4,
      title: "Digital Consultation Mastery",
      type: "webinars",
      date: "2025-04-18",
      time: "19:00 - 21:00",
      location: "Online",
      format: "Webinar",
      capacity: 200,
      enrolled: 143,
      price: "R500",
      cpd: "2 CPD Points",
      description: "Learn best practices for conducting effective digital consultations in sports medicine and rehabilitation.",
      image: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg",
      featured: false,
      topics: ["Technology Setup", "Patient Communication", "Assessment Techniques", "Documentation"]
    },
    {
      id: 5,
      title: "Biomechanical Assessment Techniques",
      type: "workshops",
      date: "2025-05-05",
      time: "09:00 - 17:00",
      location: "Johannesburg Sports Science Institute",
      format: "In-Person",
      capacity: 25,
      enrolled: 18,
      price: "R2,800",
      cpd: "8 CPD Points",
      description: "Practical workshop on advanced biomechanical assessment methods for sports medicine practitioners.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      featured: false,
      topics: ["Movement Analysis", "Technology Integration", "Data Interpretation", "Clinical Application"]
    },
    {
      id: 6,
      title: "Injury Prevention Strategies Masterclass",
      type: "courses",
      date: "2025-05-20",
      time: "10:00 - 16:00",
      location: "Online",
      format: "Virtual",
      capacity: 80,
      enrolled: 52,
      price: "R1,500",
      cpd: "6 CPD Points",
      description: "Comprehensive masterclass on developing and implementing effective injury prevention programs.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      featured: false,
      topics: ["Risk Assessment", "Program Design", "Implementation", "Outcome Measurement"]
    }
  ];

  const pastEvents = [
    {
      title: "ACL Rehabilitation Summit 2024",
      date: "2024-11-15",
      attendees: 180,
      rating: 4.9,
      highlights: ["Latest surgical techniques", "Evidence-based protocols", "Case study presentations"]
    },
    {
      title: "Sports Psychology Integration Workshop",
      date: "2024-10-22",
      attendees: 45,
      rating: 4.8,
      highlights: ["Holistic treatment approaches", "Mental health in sports", "Practical integration methods"]
    },
    {
      title: "Digital Health in Sports Medicine",
      date: "2024-09-18",
      attendees: 220,
      rating: 4.7,
      highlights: ["Technology adoption", "Remote monitoring", "Future trends discussion"]
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => 
    activeFilter === 'all' || event.type === activeFilter
  );

  const getEventColor = (type) => {
    switch (type) {
      case 'workshops': return 'bg-[#8CC070] text-white';
      case 'courses': return 'bg-[#3398FF] text-white';
      case 'conferences': return 'bg-[#FAA95E] text-white';
      case 'webinars': return 'bg-[#898E96] text-white';
      default: return 'bg-[#898E96] text-white';
    }
  };

  const getCapacityColor = (enrolled, capacity) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-[#FAA95E]';
    return 'text-[#8CC070]';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3398FF]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & Training
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Join workshops, courses, conferences, and training sessions designed to advance 
              your expertise in sports medicine and rehabilitation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Featured Upcoming Events
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Don't miss these highlighted training opportunities designed for sports 
              medicine professionals seeking to enhance their skills and knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <span className={`${getEventColor(event.type)} px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <div className="bg-[#FAA95E] text-white px-3 py-1 rounded-full text-sm font-semibold inline-block ml-2">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#3398FF] mb-4">
                    {event.title}
                  </h3>
                  <p className="text-[#898E96] mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#3398FF]" />
                      <span className="text-[#898E96] text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#8CC070]" />
                      <span className="text-[#898E96] text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-[#FAA95E]" />
                      <span className="text-[#898E96] text-sm">{event.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className={`h-5 w-5 ${getCapacityColor(event.enrolled, event.capacity)}`} />
                      <span className="text-[#898E96] text-sm">
                        {event.enrolled}/{event.capacity} enrolled
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-gray-100 text-[#898E96] px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#3398FF]">{event.price}</div>
                      <div className="text-sm text-[#8CC070] font-semibold">{event.cpd}</div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-[#8CC070] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7AB05F] transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Register Now</span>
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              All Upcoming Events
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Browse all available training opportunities and continuing education events.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
                  activeFilter === type.id
                    ? 'bg-[#3398FF] text-white'
                    : 'bg-white text-[#898E96] hover:bg-[#3398FF] hover:text-white'
                }`}
              >
                <Filter size={16} />
                <span>{type.name}</span>
                <span className="bg-black bg-opacity-20 text-xs px-2 py-1 rounded-full">
                  {type.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${getEventColor(event.type)} px-3 py-1 rounded-full text-sm font-semibold`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#3398FF]">{event.price}</div>
                        <div className="text-sm text-[#8CC070] font-semibold">{event.cpd}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#3398FF] mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-[#898E96] mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#3398FF]" />
                        <span className="text-[#898E96] text-sm">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-[#8CC070]" />
                        <span className="text-[#898E96] text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-[#FAA95E]" />
                        <span className="text-[#898E96] text-sm">{event.format}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className={`h-4 w-4 ${getCapacityColor(event.enrolled, event.capacity)}`} />
                        <span className="text-[#898E96] text-sm">
                          {event.enrolled}/{event.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {event.topics.slice(0, 2).map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="bg-gray-100 text-[#898E96] px-3 py-1 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                        {event.topics.length > 2 && (
                          <span className="bg-gray-100 text-[#898E96] px-3 py-1 rounded-full text-sm">
                            +{event.topics.length - 2} more
                          </span>
                        )}
                      </div>
                      <Link
                        to="/contact"
                        className="bg-[#8CC070] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#7AB05F] transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Register</span>
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Past Event Highlights
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              See what participants experienced at previous events and training sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#3398FF] mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#898E96] text-sm">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⭐</span>
                    <span className="font-bold text-[#FAA95E]">{event.rating}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4 text-[#8CC070]" />
                    <span className="text-[#898E96] text-sm">{event.attendees} attendees</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3398FF] mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-[#898E96] text-sm flex items-start space-x-2">
                        <span className="text-[#8CC070] mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
              Ready to Advance Your Expertise?
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Join thousands of sports medicine professionals who have enhanced their 
              knowledge and skills through Shaun's training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#8CC070] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7AB05F] transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Contact for Custom Training</span>
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3398FF] transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Explore All Services</span>
                <ExternalLink size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;