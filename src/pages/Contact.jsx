import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    preferredContact: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        preferredContact: '',
        urgency: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "shaun@jankielsohn.com",
      description: "Send us a message anytime",
      color: "text-[#3398FF]"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+27 (0)21 123 4567",
      description: "Call for immediate assistance",
      color: "text-[#8CC070]"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Cape Town, South Africa",
      description: "Sports Medicine Centre",
      color: "text-[#FAA95E]"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Weekend by appointment",
      color: "text-[#898E96]"
    }
  ];

  const serviceCategories = [
    "Athletic Rehabilitation",
    "Medical Consultation",
    "CPD Course Inquiry",
    "Digital Consultation",
    "Speaking Engagement",
    "Research Collaboration",
    "General Inquiry"
  ];

  const consultationTypes = [
    {
      title: "Athletic Consultation",
      duration: "60 minutes",
      price: "R1,200",
      description: "Comprehensive assessment and treatment planning for sports injuries",
      features: ["Injury assessment", "Treatment plan", "Return-to-sport protocol", "Follow-up support"]
    },
    {
      title: "Professional Consultation",
      duration: "45 minutes",
      price: "R800",
      description: "Expert advice and guidance for medical professionals",
      features: ["Case review", "Treatment recommendations", "Evidence-based guidance", "Professional development"]
    },
    {
      title: "Digital Consultation",
      duration: "30 minutes",
      price: "R600",
      description: "Remote consultation via video conference",
      features: ["Video assessment", "Digital movement analysis", "Treatment guidance", "Resource recommendations"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3398FF]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7195725/pexels-photo-7195725.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact & Book
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Get in touch to book a consultation, inquire about courses, or discuss 
              how Shaun can help you achieve your goals in sports medicine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
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
              Get In Touch
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Multiple ways to connect with Shaun for consultations, courses, and professional collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-[#3398FF] mb-2">{info.title}</h3>
                <p className="font-semibold text-[#898E96] mb-2">{info.content}</p>
                <p className="text-[#898E96] text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
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
              Consultation Options
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Choose the consultation type that best meets your needs and schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#3398FF] mb-2">
                    {consultation.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-[#8CC070]" />
                      <span className="text-[#898E96]">{consultation.duration}</span>
                    </span>
                    <span className="text-2xl font-bold text-[#FAA95E]">
                      {consultation.price}
                    </span>
                  </div>
                  <p className="text-[#898E96] leading-relaxed">
                    {consultation.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {consultation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#8CC070] flex-shrink-0" />
                      <span className="text-[#898E96]">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#8CC070] text-white py-3 rounded-lg font-semibold hover:bg-[#7AB05F] transition-colors">
                  Book This Consultation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Send a Message
            </h2>
            <p className="text-[#898E96] text-xl">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#898E96] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-[#898E96]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#898E96] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-[#898E96]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#898E96] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-[#898E96]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-[#898E96] mb-2">
                      Inquiry Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {serviceCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#898E96] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-[#898E96] mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                    >
                      <option value="">Select preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="video">Video Call</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-[#898E96] mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      <option value="low">Low - Within a week</option>
                      <option value="medium">Medium - Within 2-3 days</option>
                      <option value="high">High - Within 24 hours</option>
                      <option value="urgent">Urgent - Same day</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#898E96] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#898E96]" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center space-x-2 ${
                      isSubmitting
                        ? 'bg-[#898E96] text-white cursor-not-allowed'
                        : 'bg-[#8CC070] text-white hover:bg-[#7AB05F]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-[#8CC070] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#3398FF] mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#898E96] text-lg">
                  Thank you for your inquiry. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
              Visit Our Location
            </h2>
            <p className="text-[#898E96] text-xl">
              Find us at our state-of-the-art sports medicine facility in Cape Town.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#3398FF] rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-[#8CC070]" />
                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                <p className="text-blue-100">
                  Sports Medicine Centre<br />
                  Cape Town, South Africa
                </p>
                <button className="mt-4 bg-[#8CC070] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7AB05F] transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#3398FF] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#898E96] text-xl">
              Quick answers to common questions about consultations and services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "How do I book a consultation?",
                answer: "You can book a consultation by filling out the contact form above, calling our office, or sending an email. We'll respond within 24 hours to confirm your appointment."
              },
              {
                question: "What should I prepare for my consultation?",
                answer: "Please bring any relevant medical records, imaging results, and a list of your current medications. For digital consultations, ensure you have a stable internet connection and good lighting."
              },
              {
                question: "Do you offer emergency consultations?",
                answer: "For urgent cases, please call our office directly. We offer same-day consultations for emergency situations and acute injuries requiring immediate attention."
              },
              {
                question: "What are your cancellation policies?",
                answer: "We require 24 hours notice for cancellations. Late cancellations may be subject to a fee. We understand that emergencies happen and will work with you on a case-by-case basis."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#3398FF] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#898E96] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;