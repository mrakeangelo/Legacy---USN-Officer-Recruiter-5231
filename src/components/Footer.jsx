import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiStar, FiShield } = FiIcons;

const quotes = [
  "Great leaders build better leaders.",
  "Her impact will be felt for generations.",
  "Leadership isn't taught. It's passed down.",
  "Service before self, always."
];

const Footer = () => {
  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Background Anchor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <SafeIcon icon={FiAnchor} className="text-9xl text-brass-500" />
      </div>

      {/* Quote Carousel */}
      <div className="py-16 border-b border-brass-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-rose-300 mb-6">
              "{quotes[currentQuote]}"
            </blockquote>
            <div className="flex justify-center gap-2">
              {quotes.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-brass-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Legacy Section */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <SafeIcon icon={FiStar} className="text-2xl text-brass-400" />
                <h3 className="font-merriweather text-xl font-bold text-white">Legacy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A distinguished career of service, leadership, and mentorship that continues to inspire 
                future generations of Naval officers.
              </p>
            </div>

            {/* Service Section */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <SafeIcon icon={FiShield} className="text-2xl text-brass-400" />
                <h3 className="font-merriweather text-xl font-bold text-white">Service</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>12 Years of Distinguished Service</p>
                <p>247 Officers Commissioned</p>
                <p>Top 1% Recruiter Nationwide</p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <SafeIcon icon={FiHeart} className="text-2xl text-brass-400" />
                <h3 className="font-merriweather text-xl font-bold text-white">Connect</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                This tribute site celebrates a life of service and the lasting impact of exceptional leadership.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-brass-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brass-gradient rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiAnchor} className="text-sm text-navy-900" />
                </div>
                <span className="text-gray-300 text-sm">
                  LT Commander Jessica M. Bennett, USN
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© 2024 Naval Legacy Tribute</span>
                <div className="flex items-center gap-1">
                  <span>Crafted with</span>
                  <SafeIcon icon={FiHeart} className="text-rose-400 text-xs" />
                  <span>by Mrake Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-brass-gradient"></div>
    </footer>
  );
};

export default Footer;