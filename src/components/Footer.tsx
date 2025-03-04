// Code for the footer component
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-gray-200 bg-gray-950">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-6">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-[#13FFAA] to-[#DD335C]">
          Vertex
        </h2>
        <p className="text-gray-200">
          An EdTech entertainment platform connecting students across colleges, fostering collaboration, and bridging academia with industry.
        </p>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-gray-950/50 hover:bg-gray-950/90"
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
            className="flex items-center text-gray-200 transition-colors group hover:text-[#13FFAA]"
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
            className="flex items-center text-gray-200 transition-colors group hover:text-[#13FFAA]"
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
            <info.icon className="w-5 h-5 mt-1 mr-3 text-[#13FFAA]" />
            <span className="text-gray-200">{info.label}</span>
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
        <p className="text-gray-200">
          © {currentYear} Vertex. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 text-gray-200">
          {LEGAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-[#13FFAA]"
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
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const QUICK_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'Bootcamps', href: 'community' },
  { label: 'Community', href: 'community' },
  { label: 'Projects', href: 'community' },
  { label: 'Team', href: 'team' },
];

const EVENTS = [
  { label: 'Upcoming Hackathons', href: 'events' },
  { label: 'Tech Workshops', href: 'events' },
  { label: 'College Events', href: 'events' },
  { label: 'Industry Talks', href: 'events' },
  { label: 'Virtual Meetups', href: 'events' },
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