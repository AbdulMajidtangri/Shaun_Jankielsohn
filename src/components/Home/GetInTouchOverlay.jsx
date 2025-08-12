import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/router';

const GetInTouchOverlay = () => {
  const router = useRouter();

  const handleClick = () => {
    // Scroll to contact section if on home page, or navigate to contact page
    if (window.location.pathname === '/') {
      router.push('/#contact');
    } else {
      router.push('/contact');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-[#3398FF] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
      >
        <Mail size={24} />
        <span className="ml-2 font-semibold">Get in Touch</span>
      </motion.button>
    </div>
  );
};

export default GetInTouchOverlay;