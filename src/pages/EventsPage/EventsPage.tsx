import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import LiveEventsContent from './LiveEventsContent';
import UpcomingEventsContent from './UpcomingEventsContent';
import PastEventsContent from './PastEventsContent';
import './EventsPage.css';

type EventsTab = 'live' | 'upcoming' | 'past';

export const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<EventsTab>('live');
  const [isLoading, setIsLoading] = useState(true);

  // Set the active tab based on the current route when component mounts
  useEffect(() => {
    if (location.pathname.includes('/events/live')) {
      setActiveTab('live');
    } else if (location.pathname.includes('/events/upcoming')) {
      setActiveTab('upcoming');
    } else if (location.pathname.includes('/events/past')) {
      setActiveTab('past');
    } else if (location.pathname === '/events') {
      // Default to live events when on the main events page
      setActiveTab('live');
    }
    
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleTabChange = (tab: EventsTab) => {
    setActiveTab(tab);
    navigate(`/events/${tab}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden events-page-wrapper">
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} depth={50} count={2500} factor={4} fade speed={1} />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 events-page">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="events-page-header"
        >
          <h1 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl">
            Vertex <span className="text-blue-400">Events</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-center text-gray-300">
            Join our community events to learn, connect, and grow with fellow developers and tech enthusiasts.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="events-tabs-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="events-tabs">
            <button 
              className={`events-tab ${activeTab === 'live' ? 'active' : ''}`}
              onClick={() => handleTabChange('live')}
            >
              <div className="flex items-center justify-center w-full">
                <span className={`tab-indicator ${activeTab === 'live' ? 'live-indicator' : ''}`}></span>
                <span>Live Events</span>
              </div>
            </button>
            <button 
              className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => handleTabChange('upcoming')}
            >
              <div className="flex items-center justify-center w-full">
                <span className={`tab-indicator ${activeTab === 'upcoming' ? 'upcoming-indicator' : ''}`}></span>
                <span>Upcoming Events</span>
              </div>
            </button>
            <button 
              className={`events-tab ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => handleTabChange('past')}
            >
              <div className="flex items-center justify-center w-full">
                <span className={`tab-indicator ${activeTab === 'past' ? 'past-indicator' : ''}`}></span>
                <span>Past Events</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-20"
            >
              <div className="loader">
                <div className="loader-inner"></div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="events-content"
            >
              {activeTab === 'live' && <LiveEventsContent />}
              {activeTab === 'upcoming' && <UpcomingEventsContent />}
              {activeTab === 'past' && <PastEventsContent />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsPage;