import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
          >
            Vertex
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            {MENU_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-gray-700 transition-colors hover:text-blue-600">
                      {item.label}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-colors group-hover:text-blue-600" />
                    <div className="absolute left-0 hidden pt-2 group-hover:block top-full">
                      <div className="bg-white rounded-xl shadow-lg p-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors rounded-lg hover:bg-blue-50"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="items-center hidden space-x-4 lg:flex">
            <button className="px-4 py-2 text-gray-700 transition-colors hover:text-blue-600">
              Login
            </button>
            <Link to="/signup" className="px-6 py-2 text-white transition-opacity bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gray-700 transition-colors lg:hidden hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t lg:hidden"
          >
            <div className="container px-4 py-4 mx-auto">
              {MENU_ITEMS.map((item) => (
                <div key={item.label} className="py-2">
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="font-medium text-gray-700">{item.label}</div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-sm text-gray-600 transition-colors hover:text-blue-600"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-700 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col pt-4 space-y-2 border-t">
                <button className="w-full px-4 py-2 text-gray-700 transition-colors hover:text-blue-600">
                  Login
                </button>
                <button className="w-full px-6 py-2 text-white transition-opacity bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MENU_ITEMS = [
    { label: 'Home', href: '/' },
    {
        label: 'Events', href: '/events',},
    {
        label: 'Learn',
        submenu: [
            { label: 'Courses', href: '/learn/courses' },
            { label: 'Projects', href: '/learn/projects' },
            { label: 'Resources', href: '/learn/resources' },
        ],
    },
    { label: 'Community', href: '/community' },
    { label: 'Team', href: '/team' },
];

export default Navbar;