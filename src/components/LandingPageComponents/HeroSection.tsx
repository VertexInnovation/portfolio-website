import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="container flex items-center justify-center min-h-screen px-4 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center"
            >
                <motion.h1 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-6xl font-extrabold text-gray-900"
                >
                    Where Tech Meets
                    <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-purple-600 hover:to-blue-600">
                        {' '}Entertainment
                    </span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-2xl mx-auto mb-10 text-2xl text-gray-600"
                >
                    Connect with students across colleges, participate in hackathons, and unlock exciting opportunities - all while having fun!
                </motion.p>
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all transform bg-blue-600 rounded-xl hover:bg-blue-700 hover:scale-105">
                        <Rocket className="w-6 h-6" />
                        Join Us Now
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;