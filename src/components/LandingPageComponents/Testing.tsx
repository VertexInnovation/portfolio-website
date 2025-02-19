import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Testing = () => {
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
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen px-4 py-24 overflow-hidden text-gray-200 place-content-center bg-gray-950"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl text-3xl font-medium leading-tight text-center text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Where Tech Meets<span className="text-transparent transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text hover:from-purple-600 hover:via-blue-600 hover:to-purple-600">
              {' '}
              Entertainment
            </span>
          
        </h1>
        <p className="max-w-xl my-6 text-base leading-relaxed text-center md:text-lg md:leading-relaxed">
        Connect with students across colleges, participate in hackathons, and unlock exciting opportunities - all while having fun!
        </p>
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
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Join Us Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
