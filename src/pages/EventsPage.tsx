import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';
import verteximg from '../assets/vertexhacks.jpeg';
const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Vertex Innovate 2025 - Global Hackathon',
      date: '2025-02-15',
      time: '48 hours starting Feb 15',
      location: 'Online (Hosted on Unstop)',
      image: verteximg,
      category: 'Hackathon',
      attendees: 362,
      shortDescription: 'A 48-hour global hackathon featuring AI/ML, Cybersecurity, Sustainability, EdTech, FinTech & Open Innovation tracks. Open to all students!',
      status: 'upcoming'
    }
  ];

  interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    category: string;
    attendees: number;
    shortDescription: string;
    status: 'upcoming' | 'past';
  }
  
  const EventCard = ({ event }: { event: Event }) => {
    const isPast = event.status === 'past';
    
    return (
      <div className={`group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-2xl ${isPast ? 'opacity-90' : ''}`}>
        <div className="absolute z-10 top-4 right-4">
          <span className={`px-4 py-1 text-sm font-medium rounded-full ${
            isPast ? 'bg-gray-600 text-gray-300' : 'bg-blue-600 text-white'
          }`}>
            {event.category}
          </span>
        </div>
        
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-2xl font-bold text-white">{event.title}</h3>
          <p className="mb-4 text-gray-300">{event.shortDescription}</p>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <Calendar size={18} className="mr-2" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <Clock size={18} className="mr-2" />
              <span>{event.time}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <MapPin size={18} className="mr-2" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center text-gray-300">
              <Users size={18} className="mr-2" />
              <span>{event.attendees} Attendees</span>
            </div>
          </div>

          <Link 
            to={`/events/${event.id}`}
            className="inline-flex items-center w-full px-6 py-3 mt-6 font-medium text-center text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            View Details
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="container px-4 py-16 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-300">
            Join us for exciting events that shape the future of technology
          </p>
        </div>

        {/* Event Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button className="px-6 py-2 text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
            All Events
          </button>
          <button className="px-6 py-2 text-gray-300 transition-all duration-300 rounded-full hover:bg-white/10">
            Conferences
          </button>
          <button className="px-6 py-2 text-gray-300 transition-all duration-300 rounded-full hover:bg-white/10">
            Workshops
          </button>
          <button className="px-6 py-2 text-gray-300 transition-all duration-300 rounded-full hover:bg-white/10">
            Networking
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;