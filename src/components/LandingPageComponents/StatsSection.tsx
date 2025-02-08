import { motion } from 'framer-motion';
import { STATS } from '../data/data';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;