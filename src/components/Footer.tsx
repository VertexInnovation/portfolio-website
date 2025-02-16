// Code for the footer component
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-300 bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 py-12 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Join Our Newsletter
            </h3>
            <p className="mb-6 text-white/80">
              Stay updated with the latest events, hackathons, and opportunities!
            </p>
            <div className="flex flex-col justify-center max-w-lg gap-4 mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 text-white border rounded-xl bg-white/10 backdrop-blur-sm border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-xl hover:bg-gray-100 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Vertex
            </h2>
            <p className="text-gray-400">
              An EdTech entertainment platform connecting students across colleges, fostering collaboration, and bridging academia with industry.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 transition-colors group hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Events</h3>
            <ul className="space-y-4">
              {EVENTS.map((event) => (
                <li key={event.label}>
                  <a
                    href={event.href}
                    className="flex items-center text-gray-400 transition-colors group hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    {event.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <li key={info.label} className="flex items-start">
                  <info.icon className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                  <span className="text-gray-400">{info.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-400">
              © {currentYear} Vertex. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white"
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
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

const QUICK_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'Bootcamps', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Resources', href: '#' },
];

const EVENTS = [
  { label: 'Upcoming Hackathons', href: '#' },
  { label: 'Tech Workshops', href: '#' },
  { label: 'College Events', href: '#' },
  { label: 'Industry Talks', href: '#' },
  { label: 'Virtual Meetups', href: '#' },
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