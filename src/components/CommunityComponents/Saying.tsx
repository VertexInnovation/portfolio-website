import { Variants, motion } from "framer-motion";
import { Quote } from "lucide-react";
import Monish from '../../assets/team/studentHeads/monish.jpg';
import Ramana from '../../assets/team/studentHeads/ramana.jpg';
import Subadevan from '../../assets/team/studentHeads/subadevan.jpg';
import alwin from '../../assets/team/alwin.jpg';
const testimonials = [
  {
    id: 1,
    content:
      "Being a part of the Vertex community allowed us to connect with innovators across the globe. We successfully collaborated with a tech startup for our AI project. It’s the perfect blend of learning and networking!",
    author: "Monish",
    role: "Core Member CSED",
    avatarUrl: Monish,
  },
  {
    id: 2,
    content:
      "Vertex transformed the way we approach student engagement. The interactive learning sessions and networking events helped our club members connect with industry leaders and like-minded peers.",
    author: "Ramana Sree",
    role: "Vice President, IBMz Club",
    avatarUrl: Ramana,
  },
  {
    id: 3,
    content:
      "I joined Vertex as a Student Ambassador and can’t believe how many talented individuals I’ve met. The platform is a goldmine for building a dream project team!",
    author: "subadevean",
    role: "Student Ambassador, Vertex",
    avatarUrl: Subadevan,
  },
  {
    id: 4,
    content:
      "The Blackbox AI Ambassadors team used Vertex to host workshops on machine learning, and it was a huge success! The platform made it easy to connect with students who share our passion for AI innovation.",
    author: "alwin",
    role: "Lead, Blackbox AI Ambassadors",
    avatarUrl: alwin,
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
    <div className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-transparent text-white md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400">
          Don't Rely on Our Claims Alone
        </h2>
        <p className="mb-12 text-lg text-center text-gray-300">
          Explore Feedback from Our Valued Community Members
        </p>

        {/* Testimonials Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            variants={scrollVariants}
            animate="animate"
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                className="min-w-[380px] md:min-w-[450px] bg-gradient-to-br from-gray-800 via-blue-900/40 to-blue-900/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03, rotate: 1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Avatar + Name */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="object-cover w-16 h-16 rounded-full ring-4 ring-blue-600/20"
                    />
                    <div className="absolute p-1.5 bg-blue-600 rounded-full -bottom-2 -right-2">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                    <p className="text-sm text-blue-300">{testimonial.role}</p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <Quote className="absolute w-10 h-10 text-blue-400/20 -top-2 -left-2" />
                  <p className="relative z-10 pl-4 text-lg leading-relaxed text-gray-200">
                    {testimonial.content}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-end mt-6">
                  <div className="flex -space-x-3">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border-2 border-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-900"
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
