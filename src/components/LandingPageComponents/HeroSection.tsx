import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container px-4 py-16 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          Where Tech Meets
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            {' '}Entertainment
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          Connect with students across colleges, participate in hackathons, and unlock exciting opportunities - all while having fun!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700">
            <Rocket className="w-5 h-5" />
            Join Us Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;