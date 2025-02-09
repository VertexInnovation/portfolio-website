import { motion } from 'framer-motion';
import { STATS } from '../data/data';

const StatsSection = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute rounded-full w-96 h-96 bg-white/20 -top-20 -left-20 blur-3xl"></div>
                <div className="absolute rounded-full w-96 h-96 bg-white/20 -bottom-20 -right-20 blur-3xl"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid gap-8 md:grid-cols-4">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 } 
                            }}
                            className="p-8 transition-colors border bg-white/10 rounded-2xl backdrop-blur-lg border-white/10 hover:border-white/20"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                className="mb-4 text-5xl font-bold text-white"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-lg font-medium text-white/90">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;