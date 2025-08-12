import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Calendar, User, MessageSquare, CheckCircle } from 'lucide-react';

const InteractiveContactSection = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "shaun@jankielsohn.com",
      action: "Send a message anytime",
      color: "text-[#3398FF]",
      bgColor: "bg-[#3398FF]/10"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+27 (0)21 123 4567",
      action: "Mon-Fri, 8AM-6PM",
      color: "text-[#8CC070]",
      bgColor: "bg-[#8CC070]/10"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Cape Town, South Africa",
      action: "By appointment only",
      color: "text-[#FAA95E]",
      bgColor: "bg-[#FAA95E]/10"
    }
  ];

  const consultationTypes = [
    {
      title: "Athletic Consultation",
      duration: "60 min",
      price: "R1,200",
      features: ["Injury assessment", "Treatment plan", "Return-to-sport protocol"],
      color: "bg-[#3398FF]/80",
      borderColor: "border-[#3398FF]/50"
    },
    {
      title: "Professional Consult",
      duration: "45 min",
      price: "R800",
      features: ["Case review", "Evidence guidance", "Treatment recommendations"],
      color: "bg-[#8CC070]/80",
      borderColor: "border-[#8CC070]/50"
    },
    {
      title: "Digital Consultation",
      duration: "30 min",
      price: "R600",
      features: ["Video assessment", "Movement analysis", "Remote guidance"],
      color: "bg-[#FAA95E]/80",
      borderColor: "border-[#FAA95E]/50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e3e9f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With <span className="text-[#3398FF]">Shaun</span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Book consultations, inquire about courses, or discuss professional collaborations
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white/30 backdrop-blur-sm p-1 rounded-xl shadow-lg border border-white/20">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'contact' 
                  ? 'bg-[#3398FF]/80 text-white backdrop-blur-md border border-white/20' 
                  : 'text-[#64748B] hover:bg-white/20'
              }`}
            >
              Contact Options
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'book' 
                  ? 'bg-[#3398FF]/80 text-white backdrop-blur-md border border-white/20' 
                  : 'text-[#64748B] hover:bg-white/20'
              }`}
            >
              Book Consultation
            </button>
          </div>
        </motion.div>

        {/* Contact Options Content */}
        {activeTab === 'contact' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className={`${method.bgColor} backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all`}
              >
                <div className={`${method.color} mb-4`}>
                  <method.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="font-semibold text-[#64748B] mb-2">{method.detail}</p>
                <p className="text-[#64748B] text-sm">{method.action}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {consultationTypes.map((type, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-white/30"
              >
                <div className={`${type.color} h-3 w-full`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center text-[#64748B]">
                      <Clock className="h-4 w-4 mr-1" />
                      {type.duration}
                    </span>
                    <span className="font-bold text-gray-900">{type.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`${type.color} w-2 h-2 rounded-full mr-2`}></div>
                        <span className="text-[#64748B]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`${type.color} text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity backdrop-blur-sm border border-white/20`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Quick Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-white/30"
        >
          <h3 className="text-2xl font-bold text-[#3398FF] mb-6 text-center">
            Quick Message
          </h3>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-[#64748B]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-[#3398FF]/50 focus:border-transparent"
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-[#64748B]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-[#3398FF]/50 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#64748B]" />
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-[#3398FF]/50 focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#3398FF] to-[#8CC070] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20"
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-[#8CC070]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-[#8CC070]/30">
                <CheckCircle className="h-8 w-8 text-[#8CC070]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h4>
              <p className="text-[#64748B]">
                Thank you for reaching out. We'll respond within 24 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveContactSection;