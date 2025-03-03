import { motion } from 'framer-motion';
import { FEATURES } from '../data/data';

const FeaturesSection = () => {
  return (
    <section className="w-full px-0 py-12 text-gray-200 max-h-fit bg-gray-950">
      <div className="mx-auto mb-16 text-center max-w-7xl max-h-fit">
      <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
        Endless Possibilities Await in Vertex
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 border border-gray-800 shadow-lg bg-gray-950/50 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-6 border border-gray-800 bg-gray-900/50 rounded-xl">
          <feature.icon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="mb-3 text-xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
          {feature.title}
          </h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FeaturesSection;