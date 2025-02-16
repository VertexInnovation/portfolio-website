import { motion } from 'framer-motion';
import { FEATURES } from '../data/data';

const FeaturesSection = () => {
  return (
    <section className="container px-4 py-20 mx-auto">
      <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
      Endless Possibilities Await in Vertex
      </h2>
      <div className="grid gap-8 mx-auto md:grid-cols-3 max-w-7xl">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-2xl">
              <feature.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;