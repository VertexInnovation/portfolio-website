import React, { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import eventsData from '../../data/EventsData.json';

export const PastEventsContent: React.FC = () => {
  const [pastEvents, setPastEvents] = useState(eventsData.pastEvents);

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Past Events</h1>
        <p>Explore recordings and resources from our previous events.</p>
      </div>
      
      {pastEvents.length === 0 ? (
        <div className="empty-events">
          <div className="empty-state">
            <i className="fas fa-history empty-icon"></i>
            <h2>No Past Events</h2>
            <p>There are no past events in our records yet.</p>
          </div>
        </div>
      ) : (
        <div className="events-grid">
          {pastEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              imageUrl={event.imageUrl}
              actionLink={event.recordingLink}
              actionText="Watch Recording"
              isPast={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PastEventsContent;