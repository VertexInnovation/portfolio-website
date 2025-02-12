import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaRocket,
  FaLaptop,
  FaTrophy,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaFlag
} from 'react-icons/fa';
import { LucideCalendar, ChevronDown } from 'lucide-react';

const VertexInnovateHack = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -50]);

  const sections = ['about', 'timeline', 'prizes', 'sponsors'];
  
  interface NavigationOptions {
    behavior: 'smooth' | 'auto';
  }

  const navigateToSection = (section: string): void => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' } as NavigationOptions);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4 bg-black/80 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            VERTEX INNOVATE '25
          </h1>
          <div className="flex gap-6">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => navigateToSection(section)}
                className={`capitalize ${
                  activeSection === section 
                    ? 'text-pink-500 font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, y }}
        className="relative flex flex-col items-center justify-center h-screen pt-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-6xl font-bold">
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
              48-Hour Online Hackathon
            </span>
          </h1>
          <p className="mb-8 text-2xl">Innovate • Build • Inspire</p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <LucideCalendar className="w-8 h-8 text-pink-500" />
            <span className="text-xl">February 15-17, 2025</span>
          </div>
            <motion.a
            href="https://unstop.com/hackathons/vertex-innovate-2025-vellore-institute-of-technology-chennai-1368491?lb=VNLKayJQ&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-bold transition-all rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/20"
            >
            Register Now
            </motion.a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-pink-500" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="flex items-center min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-12"
          >
            <div>
              <h2 className="mb-6 text-4xl font-bold">About the Hackathon</h2>
              <p className="mb-6 text-lg text-gray-300">
                Join us for an exciting 48-hour journey of innovation, creativity, and problem-solving.
                Vertex Innovate '25 brings together the brightest minds to tackle real-world challenges
                and create impactful solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FaRocket, text: "48 Hours" },
                  { icon: FaLaptop, text: "Online Event" },
                  { icon: FaTrophy, text: "Amazing Prizes" },
                  { icon: FaDiscord, text: "Live Support" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                  >
                    <item.icon className="w-8 h-8 mb-2 text-pink-500" />
                    <p className="text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 transform rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 rotate-3"></div>
              <img
                src="/api/placeholder/600/400"
                alt="Hackathon"
                className="relative transition-transform transform rounded-lg shadow-xl -rotate-3 hover:rotate-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-4xl font-bold text-center"
          >
            Event Timeline
          </motion.h2>
          <div className="relative">
            {[
              {
                date: 'Feb 15',
                time: '9:00 PM',
                title: 'Kickoff Day',
                description: 'Opening Ceremony & Hackathon Begins',
                icon: FaRocket,
              },
              {
                date: 'Feb 16',
                time: 'All Day',
                title: 'Hacking Continues',
                description: 'Build, Learn, and Collaborate',
                icon: FaLaptop,
              },
              {
                date: 'Feb 17',
                time: '11:59 PM',
                title: 'Final Submissions',
                description: 'Project Deadline & IBM\'s Talk',
                icon: FaFlag
              },
              {
                date: 'Feb 20',
                time: '9:30 PM',
                title: 'Closing Ceremony',
                description: 'Winners Announcement & Prizes',
                icon: FaTrophy,
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 text-right">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="mb-2 text-2xl font-bold">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                    <p className="mt-2 text-pink-500">{event.date} • {event.time}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                    <event.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="min-h-screen px-6 py-20 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-4xl font-bold text-center"
          >
            Prizes & Rewards
          </motion.h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { place: '1st', prize: '₹50,000', color: 'from-yellow-500 to-yellow-600' },
              { place: '2nd', prize: '₹30,000', color: 'from-gray-300 to-gray-400' },
              { place: '3rd', prize: '₹20,000', color: 'from-orange-600 to-orange-700' },
            ].map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 text-center rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className={`text-6xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-4`}>
                  {prize.place}
                </div>
                <div className="mb-4 text-4xl font-bold">{prize.prize}</div>
                <p className="text-gray-300">+ Exciting Swag Pack</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-4xl font-bold"
          >
            Our Sponsors
          </motion.h2>
          <div className="grid grid-cols-3 gap-12">
            {[1, 2, 3].map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <img
                  src={`/api/placeholder/200/100`}
                  alt={`Sponsor ${sponsor}`}
                  className="object-contain w-full h-32 mb-4"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black/80">
        <div className="grid max-w-6xl grid-cols-3 gap-8 mx-auto">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
            <p className="text-gray-300">Email: vertex@example.com</p>
            <div className="flex gap-4 mt-4">
              <FaInstagram className="w-6 h-6 text-pink-500 cursor-pointer hover:text-pink-400" />
              <FaDiscord className="w-6 h-6 text-pink-500 cursor-pointer hover:text-pink-400" />
              <FaLinkedin className="w-6 h-6 text-pink-500 cursor-pointer hover:text-pink-400" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-pink-500">Register Now</li>
              <li className="cursor-pointer hover:text-pink-500">Rules & Guidelines</li>
              <li className="cursor-pointer hover:text-pink-500">FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Location</h3>
            <p className="text-gray-300">
              Vellore Institute of Technology<br />
              Chennai Campus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VertexInnovateHack;