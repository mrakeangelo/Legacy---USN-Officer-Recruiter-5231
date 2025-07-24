import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import NarrativeSection from '../components/NarrativeSection';
import OfficersGallery from '../components/OfficersGallery';
import ServiceGallery from '../components/ServiceGallery';
import AwardsSection from '../components/AwardsSection';
import MentorshipWall from '../components/MentorshipWall';
import PersonalSection from '../components/PersonalSection';
import TimeCapsule from '../components/TimeCapsule';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <HeroSection />
      <TimelineSection />
      <NarrativeSection />
      <OfficersGallery />
      <ServiceGallery />
      <AwardsSection />
      <MentorshipWall />
      <PersonalSection />
      <TimeCapsule />
      <Footer />
    </motion.div>
  );
};

export default Home;