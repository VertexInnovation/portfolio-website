import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import comingsoon from '../../assets/team/ComingSoon.jpg';
const events = [
  {
    title: "Coming Soon",
    speaker: "Coming Soon",
    date: "Coming Soon",
    time: "Coming Soon",
    image: comingsoon,
  }
];

// Event Carousel Component
const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 3
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= events.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? events.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12 text-4xl font-bold text-center text-white"
      >
        Upcoming Events
      </motion.h2>

      <div className="relative">
        <motion.div 
        className="flex transition-all duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerPage.lg)}%)`
        }}
        >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="overflow-hidden transition-all duration-300 transform bg-gray-900 border border-gray-800 shadow-xl rounded-2xl"
          >
            <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            
            <div className="p-6">
            <h3 className="mb-3 text-xl font-bold text-white">{event.title}</h3>
            <div className="mb-4 space-y-2">
              <div className="flex items-center text-gray-400">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.speaker}</span>
              </div>
              <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{event.time}</span>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl hover:shadow-lg hover:shadow-blue-500/20"
            >
              Register Now
            </motion.button>
            </div>
          </motion.div>
          ))}
        </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute p-2 transition-all duration-300 -translate-y-1/2 bg-gray-800 rounded-full shadow-lg top-1/2 -left-4 lg:-left-8 hover:shadow-xl hover:bg-gray-700"
        >
        <ChevronLeft className="w-6 h-6 text-gray-200" />
        </motion.button>

        <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute p-2 transition-all duration-300 -translate-y-1/2 bg-gray-800 rounded-full shadow-lg top-1/2 -right-4 lg:-right-8 hover:shadow-xl hover:bg-gray-700"
        >
        <ChevronRight className="w-6 h-6 text-gray-200" />
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(events.length / itemsPerPage.lg) }).map((_, i) => (
          <motion.button
          key={i}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setCurrentIndex(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === currentIndex 
            ? 'bg-blue-500 w-4' 
            : 'bg-gray-600 hover:bg-gray-500'
          }`}
          />
        ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default EventCarousel;