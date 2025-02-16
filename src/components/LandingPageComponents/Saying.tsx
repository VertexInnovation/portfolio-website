import { Variants, motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Vertex has been a game-changer for our club activities. Through the platform, we organized a hackathon with industry experts, and the response was overwhelming. The collaboration opportunities here are endless!",
    author: "Neha Sharma",
    role: "President, CSED Club",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 2,
    content:
      "Being a part of the Vertex community allowed us to connect with innovators across the globe. We successfully collaborated with a tech startup for our AI project. It’s the perfect blend of learning and networking!",
    author: "Monish",
    role: "Core Member, Blackbox AI Ambassadors",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 3,
    content:
      "Vertex transformed the way we approach student engagement. The interactive learning sessions and networking events helped our club members connect with industry leaders and like-minded peers.",
    author: "Ramana Sree",
    role: "Vice President, IBMz Club",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 4,
    content:
      "I found my first internship opportunity through a Vertex-hosted event. The platform bridges the gap between students and companies like no other. Highly recommend it to anyone serious about career growth!",
    author: "Ankit Gupta",
    role: "Student Ambassador, Vertex",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 5,
    content:
      "Thanks to Vertex, we got the chance to collaborate with an EdTech startup for one of our social entrepreneurship programs. The network we built here is still helping us make an impact!",
    author: "Imran",
    role: "Core Member, CSED Club",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 6,
    content:
      "Vertex-inspired hackathons literally elevated our IBMz Club’s visibility. We partnered with industry mentors who guided us in building projects that later won accolades. Such a unique platform!",
    author: "Karan Mehta",
    role: "Secretary, IBMz Club",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 7,
    content:
      "I joined Vertex as a Student Ambassador and can’t believe how many talented individuals I’ve met. The platform is a goldmine for building a dream project team!",
    author: "Ritika Singh",
    role: "Student Ambassador, Vertex",
    avatarUrl: "/api/placeholder/100/100",
  },
  {
    id: 8,
    content:
      "The Blackbox AI Ambassadors team used Vertex to host workshops on machine learning, and it was a huge success! The platform made it easy to connect with students who share our passion for AI innovation.",
    author: "Arjun Patel",
    role: "Lead, Blackbox AI Ambassadors",
    avatarUrl: "/api/placeholder/100/100",
  },
];


const scrollVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const, // Ensure proper type
      duration: 10,
      ease: "linear",
    },
  },
};


const Saying = () => {
  return (
    <div className="w-full px-4 py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Don’t Rely on Our Claims Alone
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Explore Feedback from Our Valued Community
        </p>

        {/* Testimonials Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            variants={scrollVariants}
            animate="animate"
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                {/* Avatar + Name */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                    <div className="absolute p-1 bg-purple-500 rounded-full -bottom-2 -right-2">
                      <Quote className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <Quote className="absolute w-8 h-8 text-purple-100 -top-2 -left-2" />
                  <p className="relative z-10 pl-4 text-gray-700">
                    {testimonial.content}
                  </p>
                </div>

                {/* Decorative Gradient Icons */}
                <div className="flex justify-end mt-4">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 border-2 border-white rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Saying;
