import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const NewsletterSection = () => {
  const color = useMotionValue(COLORS[0]);

  React.useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.div className="relative overflow-hidden bg-gray-950">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
            Join Our Newsletter
          </h3>
          <p className="mb-8 text-lg text-gray-300/80">
            Stay updated with the latest events, hackathons, and opportunities!
          </p>
          <div className="flex flex-col justify-center max-w-lg gap-4 mx-auto sm:flex-row">
            <motion.input
              type="email"
              placeholder="Enter your email"
              style={{ border }}
              className="flex-grow px-4 py-3 text-gray-200 rounded-full bg-gray-950/50 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none"
            />
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group flex items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 whitespace-nowrap"
            >
              Subscribe Now
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
