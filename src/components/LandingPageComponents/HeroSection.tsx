import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface ParticleProps {
  x: number;
  y: number;
  mouseX: number | null;
  mouseY: number | null;
}

const Particle = ({ x, y, mouseX, mouseY }: ParticleProps) => {
  const controls = useAnimation();

  const distance = useMemo(() => {
    if (mouseX === null || mouseY === null) return 0;
    return Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
  }, [x, y, mouseX, mouseY]);

  const color = useMemo(() => {
    const maxDistance = 200;
    const intensity = Math.max(0, 1 - distance / maxDistance);
    return `rgba(96, 165, 250, ${intensity * 0.5})`;
  }, [distance]);

  useEffect(() => {
    if (mouseX === null || mouseY === null) return;

    const attraction = Math.min(100, Math.max(0, 100 - distance));
    const targetX = x + (mouseX - x) / (10 + distance * 0.1);
    const targetY = y + (mouseY - y) / (10 + distance * 0.1);

    controls.start({
      x: targetX,
      y: targetY,
      scale: 1 + attraction * 0.01,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        mass: 1,
      },
    });
  }, [mouseX, mouseY, distance, x, y, controls]);

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full backdrop-blur-sm"
      style={{
        x,
        y,
        backgroundColor: color,
      }}
      animate={controls}
    />
  );
};

const InteractiveBackground = ({
  mouseX,
  mouseY,
}: {
  mouseX: number | null;
  mouseY: number | null;
}) => {
  const particles = useMemo(() => {
    const spacing = 120;
    const rows = Math.floor(window.innerHeight / spacing);
    const cols = Math.floor(window.innerWidth / spacing);
    const maxParticles = 40;
    const newParticles = [];

    for (let i = 0; i < Math.min(rows, Math.sqrt(maxParticles)); i++) {
      for (let j = 0; j < Math.min(cols, Math.sqrt(maxParticles)); j++) {
        newParticles.push({
          id: `${i}-${j}`,
          x: j * spacing + (Math.random() * 20 - 10),
          y: i * spacing + (Math.random() * 20 - 10),
        });
      }
    }
    return newParticles;
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),rgba(99,102,241,0)_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.1),rgba(192,132,252,0)_50%)]" />
      </div>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  interface MousePosition {
    x: number | null;
    y: number | null;
  }

  const [mousePos, setMousePos] = useState<MousePosition>({ x: null, y: null });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const throttledMouseMove = (e: MouseEvent) => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        handleMouseMove(e);
        timeoutId = null;
      }, 16);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <InteractiveBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="container relative flex items-center justify-center min-h-screen px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
              x: mousePos.x ? mousePos.x - 128 : 0,
              y: mousePos.y ? mousePos.y - 128 : 0,
            }}
            transition={{ type: 'spring', damping: 30 }}
          />

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-6xl font-extrabold text-gray-900"
          >
            Where Tech Meets
            <span className="text-transparent transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text hover:from-purple-600 hover:via-blue-600 hover:to-purple-600">
              {' '}
              Entertainment
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
            <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-blue-600 group rounded-xl hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
              <Rocket className="w-6 h-6 transition-transform group-hover:rotate-12" />
              Join Us Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
