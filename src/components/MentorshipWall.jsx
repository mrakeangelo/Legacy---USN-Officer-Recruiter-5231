import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMessageCircle, FiUser, FiPlus, FiSend } = FiIcons;

const mentorshipData = [
  {
    id: 1,
    name: 'LCDR Sarah Johnson',
    role: 'Former Mentee, Now SWO',
    image: 'https://images.unsplash.com/photo-1594736797933-d0b22e6e8db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    message: 'LCDR Bennett didn\'t just recruit me - she shaped my entire understanding of what it means to be a Naval officer. Her mentorship continues to guide me in my current command.',
    date: '2024-01-15',
    type: 'mentee'
  },
  {
    id: 2,
    name: 'CDR Michael Torres',
    role: 'Commanding Officer, NRD San Diego',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    message: 'Jessica exemplifies everything we want in a Naval officer and recruiter. Her dedication to developing future leaders is unmatched, and her impact will be felt for generations.',
    date: '2024-02-01',
    type: 'peer'
  },
  {
    id: 3,
    name: 'ENS Marcus Chen',
    role: 'Recent OCS Graduate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    message: 'When I was struggling with self-doubt during the application process, LCDR Bennett reminded me that leadership isn\'t about being perfect - it\'s about being present for your people.',
    date: '2024-01-28',
    type: 'mentee'
  },
  {
    id: 4,
    name: 'CAPT Jennifer Walsh',
    role: 'Former Mentor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    message: 'I had the privilege of mentoring Jessica early in her career. Watching her grow into the leader she is today has been one of my greatest joys. She embodies the best of our Navy.',
    date: '2024-02-10',
    type: 'mentor'
  }
];

const MentorshipWall = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    type: 'mentee'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit to Supabase
    console.log('Submitting message:', formData);
    setShowForm(false);
    setFormData({ name: '', role: '', message: '', type: 'mentee' });
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'mentee': return 'bg-blue-500/20 text-blue-300';
      case 'peer': return 'bg-brass-500/20 text-brass-300';
      case 'mentor': return 'bg-rose-500/20 text-rose-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-rose-500">
          <SafeIcon icon={FiHeart} className="text-8xl animate-float" />
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
            Mentorship Legacy Wall
          </h2>
          <div className="w-24 h-1 bg-rose-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Words from those whose lives have been touched by exceptional leadership and mentorship
          </p>
        </motion.div>

        {/* Add Message Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-rose-gradient hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center gap-2">
              <SafeIcon icon={FiPlus} className="text-lg" />
              Share Your Message
            </span>
          </button>
        </motion.div>

        {/* Message Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto bg-navy-800 rounded-lg p-6 shadow-xl border border-rose-500/20">
              <h3 className="font-merriweather text-xl font-bold text-white mb-4">Share Your Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-navy-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Role/Position"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="bg-navy-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors"
                    required
                  />
                </div>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="bg-navy-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors w-full"
                >
                  <option value="mentee">Mentee</option>
                  <option value="peer">Peer/Colleague</option>
                  <option value="mentor">Mentor</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="bg-navy-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors w-full resize-none"
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-rose-gradient hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <SafeIcon icon={FiSend} className="text-sm" />
                    Submit Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mentorshipData.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-800 rounded-lg p-6 shadow-xl border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={message.image} 
                  alt={message.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-rose-500/30"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-merriweather text-lg font-bold text-white">{message.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(message.type)}`}>
                      {message.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{message.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{new Date(message.date).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="relative">
                <SafeIcon icon={FiMessageCircle} className="absolute -top-2 -left-2 text-rose-500/30 text-xl" />
                <blockquote className="text-gray-300 italic leading-relaxed pl-6">
                  "{message.message}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-800 rounded-lg p-8 border border-rose-500/20">
            <SafeIcon icon={FiHeart} className="text-4xl text-rose-400 mb-4 mx-auto" />
            <h3 className="font-merriweather text-2xl font-bold text-white mb-4">
              Legacy of Leadership
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Every message on this wall represents a life touched, a career shaped, and a leader developed. 
              This is the true measure of service - not just what you accomplish, but who you inspire to carry on the mission.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipWall;