import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiAnchor } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Floating Anchor */}
      <motion.div
        className="absolute top-20 right-10 text-brass-500 opacity-30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <SafeIcon icon={FiAnchor} className="text-6xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            LT Commander
            <span className="block text-brass-400 mt-2">Jessica M. Bennett</span>
          </h1>
          <div className="w-32 h-1 bg-brass-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl md:text-2xl text-gray-200 mb-4">
            U.S. Navy Officer Programs Recruiter
          </p>
          <p className="font-inter text-lg text-gray-300 mb-8">
            12 Years of Distinguished Service • 2012-2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <blockquote className="font-playfair text-2xl md:text-3xl italic text-rose-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Leadership isn't taught. It's passed down."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="group bg-brass-gradient hover:bg-brass-600 text-navy-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <span className="flex items-center gap-2">
              Explore Her Commanding Legacy
              <SafeIcon icon={FiChevronDown} className="text-lg group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <SafeIcon icon={FiChevronDown} className="text-2xl text-brass-400" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brass-gradient"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-brass-gradient"></div>
    </section>
  );
};

export default HeroSection;