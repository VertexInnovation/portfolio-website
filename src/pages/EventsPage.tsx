import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../api/firebase/route";
import { useState, useEffect } from "react";
import EventCarousel from "../components/CommunityComponents/EventCarousel";
import "../App.tsx";
import { ArrowRight } from "lucide-react";
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
      <div className="relative overflow-hidden transition-all duration-300 border group backdrop-blur-md rounded-2xl hover:shadow-2xl border-gray-800/50">
        <div className="absolute z-10 top-4 right-4">
          <span className="px-4 py-1 text-sm font-medium text-white rounded-full bg-blue-600/80 backdrop-blur-sm">
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
        <div className="p-6 backdrop-blur-sm bg-gray-950/30">
          <h3 className="mb-3 text-2xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">{event.title}</h3>
          <p className="mb-4 text-gray-300">{event.description}</p>
          <div className="space-y-2">
            {/* Event details remain the same */}
            {/* ... */}
          </div>
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center w-full px-6 py-3 mt-6 font-medium text-center text-white transition-all duration-500 rounded-lg bg-blue-600/80 hover:bg-blue-700 backdrop-blur-sm group"
          >
            View Details
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:-rotate-45" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      style={{
        backgroundImage: "radial-gradient(125% 125% at 50% 0%, #020617 50%, #1E67C6)",
      }}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      
      <div className="container relative z-10 px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text md:text-5xl">
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
    </motion.div>
  );
};
export default EventsPage;