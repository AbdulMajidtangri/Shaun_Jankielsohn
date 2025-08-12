import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#3398FF] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="text-lg mb-8">
          Whether you're an athlete looking to get back to peak performance or a medical professional seeking quality CPD courses — Shaun is here to help.
        </p>
        <Link
          to="/contact"
          className="bg-[#8CC070] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7AB05F] transition-colors"
        >
          Contact Me Today
        </Link>
      </motion.div>
    </section>
  );
};
export default CTASection;
