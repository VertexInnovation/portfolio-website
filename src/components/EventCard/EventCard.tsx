import React from 'react';
import './EventCard.css';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  actionLink?: string;
  actionText?: string;
  isPast?: boolean;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  imageUrl,
  actionLink,
  actionText = "Register Now",
  isPast = false,
}) => {
  return (
    <div className={`event-card ${isPast ? 'past-event' : ''}`}>
      <div className="event-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="event-card-content">
        <h3>{title}</h3>
        <div className="event-details">
          <p className="event-date"><i className="far fa-calendar-alt"></i> {date}</p>
          <p className="event-location"><i className="fas fa-map-marker-alt"></i> {location}</p>
        </div>
        <p className="event-description">{description}</p>
        {actionLink && (
          <a href={actionLink} className="event-action-button" target="_blank" rel="noopener noreferrer">
            {actionText}
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;