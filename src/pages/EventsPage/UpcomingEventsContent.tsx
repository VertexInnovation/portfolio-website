import React, { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';

export const UpcomingEventsContent: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(eventsData.upcomingEvents);

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p>Register now for these exciting upcoming events!</p>
      </div>
      
      {upcomingEvents.length === 0 ? (
        <div className="empty-events">
          <div className="empty-state">
            <i className="far fa-calendar-alt empty-icon"></i>
            <h2>No Upcoming Events</h2>
            <p>There are no upcoming events scheduled at this time. Please check back later.</p>
          </div>
        </div>
      ) : (
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              imageUrl={event.imageUrl}
              actionLink={event.registrationLink}
              actionText="Register Now"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsContent;