import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import verteximg from "../assets/vertexHack.jpg";
import { useState, useEffect } from "react";
import srinivasan from "../assets/srinivas.jpg";
import { firebaseConfig } from "../api/firebase/route.js";
import { doc, onSnapshot } from "firebase/firestore";
// import { getDoc, collection, query } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
// import { Timestamp } from "firebase/firestore";

// Firestore Timestamp interface
interface FirebaseTimestamp {
  seconds: number;
  nanoseconds: number;
  toDate: () => Date; // Method to convert Firestore Timestamp to JavaScript Date object
}

// Interface for Schedule items
interface ScheduleItem {
  time: FirebaseTimestamp | string; // Firestore Timestamp or string date
  title: string;
  description: string;
}

// Interface for Event speakers
interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

// Main Event interface
interface Event {
  id: string;
  title: string;
  date: string; // Firestore Timestamp or string format
  time: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  description: string;
  status: "upcoming" | "past";
  Schedule: ScheduleItem[];
  speakers: Speaker[];
}

const EventDetail = () => {
  const [eventDetail, setEventDetail] = useState<Event | null>(null);
  const eventid = useParams<{ id: string }>().id;

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  function convertTimestampToDate(seconds: number, nanoseconds: number): Date {
    const milliseconds = seconds * 1000 + nanoseconds / 1000000;
    return new Date(milliseconds);
  }

  useEffect(() => {
    const e = onSnapshot(doc(firestore, "events", eventid), (docsSnapshot) => {
      setEventDetail(docsSnapshot.data());
      const date = eventDetail.Schedule.end.date;
      console.log(eventDetail);
    });

    return () => e();
  }, []);

  const event = {
    id: eventid,
    title: eventDetail?.title,
    date: eventDetail?.date,
    time: "48 Hour Event",
    location: eventDetail?.location,
    image: eventDetail?.img_src,
    category: eventDetail?.category,
    attendees: eventDetail?.attendees, // Will be updated based on registrations
    description: eventDetail?.description,
    Schedule: [
      {
        time: convertTimestampToDate(
          eventDetail?.Schedule?.Deadline?.date?.seconds,
          eventDetail?.Schedule?.Deadline?.date?.nanoseconds
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        title: eventDetail?.Schedule?.Deadline?.title,
        description: eventDetail?.Schedule?.Deadline?.detail,
      },
      {
        time: convertTimestampToDate(
          eventDetail?.Schedule?.start?.date?.seconds,
          eventDetail?.Schedule?.start?.date?.nanoseconds
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        title: eventDetail?.Schedule?.start?.title,
        description: eventDetail?.Schedule?.start?.detail,
      },
      {
        time: convertTimestampToDate(
          eventDetail?.Schedule?.end?.date?.seconds,
          eventDetail?.Schedule?.end?.date?.nanoseconds
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        title: eventDetail?.Schedule?.end?.title,
        description: eventDetail?.Schedule?.end?.detail,
      },
    ],
    speakers: [
      {
        name: eventDetail?.speaker?.name,
        role: eventDetail?.speaker?.role,
        company: eventDetail?.speaker?.designation,
        image: srinivasan,
      },
    ],
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
              <h2 className="mb-4 text-2xl font-bold text-white">
                About the Event
              </h2>
              <p className="mb-6 leading-relaxed text-gray-300 whitespace-pre-line">
                {event.description}
              </p>

              <h2 className="mb-4 text-2xl font-bold text-white">Schedule</h2>
              <div className="space-y-4">
                {event.Schedule.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 transition-all duration-300 bg-white/5 rounded-xl hover:bg-white/10"
                  >
                    <div className="mb-2 text-blue-400">{item.time}</div>
                    <h3 className="mb-1 font-medium text-white">
                      {item.title}
                    </h3>
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
              <a
                href="https://unstop.com/hackathons/vertex-innovate-2025-vellore-institute-of-technology-chennai-1368491?lb=VNLKayJQ&utm_medium=Share&utm_source=shortUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full px-6 py-3 mb-4 font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
                  Register Now
                </button>
              </a>

              <div className="flex gap-4">
                <button
                  onClick={() => alert("Coming soon!")}
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
