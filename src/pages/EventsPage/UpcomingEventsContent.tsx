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
        <p>Don't miss out on our exciting events!</p>
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
        <>
          {/* Live Events Section */}
          {upcomingEvents.some(event => event.live) && (
            <div className="mb-10">
              <h2 className="mb-5 text-2xl font-semibold text-white">
                <span className="inline-flex items-center">
                  <span className="mr-2 live-dot"></span>
                  Happening Now
                </span>
              </h2>
              <motion.div 
                className="events-grid"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {upcomingEvents
                  .filter(event => event.live)
                  .map(event => (
                    <motion.div key={event.id} variants={item}>
                      <EventCard
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                        description={event.description}
                        imageUrl={event.imageUrl}
                        actionLink={event.registrationLink}
                        actionText="Join Now"
                        isLive={true}
                      />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          )}

          {/* Regular Upcoming Events */}
          {upcomingEvents.some(event => !event.live) && (
            <div>
              {upcomingEvents.some(event => event.live) && (
                <h2 className="mb-5 text-2xl font-semibold text-white">Coming Soon</h2>
              )}
              <motion.div 
                className="events-grid"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {upcomingEvents
                  .filter(event => !event.live)
                  .map(event => (
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
                        isLive={false}
                      />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UpcomingEventsContent;