import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LiveEventsContent from './LiveEventsContent';
import UpcomingEventsContent from './UpcomingEventsContent';
import PastEventsContent from './PastEventsContent';
import './EventsPage.css';

type EventsTab = 'live' | 'upcoming' | 'past';

export const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<EventsTab>('live');

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
  }, [location.pathname]);

  const handleTabChange = (tab: EventsTab) => {
    setActiveTab(tab);
    navigate(`/events/${tab}`);
  };

  // Always render the tabbed layout, along with the appropriate content
  return (
    <div className="events-page">
      <div className="events-tabs">
        <button 
          className={`events-tab ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => handleTabChange('live')}
        >
          Live Events
        </button>
        <button 
          className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleTabChange('upcoming')}
        >
          Upcoming Events
        </button>
        <button 
          className={`events-tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => handleTabChange('past')}
        >
          Past Events
        </button>
      </div>

      <div className="events-content">
        {activeTab === 'live' && <LiveEventsContent />}
        {activeTab === 'upcoming' && <UpcomingEventsContent />}
        {activeTab === 'past' && <PastEventsContent />}
      </div>
    </div>
  );
};

export default EventsPage;