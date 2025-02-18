import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: "IBM Design Thinking Workshop",
    speaker: "Ajinkya Bhagwat",
    date: "Nov 11, 2021",
    time: "8:30 PM",
    image: "/images/events/product-design.jpg",
  },
  {
    title: "Validating Your Startup Idea",
    speaker: "Vatsal Kanakiya",
    date: "Nov 12, 2021",
    time: "7:00 PM",
    image: "/images/events/startup-idea.jpg",
  },
  {
    title: "Lifecycle of a Product",
    speaker: "Anchit Shukla",
    date: "Nov 13, 2021",
    time: "8:30 PM",
    image: "/images/events/product-lifecycle.jpg",
  },
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
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
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
                  className="overflow-hidden transition-all duration-300 transform bg-white shadow-xl rounded-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{event.title}</h3>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.speaker}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/20"
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
            className="absolute left-0 p-2 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 -left-4 lg:-left-8 hover:shadow-xl hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 p-2 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 -right-4 lg:-right-8 hover:shadow-xl hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
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
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
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