import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCamera, FiMusic, FiMapPin, FiSun } = FiIcons;

const personalData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Family Time',
    description: 'Spending quality time with loved ones during shore leave'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Ocean Adventures',
    description: 'Finding peace and inspiration by the sea'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Fitness & Wellness',
    description: 'Maintaining physical and mental readiness'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'Travel & Culture',
    description: 'Exploring new places and broadening perspectives'
  }
];

const PersonalSection = () => {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-rose-500">
          <SafeIcon icon={FiHeart} className="text-8xl animate-float" />
        </div>
        <div className="absolute bottom-20 right-20 text-brass-500">
          <SafeIcon icon={FiSun} className="text-6xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond the Uniform
          </h2>
          <div className="w-24 h-1 bg-rose-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            The woman behind the officer - balancing service with life, leadership with love
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-navy-800 rounded-lg p-8 shadow-2xl border border-rose-500/20">
              <div className="flex items-center gap-3 mb-6">
                <SafeIcon icon={FiHeart} className="text-2xl text-rose-400" />
                <h3 className="font-merriweather text-2xl font-bold text-white">Life in Balance</h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Behind every uniform is a person with dreams, passions, and a life beyond service. 
                  For LCDR Bennett, maintaining that balance has been key to her success as both a leader and a person.
                </p>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Whether she's exploring new destinations during leave, maintaining her fitness routine, 
                  or simply enjoying quiet moments with family, she understands that taking care of herself 
                  enables her to better serve others.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  "You can't pour from an empty cup," she often tells her mentees. "Taking time to recharge 
                  and pursue your passions doesn't make you less dedicated - it makes you more effective."
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: FiCamera, label: 'Photography' },
                  { icon: FiMusic, label: 'Music' },
                  { icon: FiMapPin, label: 'Travel' },
                  { icon: FiSun, label: 'Fitness' }
                ].map((interest, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <SafeIcon icon={interest.icon} className="text-brass-400" />
                    <span className="text-sm">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {personalData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-merriweather text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-xs">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-lg p-8 shadow-2xl border border-brass-500/20">
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-rose-300 mb-6 leading-relaxed">
              "The best leaders are whole people - they bring their full selves to their service, 
              and that authenticity inspires others to do the same."
            </blockquote>
            <div className="w-16 h-1 bg-rose-gradient mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSection;