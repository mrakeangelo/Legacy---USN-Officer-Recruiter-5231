import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiAward, FiUsers, FiTrendingUp } = FiIcons;

const timelineData = [
  {
    year: '2012',
    title: 'Naval Officer Candidate School',
    description: 'Commissioned as Ensign (O-1) through OCS Newport, RI',
    icon: FiStar,
    type: 'commissioning'
  },
  {
    year: '2013',
    title: 'First Division Officer Tour',
    description: 'USS Arleigh Burke (DDG-51) - Surface Warfare Officer',
    icon: FiUsers,
    type: 'service'
  },
  {
    year: '2015',
    title: 'Promotion to Lieutenant (O-3)',
    description: 'Advanced to Lieutenant with exceptional fitness reports',
    icon: FiTrendingUp,
    type: 'promotion'
  },
  {
    year: '2018',
    title: 'Naval Recruiting Command',
    description: 'Assigned to Officer Programs - San Diego District',
    icon: FiUsers,
    type: 'recruiting'
  },
  {
    year: '2020',
    title: 'Navy Achievement Medal',
    description: 'Outstanding performance in officer recruitment',
    icon: FiAward,
    type: 'award'
  },
  {
    year: '2022',
    title: 'Promotion to LT Commander',
    description: 'Advanced to O-4 with stellar recruiting record',
    icon: FiTrendingUp,
    type: 'promotion'
  },
  {
    year: '2024',
    title: 'Recruiting Excellence Award',
    description: 'Top 1% of Navy Officer Recruiters nationwide',
    icon: FiAward,
    type: 'award'
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-navy-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Officer Career Timeline
          </h2>
          <div className="w-24 h-1 bg-brass-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            A distinguished journey of service, leadership, and dedication to building tomorrow's Naval officers
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brass-gradient rounded-full"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brass-gradient rounded-full flex items-center justify-center z-10 shadow-lg">
                <SafeIcon icon={item.icon} className="text-2xl text-navy-900" />
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-navy-700 rounded-lg p-6 shadow-xl border border-brass-500/20 hover:border-brass-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-cinzel text-2xl font-bold text-brass-400">{item.year}</span>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'commissioning' ? 'bg-rose-500/20 text-rose-300' :
                      item.type === 'promotion' ? 'bg-brass-500/20 text-brass-300' :
                      item.type === 'award' ? 'bg-purple-500/20 text-purple-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {item.type.toUpperCase()}
                    </div>
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;