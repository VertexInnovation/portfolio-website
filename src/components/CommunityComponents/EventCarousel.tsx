

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

const EventCarousel = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">
          Upcoming Events
        </h2>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {events.map((event, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  With {event.speaker} | {event.date} | {event.time}
                </p>
                <button className="px-4 py-2 mt-4 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-500">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
