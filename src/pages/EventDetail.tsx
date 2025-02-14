import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import verteximg from '../assets/vertexHack.jpg';
import srinivasan from '../assets/srinivas.jpg';
const EventDetail = () => {


  // Mock event data - replace with actual data fetching
  const event = {
    id: 1,
    title: '',
    date: '2025-02-15',
    time: '48 Hour Event',
    location: 'Online (Hosted on Unstop)',
    image: verteximg,
    category: 'Hackathon',
    attendees: 300+Math.floor(Math.random() * 100), // Will be updated based on registrations
    description: `Join us for Vertex Innovate 2025, a 48-hour online hackathon where creativity meets technology! This global event brings together undergraduate & postgraduate students to innovate and create impactful solutions.

    🔹 Form teams of 1-4 members across colleges & specializations
    🔹 Compete in cutting-edge tracks:
      - AI/ML
      - Cybersecurity
      - Sustainability
      - EdTech
      - FinTech
      - Open Innovation
    
    Gain expert mentorship, win exciting prizes, and achieve global recognition!`,
    schedule: [
      {
        time: 'Feb 10, 2025',
        title: 'Registration Deadline',
        description: 'Last date to register your team'
      },
      {
        time: 'Feb 15, 2025',
        title: 'Hackathon Begins',
        description: 'Opening ceremony and problem statement release'
      },
      {
        time: 'Feb 17, 2025',
        title: 'Project Submission',
        description: 'Final submissions and closing ceremony'
      }
    ],
    speakers: [
      {
        name: 'Srinivasan JV',
        role: 'IBM Champion',
        company: 'Senior Architect in Wells Fargo',
        image: srinivasan
      }
    ]
  };

  interface Speaker {
    name: string;
    role: string;
    company: string;
    image: string;
  }

  const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
    <div className="flex items-center p-4 space-x-4 transition-all duration-300 bg-white/5 rounded-xl hover:bg-white/10">
      <img 
        src={speaker.image} 
        alt={speaker.name}
        className="object-cover w-16 h-16 rounded-full"
      />
      <div>
        <h4 className="font-medium text-white">{speaker.name}</h4>
        <p className="text-sm text-gray-300">{speaker.role}</p>
        <p className="text-sm text-blue-400">{speaker.company}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="container px-4 py-16 mx-auto">
        {/* Back Button */}
        <Link 
          to="/events" 
          className="inline-flex items-center px-4 py-2 mb-8 text-white transition-all duration-300 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-medium">Back to Events</span>
        </Link>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src={event.image} 
            alt={event.title}
            className="object-cover w-full h-64 md:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-blue-600 rounded-full">
              {event.category}
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {event.title}
            </h1>
            
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Clock size={20} className="mr-2" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="mr-2" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Users size={20} className="mr-2" />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 mt-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl">
              <h2 className="mb-4 text-2xl font-bold text-white">About the Event</h2>
              <p className="mb-6 leading-relaxed text-gray-300 whitespace-pre-line">
                {event.description}
              </p>
              
              <h2 className="mb-4 text-2xl font-bold text-white">Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="p-4 transition-all duration-300 bg-white/5 rounded-xl hover:bg-white/10">
                    <div className="mb-2 text-blue-400">{item.time}</div>
                    <h3 className="mb-1 font-medium text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl">
              <a href="https://unstop.com/hackathons/vertex-innovate-2025-vellore-institute-of-technology-chennai-1368491?lb=VNLKayJQ&utm_medium=Share&utm_source=shortUrl" target="_blank" rel="noopener noreferrer">
              <button className="w-full px-6 py-3 mb-4 font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
                Register Now
              </button>
              </a>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => alert('Coming soon!')}
                  className="flex items-center justify-center w-full px-4 py-2 text-gray-300 transition-all duration-300 border border-gray-600 rounded-lg hover:bg-white/5"
                >
                  Submit Project
                </button>
              </div>
            </div>

            {/* Speakers */}
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl">
              <h2 className="mb-4 text-xl font-bold text-white">Speakers</h2>
              <div className="space-y-4">
                {event.speakers.map((speaker, index) => (
                  <SpeakerCard key={index} speaker={speaker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;