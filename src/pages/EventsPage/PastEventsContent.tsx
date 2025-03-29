import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';


export const PastEventsContent: React.FC = () => {
  const [pastEvents, setPastEvents] = useState(eventsData.pastEvents);

  

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
        <h1>Past Events</h1>
        <p>Explore recordings and resources from our previous events.</p>
      </div>
      
      {pastEvents.length === 0 ? (
        <motion.div 
          className="empty-events"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="empty-state">
            <i className="fas fa-history empty-icon"></i>
            <h2>No Past Events</h2>
            <p>There are no past events in our records yet.</p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="events-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {pastEvents.map(event => (
            <motion.div key={event.id} variants={item}>
              <EventCard
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                imageUrl={event.imageUrl}
                isPast={true}
                hideButtons={true}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PastEventsContent;

