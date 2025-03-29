import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventCard.css';

type EventCardProps = {
  id?: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  actionLink?: string;
  actionText?: string;
  isPast?: boolean;
  hideButtons?: boolean; // New prop to hide buttons
};

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  location,
  description,
  imageUrl,
  actionLink,
  actionText = "Register Now",
  isPast = false,
  hideButtons = false, // Default is to show buttons
}) => {
  return (
    <div className={`event-card ${isPast ? 'past-event' : ''}`}>
      <div className="event-card-image">
        <img src={imageUrl} alt={title} />
        {!isPast && (
          <motion.div 
            className={`event-badge ${isPast ? '' : (actionText === 'Register Now' ? 'live' : 'upcoming')}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isPast ? 'PAST' : (actionText === 'Register Now' ? 'LIVE' : 'UPCOMING')}
          </motion.div>
        )}
      </div>
      <div className="event-card-content">
        <h3>
          {id ? (
            <Link to={`/events/${id}`} className="event-title-link">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <div className="event-details">
          <p className="event-date">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </p>
          <p className="event-location">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
        </div>
        <p className="event-description">{description}</p>
        
        {/* Only render buttons if hideButtons is false */}
        {!hideButtons && (
          <div className="event-actions">
            {id && (
              <Link to={`/events/${id}`} className="event-details-button">
                View Details
              </Link>
            )}
            {actionLink && (
              <a href={actionLink} className="event-action-button" target="_blank" rel="noopener noreferrer">
                {actionText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;