import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';

export const LiveEventsContent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [liveEvents, setLiveEvents] = useState(eventsData.liveEvents);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Live Events</h1>
        <p>Join these events happening right now!</p>
      </div>
      
      {liveEvents.length === 0 ? (
        <motion.div 
          className="empty-events"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="empty-state">
            <i className="fas fa-broadcast-tower empty-icon"></i>
            <h2>No Live Events</h2>
            <p>There are currently no live events. Please check back later or explore our upcoming events.</p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="events-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {liveEvents.map(event => (
            <motion.div key={event.id} variants={item}>
              <EventCard
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                imageUrl={event.imageUrl}
                actionLink={event.registrationLink}
                actionText="Register Now"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LiveEventsContent;