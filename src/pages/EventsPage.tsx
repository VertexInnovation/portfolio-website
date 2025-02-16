import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight, Users } from "lucide-react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../api/firebase/route";
import { useState, useEffect } from "react";
import EventCarousel from "../components/CommunityComponents/EventCarousel";
import "../App.tsx";
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
interface FirebaseTimestamp {
  seconds: number;
  nanoseconds: number;
  toDate: () => Date;
}
interface ScheduleItem {
  time: FirebaseTimestamp | string;
  title: string;
  description: string;
}
interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  img_src: string;
  category: string;
  attendees: number;
  description: string;
  status: "upcoming" | "past";
  Schedule: ScheduleItem[];
  speakers: Speaker[];
}
const EventsPage = () => {
  const [eventsDetail, setEventsDetail] = useState<Event[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "events"));
        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[]; // Type assertion for TypeScript
        setEventsDetail(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  const EventCard = ({ event }: { event: Event }) => {
    return (
      <div className="relative overflow-hidden transition-all duration-300 group bg-white/5 backdrop-blur-md rounded-2xl hover:shadow-2xl">
        <div className="absolute z-10 top-4 right-4">
          <span className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
            {event?.category}
          </span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={event.img_src}
            alt={event.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="mb-3 text-2xl font-bold text-white">{event.title}</h3>
          <p className="mb-4 text-gray-300">{event.description}</p>
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <Calendar size={18} className="mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-300">
  <Clock size={18} className="mr-2" />
  <span>
    {new Date(event.time).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </span>
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
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Events
          </h1>
          <p className="text-xl text-gray-300">
            Join us for exciting events that shape the future of technology
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsDetail.length > 0 ? (
            eventsDetail.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-300">No events found.</p>
          )}
        </div>
      </div>
      <EventCarousel />
    </div>
  );
};
export default EventsPage;