import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiSearch, FiGraduationCap, FiStar } = FiIcons;

const officersData = [
  {
    id: 1,
    name: 'ENS Sarah Mitchell',
    source: 'OCS',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1594736797933-d0b22e6e8db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'LCDR Bennett saw potential in me when I couldn\'t see it myself.',
    designation: 'SWO'
  },
  {
    id: 2,
    name: 'ENS Marcus Rodriguez',
    source: 'NROTC',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'Her mentorship changed my entire perspective on leadership.',
    designation: 'NFO'
  },
  {
    id: 3,
    name: 'LTJG Amanda Chen',
    source: 'USNA',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'She didn\'t just recruit me - she prepared me for command.',
    designation: 'PILOT'
  },
  {
    id: 4,
    name: 'ENS David Thompson',
    source: 'OCS',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'Her guidance helped me navigate the commissioning process.',
    designation: 'SWO'
  },
  {
    id: 5,
    name: 'ENS Lisa Park',
    source: 'NROTC',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'She believed in me before I believed in myself.',
    designation: 'INTEL'
  },
  {
    id: 6,
    name: 'ENS James Wilson',
    source: 'OCS',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    testimonial: 'Her mentorship continues to guide me as a new officer.',
    designation: 'SWO'
  }
];

const OfficersGallery = () => {
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfficers = officersData.filter(officer => {
    const matchesFilter = filter === 'ALL' || officer.source === filter;
    const matchesSearch = officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         officer.testimonial.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23e7b3a5%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0%2011.046-8.954%2020-20%2020v-40c11.046%200%2020%208.954%2020%2020zM0%2020c0-11.046%208.954-20%2020-20v40c-11.046%200-20-8.954-20-20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Commissioned Officers Gallery
          </h2>
          <div className="w-24 h-1 bg-rose-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            The next generation of Naval leaders, shaped by mentorship and dedication
          </p>
        </motion.div>

        {/* Filter and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center"
        >
          <div className="flex items-center gap-2 bg-navy-800 rounded-lg p-2">
            <SafeIcon icon={FiFilter} className="text-brass-400" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent text-white font-medium px-3 py-1 outline-none"
            >
              <option value="ALL">All Sources</option>
              <option value="OCS">OCS</option>
              <option value="NROTC">NROTC</option>
              <option value="USNA">USNA</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2 bg-navy-800 rounded-lg p-2">
            <SafeIcon icon={FiSearch} className="text-brass-400" />
            <input
              type="text"
              placeholder="Search officers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 px-3 py-1 outline-none"
            />
          </div>
        </motion.div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOfficers.map((officer, index) => (
            <motion.div
              key={officer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-navy-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-brass-500/20 hover:border-brass-500/40"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={officer.image} 
                  alt={officer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brass-gradient text-navy-900 px-3 py-1 rounded-full text-xs font-bold">
                      {officer.source}
                    </span>
                    <span className="bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-xs font-bold">
                      {officer.designation}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <SafeIcon icon={FiStar} className="text-brass-400" />
                  <h3 className="font-merriweather text-xl font-bold text-white">{officer.name}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">Class of {officer.year}</p>
                
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{officer.testimonial}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOfficers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <SafeIcon icon={FiGraduationCap} className="text-6xl text-gray-500 mb-4 mx-auto" />
            <p className="text-gray-400 text-lg">No officers found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OfficersGallery;