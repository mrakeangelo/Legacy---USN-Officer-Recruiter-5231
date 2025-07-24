import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiEdit, FiPlus, FiSave, FiTrash2, FiImage, FiCalendar, FiUsers } = FiIcons;

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('timeline');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, this would authenticate with Supabase
    if (loginData.email === 'admin@navy.mil' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-navy-800 rounded-lg p-8 shadow-2xl border border-brass-500/20 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brass-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="text-2xl text-navy-900" />
            </div>
            <h1 className="font-cinzel text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-300">Secure portal for site management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-navy-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-brass-500 transition-colors"
                  placeholder="admin@navy.mil"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-navy-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-brass-500 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brass-gradient hover:bg-brass-600 text-navy-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Demo credentials: admin@navy.mil / admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <div className="bg-navy-800 border-b border-brass-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brass-gradient rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="text-lg text-navy-900" />
              </div>
              <div>
                <h1 className="font-cinzel text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-300 text-sm">Tribute Site Management</p>
              </div>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-navy-800 border-b border-brass-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'timeline', label: 'Timeline', icon: FiCalendar },
              { id: 'gallery', label: 'Gallery', icon: FiImage },
              { id: 'officers', label: 'Officers', icon: FiUsers },
              { id: 'messages', label: 'Messages', icon: FiEdit }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-brass-400 text-brass-400'
                    : 'border-transparent text-gray-300 hover:text-white'
                }`}
              >
                <SafeIcon icon={tab.icon} className="text-lg" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'timeline' && <TimelineManager />}
        {activeTab === 'gallery' && <GalleryManager />}
        {activeTab === 'officers' && <OfficersManager />}
        {activeTab === 'messages' && <MessagesManager />}
      </div>
    </div>
  );
};

// Timeline Manager Component
const TimelineManager = () => {
  const [items, setItems] = useState([
    { id: 1, year: '2012', title: 'Naval Officer Candidate School', description: 'Commissioned as Ensign', type: 'commissioning' },
    { id: 2, year: '2015', title: 'Promotion to Lieutenant', description: 'Advanced to O-3', type: 'promotion' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-merriweather text-2xl font-bold text-white">Timeline Management</h2>
        <button className="bg-brass-gradient text-navy-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <SafeIcon icon={FiPlus} />
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-navy-800 rounded-lg p-6 border border-brass-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="bg-brass-500/20 text-brass-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.year}
                </span>
                <h3 className="font-merriweather text-lg font-bold text-white">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-400 hover:text-blue-300 p-2">
                  <SafeIcon icon={FiEdit} />
                </button>
                <button className="text-red-400 hover:text-red-300 p-2">
                  <SafeIcon icon={FiTrash2} />
                </button>
              </div>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Gallery Manager Component
const GalleryManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-merriweather text-2xl font-bold text-white">Gallery Management</h2>
        <button className="bg-brass-gradient text-navy-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <SafeIcon icon={FiPlus} />
          Upload Media
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-navy-800 rounded-lg overflow-hidden border border-brass-500/20">
            <div className="h-48 bg-navy-700 flex items-center justify-center">
              <SafeIcon icon={FiImage} className="text-4xl text-gray-500" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white mb-2">Gallery Item {item}</h3>
              <div className="flex items-center gap-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm">Edit</button>
                <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Officers Manager Component
const OfficersManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-merriweather text-2xl font-bold text-white">Officers Management</h2>
        <button className="bg-brass-gradient text-navy-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <SafeIcon icon={FiPlus} />
          Add Officer
        </button>
      </div>

      <div className="bg-navy-800 rounded-lg overflow-hidden border border-brass-500/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-navy-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {['ENS Sarah Mitchell', 'ENS Marcus Rodriguez', 'LTJG Amanda Chen'].map((name, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-white">{name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">OCS</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <SafeIcon icon={FiEdit} />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <SafeIcon icon={FiTrash2} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Messages Manager Component
const MessagesManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-merriweather text-2xl font-bold text-white">Messages Management</h2>
        <div className="flex items-center gap-2">
          <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
            3 Pending Approval
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { name: 'ENS John Smith', message: 'Thank you for your guidance...', status: 'pending' },
          { name: 'LCDR Jane Doe', message: 'Your mentorship changed my career...', status: 'approved' },
          { name: 'CDR Mike Johnson', message: 'Outstanding leadership example...', status: 'approved' }
        ].map((msg, index) => (
          <div key={index} className="bg-navy-800 rounded-lg p-6 border border-brass-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="font-medium text-white">{msg.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  msg.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'
                }`}>
                  {msg.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {msg.status === 'pending' && (
                  <>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                      Approve
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
            <p className="text-gray-300">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;