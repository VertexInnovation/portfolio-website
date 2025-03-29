import React, { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';

export const LiveEventsContent: React.FC = () => {
  const [liveEvents, setLiveEvents] = useState(eventsData.liveEvents);

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Live Events</h1>
        <p>Join these events happening right now!</p>
      </div>
      
      {liveEvents.length === 0 ? (
        <div className="empty-events">
          <div className="empty-state">
            <i className="fas fa-broadcast-tower empty-icon"></i>
            <h2>No Live Events</h2>
            <p>There are currently no live events. Please check back later or explore our upcoming events.</p>
          </div>
        </div>
      ) : (
        <div className="events-grid">
          {liveEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              imageUrl={event.imageUrl}
              actionLink={event.registrationLink}
              actionText="Join Now"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveEventsContent;