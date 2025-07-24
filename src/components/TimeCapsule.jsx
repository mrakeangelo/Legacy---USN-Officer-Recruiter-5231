import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiClock, FiHeart, FiStar, FiUsers, FiUnlock } = FiIcons;

const timeCapsuleData = [
  {
    id: 1,
    title: 'To My Future Self',
    description: 'A letter to the woman I hope to become',
    unlockDate: '2030-01-01',
    icon: FiHeart,
    color: 'from-rose-500 to-rose-600',
    preview: 'Dear Future Jessica, I hope you\'re reading this as an Admiral...'
  },
  {
    id: 2,
    title: 'To My Mentees',
    description: 'Words of wisdom for future Naval officers',
    unlockDate: '2025-12-31',
    icon: FiStar,
    color: 'from-brass-500 to-brass-600',
    preview: 'To every officer I\'ve had the privilege to guide...'
  },
  {
    id: 3,
    title: 'To My Family',
    description: 'A message of love and gratitude',
    unlockDate: '2027-05-15',
    icon: FiUsers,
    color: 'from-blue-500 to-blue-600',
    preview: 'To those who supported me through every deployment...'
  }
];

const TimeCapsule = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const isUnlocked = (unlockDate) => {
    return new Date() >= new Date(unlockDate);
  };

  const getTimeRemaining = (unlockDate) => {
    const now = new Date();
    const target = new Date(unlockDate);
    const difference = target - now;
    
    if (difference <= 0) return 'Unlocked!';
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;
    
    if (years > 0) {
      return `${years}y ${months}m ${remainingDays}d`;
    } else if (months > 0) {
      return `${months}m ${remainingDays}d`;
    } else {
      return `${remainingDays}d`;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-brass-500">
          <SafeIcon icon={FiClock} className="text-8xl animate-float" />
        </div>
        <div className="absolute bottom-20 right-20 text-rose-500">
          <SafeIcon icon={FiLock} className="text-6xl animate-float" style={{ animationDelay: '2s' }} />
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
            Time Capsule Letters
          </h2>
          <div className="w-24 h-1 bg-brass-gradient mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Sealed messages from the heart, waiting for their moment to inspire
          </p>
        </motion.div>

        {/* Time Capsules Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {timeCapsuleData.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`bg-navy-800 rounded-lg p-6 shadow-2xl border-2 transition-all duration-300 ${
                isUnlocked(capsule.unlockDate) 
                  ? 'border-green-500/50 hover:border-green-500/80' 
                  : 'border-brass-500/30 hover:border-brass-500/60'
              }`}>
                {/* Lock/Unlock Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${capsule.color} flex items-center justify-center`}>
                    <SafeIcon icon={capsule.icon} className="text-xl text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <SafeIcon 
                      icon={isUnlocked(capsule.unlockDate) ? FiUnlock : FiLock} 
                      className={`text-lg ${isUnlocked(capsule.unlockDate) ? 'text-green-400' : 'text-brass-400'}`} 
                    />
                    <span className={`text-sm font-semibold ${
                      isUnlocked(capsule.unlockDate) ? 'text-green-400' : 'text-brass-400'
                    }`}>
                      {isUnlocked(capsule.unlockDate) ? 'UNLOCKED' : 'SEALED'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-merriweather text-xl font-bold text-white mb-2">{capsule.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{capsule.description}</p>
                
                {/* Countdown */}
                <div className="bg-navy-700 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Unlock Date:</span>
                    <span className="text-white text-xs font-medium">
                      {new Date(capsule.unlockDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-400 text-xs">Time Remaining:</span>
                    <span className={`text-xs font-bold ${
                      isUnlocked(capsule.unlockDate) ? 'text-green-400' : 'text-brass-400'
                    }`}>
                      {getTimeRemaining(capsule.unlockDate)}
                    </span>
                  </div>
                </div>

                {/* Preview/Read Button */}
                <button
                  onClick={() => setSelectedCapsule(capsule)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isUnlocked(capsule.unlockDate)
                      ? 'bg-green-gradient hover:bg-green-600 text-white'
                      : 'bg-brass-500/20 hover:bg-brass-500/30 text-brass-300'
                  }`}
                >
                  {isUnlocked(capsule.unlockDate) ? 'Read Letter' : 'Preview'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedCapsule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCapsule(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-navy-800 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-brass-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedCapsule.color} flex items-center justify-center`}>
                    <SafeIcon icon={selectedCapsule.icon} className="text-lg text-white" />
                  </div>
                  <h3 className="font-merriweather text-2xl font-bold text-white">{selectedCapsule.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCapsule(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiLock} className="text-xl" />
                </button>
              </div>

              {isUnlocked(selectedCapsule.unlockDate) ? (
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {selectedCapsule.preview}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As I write this letter, I'm filled with hope for what the future holds. 
                    The journey has been challenging, but every obstacle has been an opportunity to grow stronger.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I hope that when you read this, you'll remember the dreams that drove you, 
                    the people who supported you, and the impact you've had on others. 
                    The legacy isn't just what you've accomplished - it's who you've inspired to carry on.
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <SafeIcon icon={FiLock} className="text-6xl text-brass-400 mb-4 mx-auto" />
                  <p className="text-gray-300 mb-4">This letter is still sealed.</p>
                  <p className="text-gray-400 text-sm">
                    Preview: "{selectedCapsule.preview}"
                  </p>
                  <div className="mt-6 bg-navy-700 rounded-lg p-4">
                    <p className="text-brass-400 font-semibold mb-2">
                      Unlocks in: {getTimeRemaining(selectedCapsule.unlockDate)}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {new Date(selectedCapsule.unlockDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-navy-800 rounded-lg p-8 shadow-2xl border border-brass-500/20">
            <SafeIcon icon={FiClock} className="text-4xl text-brass-400 mb-4 mx-auto" />
            <blockquote className="font-playfair text-2xl md:text-3xl italic text-rose-300 mb-6 leading-relaxed">
              "Time capsules aren't just about preserving the past - they're about planting seeds of hope for the future."
            </blockquote>
            <div className="w-16 h-1 bg-brass-gradient mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeCapsule;