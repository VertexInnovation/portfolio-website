import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { STATS } from '../data/data';
import { useEffect } from 'react';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const StatsSection = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative py-24 overflow-hidden text-gray-200 bg-gray-950"
        >
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
                                scale: 1.015,
                            }}
                            style={{
                                border,
                            }}
                            className="p-8 transition-colors rounded-2xl backdrop-blur-lg bg-gray-950/10 hover:bg-gray-950/50"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-lg font-medium text-gray-200">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default StatsSection;