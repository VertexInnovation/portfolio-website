

const testimonials = [
  {
    name: "Ayush Mittal",
    text: "I met the CTO for my startup in this community. The network you build here is invaluable!",
    image: "/images/testimonials/ayush.jpg",
  },
  {
    name: "Mahaprasad Mohanty",
    text: "Studying doesn’t have to be lonely. The study group gave me the motivation I needed.",
    image: "/images/testimonials/mahaprasad.jpg",
  },
  {
    name: "Karthik N.",
    text: "I learned about pitching ideas and got valuable feedback that helped me grow.",
    image: "/images/testimonials/karthik.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Hear from the Community
        </h2>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-gray-100 rounded-lg p-6 shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
              />
              <p className="italic text-gray-600">"{testimonial.text}"</p>
              <h3 className="mt-4 font-bold text-gray-800">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
