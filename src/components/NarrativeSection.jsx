import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiQuote, FiHeart, FiCompass } = FiIcons;

const NarrativeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-brass-500 opacity-10">
        <SafeIcon icon={FiCompass} className="text-8xl animate-float" />
      </div>
      <div className="absolute bottom-10 right-10 text-rose-500 opacity-10">
        <SafeIcon icon={FiHeart} className="text-6xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Why I Recruit Officers
          </h2>
          <div className="w-24 h-1 bg-rose-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            In her own words - the passion behind the mission
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 text-brass-500 opacity-30">
              <SafeIcon icon={FiQuote} className="text-6xl" />
            </div>
            <div className="bg-navy-700 rounded-lg p-8 shadow-2xl border border-brass-500/20">
              <blockquote className="font-playfair text-2xl italic text-rose-300 mb-6 leading-relaxed">
                "I see tomorrow's leaders before they do."
              </blockquote>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Every morning, I wake up knowing that somewhere out there is a young person who doesn't yet realize 
                  they have what it takes to lead sailors, to command respect, to make decisions that matter. 
                  My job isn't just recruitment—it's recognition.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I've watched college graduates transform from uncertain candidates into confident officers who 
                  inspire their crews. I've seen the moment when someone realizes they're not just joining the Navy—
                  they're becoming part of something greater than themselves.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This isn't about numbers or quotas. It's about legacy. Every officer I help commission becomes 
                  a link in an unbroken chain of leadership that stretches back to the founding of our Navy. 
                  That's not just a job—that's a calling.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Navy Officer in dress uniform"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-inter text-sm text-gray-300 italic">
                  "The greatest honor is not in commanding others, but in inspiring them to become leaders themselves."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '247', label: 'Officers Commissioned', color: 'text-brass-400' },
            { number: '12', label: 'Years of Service', color: 'text-rose-400' },
            { number: '98%', label: 'Success Rate', color: 'text-blue-400' },
            { number: '1st', label: 'District Ranking', color: 'text-purple-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-cinzel text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NarrativeSection;