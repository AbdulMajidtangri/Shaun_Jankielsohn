import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, FileText, Video, ArrowRight, FileSearch, Clipboard, Layers, BarChart2, Award, Activity } from 'lucide-react';

const FeaturedResources = () => {
  const [activeTab, setActiveTab] = useState('research');
  
  const resources = {
    research: [
      {
        title: "ACL Rehabilitation in Professional Athletes",
        excerpt: "Evidence-based protocols for elite athlete recovery with 12-month follow-up data",
        type: "Research Paper",
        icon: <FileText className="text-[#3398FF]" size={20} />,
        color: "bg-[#3398FF]/10",
        year: 2023,
        downloads: "1.2K"
      },{ title: "Injury Prevention in Elite Sport",
        excerpt: "Multi-sport analysis of prevention strategies across 5 professional leagues",
        type: "Meta-Analysis",
        icon: <FileSearch className="text-[#3398FF]" size={20} />,
        color: "bg-[#3398FF]/10",
        year: 2022,
        downloads: "890"
      },
      {
        title: "Concussion Management Protocols",
        excerpt: "Updated guidelines for diagnosis and return-to-play decisions",
        type: "Clinical Study",
        icon: <Clipboard className="text-[#3398FF]" size={20} />,
        color: "bg-[#3398FF]/10",
        year: 2024,
        downloads: "750"
      }
    ],
    courses: [
      {
        title: "Advanced Biomechanical Assessment",
        excerpt: "CPD accredited course with practical lab components",
        type: "Course Syllabus",
        icon: <BookOpen className="text-[#8CC070]" size={20} />,
        color: "bg-[#8CC070]/10",
        duration: "8 weeks",
        students: "320+"
      },
      {
        title: "Sports Nutrition Certification",
        excerpt: "Fueling strategies for performance and recovery",
        type: "Online Course",
        icon: <Layers className="text-[#8CC070]" size={20} />,
        color: "bg-[#8CC070]/10",
        duration: "6 weeks",
        students: "450+"
      },
      {
        title: "Performance Data Analysis",
        excerpt: "Interpreting athlete metrics for clinical decisions",
        type: "Workshop Series",
        icon: <BarChart2 className="text-[#8CC070]" size={20} />,
        color: "bg-[#8CC070]/10",
        duration: "3 days",
        students: "180+"
      }
    ],
    videos: [
      {
        title: "Movement Analysis Fundamentals",
        excerpt: "Clinical movement assessment techniques with 3D examples",
        type: "Video Series",
        icon: <Video className="text-[#FAA95E]" size={20} />,
        color: "bg-[#FAA95E]/10",
        episodes: 12,
        duration: "4.5 hours"
      },
      {
        title: "Rehabilitation Masterclass",
        excerpt: "Step-by-step protocols for common sports injuries",
        type: "Tutorial Series",
        icon: <Activity className="text-[#FAA95E]" size={20} />,
        color: "bg-[#FAA95E]/10",
        episodes: 8,
        duration: "3.2 hours"
      },
      {
        title: "Case Study Breakdowns",
        excerpt: "Real-world examples with expert commentary",
        type: "Educational Series",
        icon: <Award className="text-[#FAA95E]" size={20} />,
        color: "bg-[#FAA95E]/10",
        episodes: 15,
        duration: "6 hours"
      }
    ],
    guides: [
      {
        title: "Shoulder Injury Clinical Guide",
        excerpt: "Diagnosis and treatment algorithms for practitioners",
        type: "Clinical Handbook",
        icon: <FileText className="text-[#9B51E0]" size={20} />,
        color: "bg-[#9B51E0]/10",
        pages: 48,
        updated: "Jan 2024"
      },
      {
        title: "Return-to-Sport Decision Making",
        excerpt: "Evidence-based criteria for 15 common injuries",
        type: "Practice Guide",
        icon: <Clipboard className="text-[#9B51E0]" size={20} />,
        color: "bg-[#9B51E0]/10",
        pages: 32,
        updated: "Nov 2023"
      },
      {
        title: "Youth Athlete Development",
        excerpt: "Age-appropriate training and injury prevention",
        type: "Coaching Manual",
        icon: <BookOpen className="text-[#9B51E0]" size={20} />,
        color: "bg-[#9B51E0]/10",
        pages: 64,
        updated: "Mar 2024"
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Evidence-Based <span className="text-[#3398FF]">Resources</span>
          </motion.h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            Access the latest research, courses, and clinical tools developed through years of elite sports medicine practice
          </p>
        </div>

{/* Interactive Tabs */}
<motion.div 
  className="flex justify-center mb-8"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
>
  <div className="inline-flex p-1 rounded-xl shadow-sm border border-white/30 backdrop-blur-lg bg-white/20">
    {Object.keys(resources).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-3 rounded-lg font-medium capitalize transition-colors ${
          activeTab === tab 
            ? 'bg-white/30 text-gray-900 backdrop-blur-md border border-white/40 shadow-md' 
            : 'text-gray-900 hover:bg-white/10'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</motion.div>

{/* Resource Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {resources[activeTab].map((resource, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-white/30 bg-white/20 backdrop-blur-lg"
    >
      <div className="p-6 h-full flex flex-col">
        <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
          {resource.icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3398FF] transition-colors">
          {resource.title}
        </h3>
        <p className="text-gray-900/80 mb-4">{resource.excerpt}</p>
        
        <div className="mt-4 mb-6 text-gray-900/80">
          {activeTab === 'research' && (
            <div className="flex space-x-4 text-sm">
              <span>Published: {resource.year}</span>
              <span>Downloads: {resource.downloads}</span>
            </div>
          )}
          {activeTab === 'courses' && (
            <div className="flex space-x-4 text-sm">
              <span>Duration: {resource.duration}</span>
              <span>Students: {resource.students}</span>
            </div>
          )}
          {activeTab === 'videos' && (
            <div className="flex space-x-4 text-sm">
              <span>Episodes: {resource.episodes}</span>
              <span>Total: {resource.duration}</span>
            </div>
          )}
          {activeTab === 'guides' && (
            <div className="flex space-x-4 text-sm">
              <span>Pages: {resource.pages}</span>
              <span>Updated: {resource.updated}</span>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/20">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 text-gray-900">
            {resource.type}
          </span>
          <button className="text-[#3398FF] flex items-center space-x-1 group-hover:underline">
            <span>View Details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/publications"
            className="inline-flex items-center px-8 py-4 bg-[#3398FF] text-white rounded-lg font-semibold hover:bg-[#2D87E0] transition-colors"
          >
            <BookOpen className="mr-2" size={20} />
            Explore All 24+ Resources
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedResources;