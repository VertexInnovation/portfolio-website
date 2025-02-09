import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface ParticleProps {
  x: number;
  y: number;
  mouseX: number | null;
  mouseY: number | null;
}

const Particle = ({ x, y, mouseX, mouseY }: ParticleProps) => {
  const particleRef = useRef(null);
  
  const getDistance = (x1: number, y1: number, x2: number | null, y2: number | null) => {
    return Math.sqrt(Math.pow((x2 ?? x1) - x1, 2) + Math.pow((y2 ?? y1) - y1, 2));
  };

  const getColor = (distance: number) => {
    const maxDistance = 200;
    const intensity = Math.max(0, 1 - distance / maxDistance);
    return `rgba(96, 165, 250, ${intensity * 0.5})`;
  };

  const distance = getDistance(x, y, mouseX, mouseY);
  const attraction = Math.min(100, Math.max(0, 100 - distance));
  
  return (
    <motion.div
      ref={particleRef}
      className="absolute w-2 h-2 rounded-full backdrop-blur-sm"
      style={{
        x,
        y,
        backgroundColor: getColor(distance),
      }}
      animate={{
        x: mouseX ? x + (mouseX - x) / (10 + distance * 0.1) : x,
        y: mouseY ? y + (mouseY - y) / (10 + distance * 0.1) : y,
        scale: 1 + attraction * 0.01,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 1,
      }}
    />
  );
};

const InteractiveBackground = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  interface Particle {
    id: string;
    x: number;
    y: number;
  }
  
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const rows = Math.floor(window.innerHeight / 50);
      const cols = Math.floor(window.innerWidth / 50);
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          newParticles.push({
            id: `${i}-${j}`,
            x: j * 50 + Math.random() * 20,
            y: i * 50 + Math.random() * 20,
          });
        }
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50" />
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
              background: "radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)",
              x: mousePos.x - 128,
              y: mousePos.y - 128,
            }}
            transition={{ type: "spring", damping: 30 }}
          />
          
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
      </div>
    </section>
  );
};

export default HeroSection;