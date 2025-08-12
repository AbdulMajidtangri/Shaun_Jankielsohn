import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ExternalLink, FileText, Video, Calendar, Search, Filter } from 'lucide-react';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'research', name: 'Research Papers', count: 8 },
    { id: 'courses', name: 'Course Materials', count: 6 },
    { id: 'articles', name: 'Articles', count: 5 },
    { id: 'videos', name: 'Video Content', count: 3 },
    { id: 'guides', name: 'Clinical Guides', count: 2 }
  ];

  const publications = [
    {
      id: 1,
      title: "Evidence-Based Approaches to ACL Rehabilitation in Professional Athletes",
      type: "research",
      category: "Research Paper",
      date: "2024-02-15",
      description: "Comprehensive study examining rehabilitation protocols for ACL injuries in elite athletes, featuring outcome measurements and return-to-play guidelines.",
      downloadUrl: "#",
      featured: true,
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      tags: ["ACL", "Rehabilitation", "Elite Athletes", "Evidence-Based"]
    },
    {
      id: 2,
      title: "CPD Course: Advanced Biomechanical Assessment Techniques",
      type: "courses",
      category: "Course Syllabus",
      date: "2024-01-20",
      description: "Complete course syllabus covering advanced biomechanical assessment methods for sports medicine practitioners.",
      downloadUrl: "#",
      featured: true,
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      tags: ["CPD", "Biomechanics", "Assessment", "Professional Development"]
    },
    {
      id: 3,
      title: "Digital Consultation Best Practices in Sports Medicine",
      type: "articles",
      category: "Professional Article",
      date: "2023-12-10",
      description: "Guidelines and best practices for conducting effective digital consultations in sports medicine and rehabilitation.",
      downloadUrl: "#",
      featured: false,
      image: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg",
      tags: ["Digital Health", "Telemedicine", "Sports Medicine"]
    },
    {
      id: 4,
      title: "Movement Analysis Fundamentals",
      type: "videos",
      category: "Educational Video",
      date: "2023-11-15",
      description: "Comprehensive video series covering fundamental principles of movement analysis in clinical settings.",
      downloadUrl: "#",
      featured: false,
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      tags: ["Movement Analysis", "Clinical Skills", "Video Training"]
    },
    {
      id: 5,
      title: "Shoulder Impingement: Clinical Decision-Making Guide",
      type: "guides",
      category: "Clinical Guide",
      date: "2023-10-05",
      description: "Practical clinical decision-making guide for diagnosing and treating shoulder impingement in athletes.",
      downloadUrl: "#",
      featured: false,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      tags: ["Shoulder", "Clinical Guide", "Decision Making"]
    },
    {
      id: 6,
      title: "Injury Prevention Strategies in Elite Sport",
      type: "research",
      category: "Research Publication",
      date: "2023-09-20",
      description: "Multi-sport analysis of injury prevention strategies and their effectiveness in elite sporting environments.",
      downloadUrl: "#",
      featured: false,
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      tags: ["Injury Prevention", "Elite Sport", "Research"]
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = activeFilter === 'all' || pub.type === activeFilter;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredPublications = publications.filter(pub => pub.featured);

  const getIcon = (type) => {
    switch (type) {
      case 'research': return FileText;
      case 'courses': return BookOpen;
      case 'articles': return FileText;
      case 'videos': return Video;
      case 'guides': return BookOpen;
      default: return FileText;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'research': return 'text-[#3398FF] bg-[#3398FF]';
      case 'courses': return 'text-[#8CC070] bg-[#8CC070]';
      case 'articles': return 'text-[#FAA95E] bg-[#FAA95E]';
      case 'videos': return 'text-[#3398FF] bg-[#3398FF]';
      case 'guides': return 'text-[#8CC070] bg-[#8CC070]';
      default: return 'text-[#898E96] bg-[#898E96]';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3398FF]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Publications & Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Access research papers, course materials, clinical guides, and educational 
              resources developed by Shaun for the sports medicine community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Publications */}
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
              Featured Publications
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Highlighted research and educational materials that showcase the latest 
              in evidence-based sports medicine practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getColor(pub.type).split(' ')[1]} bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {pub.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FAA95E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    {React.createElement(getIcon(pub.type), { 
                      className: `h-5 w-5 ${getColor(pub.type).split(' ')[0]}` 
                    })}
                    <span className="text-[#898E96] text-sm">
                      {new Date(pub.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#3398FF] mb-4">
                    {pub.title}
                  </h3>
                  <p className="text-[#898E96] mb-6 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-[#898E96] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className={`${getColor(pub.type).split(' ')[1]} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2`}>
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                    <button className="border-2 border-[#898E96] text-[#898E96] px-4 py-2 rounded-lg font-semibold hover:bg-[#898E96] hover:text-white transition-colors inline-flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
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
              All Resources
            </h2>
            <p className="text-[#898E96] text-xl max-w-3xl mx-auto">
              Browse our complete collection of research, educational materials, 
              and clinical resources.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#898E96] h-5 w-5" />
            <input
              type="text"
              placeholder="Search publications, courses, and resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3398FF] focus:border-transparent"
            />
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-[#3398FF] text-white'
                    : 'bg-white text-[#898E96] hover:bg-[#3398FF] hover:text-white'
                }`}
              >
                <Filter size={16} />
                <span>{category.name}</span>
                <span className="bg-black bg-opacity-20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getColor(pub.type).split(' ')[1]} bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {pub.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {React.createElement(getIcon(pub.type), { 
                      className: `h-4 w-4 ${getColor(pub.type).split(' ')[0]}` 
                    })}
                    <span className="text-[#898E96] text-sm">
                      {new Date(pub.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3398FF] mb-3 line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-[#898E96] text-sm mb-4 line-clamp-3">
                    {pub.description}
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <button className={`${getColor(pub.type).split(' ')[1]} text-white px-3 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity flex items-center space-x-1 flex-1`}>
                      <Download size={14} />
                      <span>Download</span>
                    </button>
                    <button className="border border-[#898E96] text-[#898E96] px-3 py-2 rounded text-sm font-semibold hover:bg-[#898E96] hover:text-white transition-colors flex items-center space-x-1">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-[#898E96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#898E96] mb-2">No resources found</h3>
              <p className="text-[#898E96]">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#3398FF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Subscribe to receive notifications about new publications, 
              research findings, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#8CC070]"
              />
              <button className="bg-[#8CC070] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7AB05F] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications;