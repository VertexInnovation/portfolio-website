import { motion } from 'framer-motion';
import { FEATURES_EXTENDED } from '../data/data';

const AboutSection = () => {
  return (
    <section className="container px-4 py-20 mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-900">About Vertex 🚀</h2>
        <p className="mb-12 text-xl text-gray-600">
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
              className="p-6 text-left bg-white shadow-lg rounded-xl"
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;