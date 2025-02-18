// FeatureCards.jsx

import { motion } from "framer-motion";

const features = [
  {
    title: "Compete in Hackathons",
    description: "Team up with students from top colleges to solve real-world problems.",
    icon: "💡",
  },
  {
    title: "Network & Collaborate",
    description: "Connect with peers and mentors from across the country.",
    icon: "🤝",
  },
  {
    title: "Hands-on Learning",
    description: "Build real-world projects with expert guidance from Day 1.",
    icon: "🚀",
  },
  {
    title: "Industry Experience",
    description: "Gain practical experience through real industry projects and internship opportunities.",
    icon: "💼",
  }
];
const FeatureCards = () => {
  return (
    <div className="container px-4 py-20 mx-auto">
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 transition-all duration-300 bg-blue-800 border border-blue-600 shadow-lg group rounded-2xl hover:shadow-xl hover:shadow-blue-400/20"
          >
            <motion.div 
              className="mb-4 text-4xl text-blue-300 transition-colors duration-300 group-hover:text-blue-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-blue-100">{feature.title}</h3>
            <p className="mt-2 leading-relaxed text-blue-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
