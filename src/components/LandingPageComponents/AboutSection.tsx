import { motion } from 'framer-motion';
import { FEATURES_EXTENDED } from '../data/data';

const AboutSection = () => {
  return (
    <motion.section className="relative grid min-h-screen px-4 py-24 overflow-hidden text-gray-200 place-content-center bg-gray-950">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
      <h2 className="mb-8 text-4xl font-bold text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
        About Vertex 🚀
      </h2>
      <p className="mb-12 text-xl text-gray-400">
        Vertex is an EdTech entertainment platform that connects students across colleges, 
        fosters collaboration, and bridges academia with industry—all while making learning 
        fun and interactive!
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {FEATURES_EXTENDED.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 text-left border border-gray-800 bg-gray-950/50 backdrop-blur-sm rounded-xl"
        >
          <h3 className="mb-4 text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          {feature.title}
          </h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;