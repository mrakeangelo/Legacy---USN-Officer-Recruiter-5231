import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiTrendingUp, FiTarget, FiShield } = FiIcons;

const awardsData = [
  {
    id: 1,
    name: 'Navy Achievement Medal',
    description: 'Outstanding performance in officer recruitment and mentorship',
    year: '2020',
    icon: FiAward,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Navy Commendation Medal',
    description: 'Exceptional leadership in recruiting operations',
    year: '2022',
    icon: FiStar,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 3,
    name: 'Recruiting Excellence Award',
    description: 'Top 1% of Navy Officer Recruiters nationwide',
    year: '2024',
    icon: FiTarget,
    color: 'from-brass-500 to-brass-600'
  },
  {
    id: 4,
    name: 'Surface Warfare Officer',
    description: 'Qualified Surface Warfare Officer designation',
    year: '2014',
    icon: FiShield,
    color: 'from-rose-500 to-rose-600'
  }
];

const rankData = [
  { rank: 'Ensign (O-1)', year: '2012', insignia: '●' },
  { rank: 'Lieutenant JG (O-2)', year: '2014', insignia: '●●' },
  { rank: 'Lieutenant (O-3)', year: '2015', insignia: '●●●' },
  { rank: 'LT Commander (O-4)', year: '2022', insignia: '●●●●' }
];

const AwardsSection = () => {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-brass-500">
          <SafeIcon icon={FiStar} className="text-8xl animate-float" />
        </div>
        <div className="absolute bottom-20 right-20 text-rose-500">
          <SafeIcon icon={FiAward} className="text-6xl animate-float" style={{ animationDelay: '2s' }} />
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
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-brass-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Distinguished service recognized through excellence in leadership and dedication
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Awards Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-merriweather text-2xl font-bold text-white mb-8 text-center lg:text-left"
            >
              Military Honors
            </motion.h3>
            
            <div className="grid gap-6">
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-navy-800 rounded-lg p-6 shadow-xl border border-brass-500/20 hover:border-brass-500/40 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center group-hover:animate-glow transition-all duration-300`}>
                      <SafeIcon icon={award.icon} className="text-xl text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-merriweather text-lg font-bold text-white">{award.name}</h4>
                        <span className="bg-brass-500/20 text-brass-300 px-2 py-1 rounded-full text-xs font-semibold">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rank Progression */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-merriweather text-2xl font-bold text-white mb-8 text-center lg:text-left"
            >
              Rank Progression
            </motion.h3>
            
            <div className="relative">
              {/* Progression Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-brass-gradient rounded-full"></div>
              
              {rankData.map((rank, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center gap-6 mb-8"
                >
                  {/* Rank Node */}
                  <div className="w-16 h-16 bg-brass-gradient rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-navy-900 font-bold text-lg">{rank.insignia}</span>
                  </div>
                  
                  {/* Rank Info */}
                  <div className="bg-navy-800 rounded-lg p-4 flex-1 shadow-xl border border-brass-500/20">
                    <div className="flex items-center justify-between">
                      <h4 className="font-merriweather text-lg font-bold text-white">{rank.rank}</h4>
                      <span className="text-brass-400 font-semibold">{rank.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-navy-800 rounded-lg p-8 border border-brass-500/20"
        >
          <h3 className="font-merriweather text-2xl font-bold text-white mb-8 text-center">
            Career Achievements
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4', label: 'Major Awards', icon: FiAward },
              { number: '12', label: 'Years Service', icon: FiStar },
              { number: '247', label: 'Officers Recruited', icon: FiTrendingUp },
              { number: '98%', label: 'Success Rate', icon: FiTarget }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <SafeIcon icon={stat.icon} className="text-3xl text-brass-400 mb-3 mx-auto" />
                <div className="font-cinzel text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;