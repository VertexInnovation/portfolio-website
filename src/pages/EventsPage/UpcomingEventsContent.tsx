import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';

export const UpcomingEventsContent: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(eventsData.upcomingEvents);

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
        <h1>Upcoming Events</h1>
        <p>Register now for these exciting upcoming events!</p>
      </div>
      
      {upcomingEvents.length === 0 ? (
        <motion.div 
          className="empty-events"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="empty-state">
            <i className="far fa-calendar-alt empty-icon"></i>
            <h2>No Upcoming Events</h2>
            <p>There are no upcoming events scheduled at this time. Please check back later.</p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="events-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {upcomingEvents.map(event => (
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

export default UpcomingEventsContent;