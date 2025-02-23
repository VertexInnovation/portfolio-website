import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiAward, FiCode, FiUsers } from 'react-icons/fi';
import { IconType } from 'react-icons';

const SocialLink = ({ icon: Icon, href, label }: { icon: IconType, href: string, label: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-2 transition-colors rounded-full bg-white/5 hover:bg-white/10"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="px-3 py-1 text-sm transition-colors rounded-full bg-white/5 hover:bg-white/10"
  >
    {children}
  </motion.span>
);

const StatCard = ({ icon: Icon, value, label }: { icon: IconType, value: string | number, label: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm"
  >
    <Icon className="w-6 h-6 mb-2" />
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm"
  >
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="mb-3 text-sm text-gray-400">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 text-xs rounded-full bg-white/10">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Profile = () => {
  const color = useMotionValue("#13FFAA");

  useEffect(() => {
    animate(color, "#13FFAA", {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const glowShadow = useMotionTemplate`0 0 20px ${color}`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden text-gray-100"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl px-4 py-16 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 mb-16 md:flex-row">
          <motion.div
            className="relative w-48 h-48 overflow-hidden rounded-full"
            style={{ boxShadow: glowShadow }}
          >
            <img
              src="/api/placeholder/192/192"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="mb-2 text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Alex Chen
            </motion.h1>
            <p className="mb-4 text-xl text-gray-400">Full Stack Developer & AI Enthusiast</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-6 md:justify-start">
              <SocialLink icon={FiGithub} href="#" label="GitHub" />
              <SocialLink icon={FiLinkedin} href="#" label="LinkedIn" />
              <SocialLink icon={FiTwitter} href="#" label="Twitter" />
              <SocialLink icon={FiMail} href="#" label="Email" />
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {['React', 'Node.js', 'Python', 'TensorFlow', 'AWS'].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3">
          <StatCard icon={FiAward} value="15+" label="Awards & Certifications" />
          <StatCard icon={FiCode} value="50+" label="Projects Completed" />
          <StatCard icon={FiUsers} value="1.2K+" label="Community Members" />
        </div>

        {/* About Section */}
        <div className="mb-16">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p className="leading-relaxed text-gray-400">
            Passionate about creating innovative solutions that bridge the gap between cutting-edge technology 
            and real-world applications. With over 5 years of experience in full-stack development and machine 
            learning, I specialize in building scalable applications that make a difference. Currently focused 
            on exploring the intersection of AI and web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              title="AI-Powered Analytics Dashboard"
              description="Real-time data visualization platform with predictive analytics capabilities."
              tags={['React', 'Python', 'TensorFlow', 'AWS']}
            />
            <ProjectCard
              title="Blockchain Voting System"
              description="Secure and transparent voting platform built on Ethereum."
              tags={['Solidity', 'Web3.js', 'Next.js']}
            />
            <ProjectCard
              title="Smart Home Automation"
              description="IoT platform for controlling and monitoring home devices."
              tags={['Node.js', 'MQTT', 'React Native']}
            />
            <ProjectCard
              title="Natural Language Processing API"
              description="REST API for text analysis and sentiment prediction."
              tags={['FastAPI', 'spaCy', 'Docker']}
            />
          </div>
        </div>

        {/* Timeline/Experience */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Experience</h2>
          <div className="space-y-8">
            {[
              {
                year: '2023 - Present',
                role: 'Senior Full Stack Developer',
                company: 'Tech Innovations Inc.',
                description: 'Leading development of AI-powered web applications'
              },
              {
                year: '2021 - 2023',
                role: 'Machine Learning Engineer',
                company: 'Data Solutions Ltd.',
                description: 'Developed and deployed ML models for production'
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-32 text-gray-400">{experience.year}</div>
                <div>
                  <h3 className="font-semibold">{experience.role}</h3>
                  <div className="text-gray-400">{experience.company}</div>
                  <p className="mt-1 text-sm text-gray-500">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;