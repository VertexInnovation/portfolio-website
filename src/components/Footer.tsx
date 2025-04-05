import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ChevronUp,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden text-gray-200 bg-gradient-to-b from-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-40 h-40 rounded-full top-10 left-10 bg-blue-600/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-10 right-10 w-60 h-60 bg-purple-600/5 blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Company Info - Takes up more space on larger screens */}
          <div className="space-y-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-[#13FFAA] to-[#DD335C]">
                Vertex
              </h2>
              <p className="max-w-md mt-4 text-gray-300">
                An EdTech entertainment platform connecting students across colleges, fostering collaboration, and bridging academia with industry.
              </p>

              {/* Newsletter Form */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">Subscribe to our newsletter</h3>
                <form onSubmit={handleSubscribe} className="flex mt-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full bg-gray-900/50 border border-gray-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#13FFAA] text-sm"
                  />
                  <button 
                    type="submit"
                    className="px-3 py-2 bg-gradient-to-r from-[#13FFAA] to-[#13FFAA]/80 text-gray-900 rounded-r-md flex-shrink-0 hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="flex mt-6 space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800"
                  >
                    <social.icon className="w-5 h-5 text-[#13FFAA]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Accordion Sections */}
          <div className="space-y-4 lg:hidden">
            {/* Quick Links - Mobile */}
            <div className="pb-4 border-b border-gray-800">
              <button 
                onClick={() => toggleSection('quick')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ChevronUp 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'quick' ? '' : 'rotate-180'}`} 
                />
              </button>
              <AnimatePresence>
                {expandedSection === 'quick' && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {QUICK_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="flex items-center text-gray-300 hover:text-[#13FFAA] transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-[#13FFAA] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Events - Mobile */}
            <div className="pb-4 border-b border-gray-800">
              <button 
                onClick={() => toggleSection('events')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold">Events</h3>
                <ChevronUp 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'events' ? '' : 'rotate-180'}`} 
                />
              </button>
              <AnimatePresence>
                {expandedSection === 'events' && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {EVENTS.map((event) => (
                      <li key={event.label}>
                        <Link
                          to={event.href}
                          className="flex items-center text-gray-300 hover:text-[#13FFAA] transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-[#13FFAA] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {event.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Contact - Mobile */}
            <div className="pb-4 border-b border-gray-800">
              <button 
                onClick={() => toggleSection('contact')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <ChevronUp 
                  className={`w-5 h-5 transition-transform ${expandedSection === 'contact' ? '' : 'rotate-180'}`} 
                />
              </button>
              <AnimatePresence>
                {expandedSection === 'contact' && (
                  <motion.ul 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {CONTACT_INFO.map((info) => (
                      <li key={info.label} className="flex items-start">
                        <info.icon className="w-5 h-5 mt-1 mr-3 text-[#13FFAA]" />
                        <span className="text-gray-300">{info.label}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation Columns */}
          <div className="hidden gap-8 lg:grid lg:col-span-8 lg:grid-cols-3">
            {/* Quick Links - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold relative pb-3 mb-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-12 before:bg-[#13FFAA]">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-300 hover:text-[#13FFAA] transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-[#13FFAA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Events - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold relative pb-3 mb-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-12 before:bg-[#13FFAA]">
                Events
              </h3>
              <ul className="space-y-2.5">
                {EVENTS.map((event) => (
                  <li key={event.label}>
                    <Link
                      to={event.href}
                      className="flex items-center text-gray-300 hover:text-[#13FFAA] transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-[#13FFAA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                      {event.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold relative pb-3 mb-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-12 before:bg-[#13FFAA]">
                Contact Us
              </h3>
              <ul className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <li key={info.label} className="flex items-start group">
                    <div className="p-2 mr-3 transition-colors bg-gray-800 rounded-full group-hover:bg-gray-700">
                      <info.icon className="w-4 h-4 text-[#13FFAA]" />
                    </div>
                    <span className="pt-1 text-gray-300">{info.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 backdrop-blur-sm bg-black/40">
        <div className="container px-4 py-5 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} Vertex. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#13FFAA] relative after:absolute after:bottom-0 after:left-0 after:bg-[#13FFAA] after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vertex_innovate?igsh=MXV3NHFseHpneHU5eA==' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/vertexinnovation/' },
  { name: 'Email', icon: Mail, href: 'mailto:support@vertextech.org' }
];

const QUICK_LINKS = [
  { label: 'About Us', href: '/' },
  { label: 'Bootcamps', href: '/community' },
  { label: 'Community', href: '/community' },
  { label: 'Projects', href: '/community' },
  { label: 'Team', href: '/team' },
];

const EVENTS = [
  { label: 'Upcoming Hackathons', href: '/events' },
  { label: 'Tech Workshops', href: '/events' },
  { label: 'College Events', href: '/events' },
  { label: 'Industry Talks', href: '/events' },
  { label: 'Virtual Meetups', href: '/events' },
];

const CONTACT_INFO = [
  { icon: MapPin, label: 'Chennai, Tamil Nadu, India' },
  { icon: Phone, label: '+91 93458 88323' },
  { icon: Mail, label: 'support@vertextech.org' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

export default Footer;