// Navbar.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

interface UserProfile {
  name: string;
  picture?: string;
}

interface AuthState {
  isLogged: boolean;
  userProfile: UserProfile | null;
  token: string | null;
  expiresAt: number | null;
}

const STORAGE_KEY = "vertex_auth";
const TOKEN_EXPIRY_DAYS = 30;

const getStoredAuth = (): AuthState => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored)
    return { isLogged: false, userProfile: null, token: null, expiresAt: null };
  const auth = JSON.parse(stored);
  if (auth.expiresAt && auth.expiresAt < Date.now()) {
    localStorage.removeItem(STORAGE_KEY);
    return { isLogged: false, userProfile: null, token: null, expiresAt: null };
  }
  return auth;
};

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  {
    label: "Learn",
    submenu: [
      { label: "Courses", href: "/learn/courses" },
      { label: "Projects", href: "/learn/projects" },
      { label: "Resources", href: "/learn/resources" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Team", href: "/team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(getStoredAuth());

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        const userInfo = await response.json();
        const expiresAt = Date.now() + TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        updateAuthState({
          isLogged: true,
          userProfile: userInfo,
          token: tokenResponse.access_token,
          expiresAt,
        });
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        logOut();
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      logOut();
    },
  });

  const updateAuthState = (newState: AuthState) => {
    setAuthState(newState);
    if (newState.isLogged) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const logOut = () => {
    updateAuthState({
      isLogged: false,
      userProfile: null,
      token: null,
      expiresAt: null,
    });
    navigate("/");
  };

  useEffect(() => {
    const checkExpiry = () => {
      const stored = getStoredAuth();
      if (stored.expiresAt && stored.expiresAt < Date.now()) {
        logOut();
      }
    };
    const interval = setInterval(checkExpiry, 60000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        
      </Link>

      {/* Desktop Menu */}
      <ul className="items-center hidden space-x-8 lg:flex">
        {MENU_ITEMS.map((item, index) => (
        <li key={index} className="relative">
          {item.submenu ? (
          <div className="relative group">
            <span className="flex items-center py-2 cursor-pointer">
            {item.label} <ChevronDown size={16} className="ml-1.5" />
            </span>
            <ul className="absolute left-0 hidden mt-1 min-w-[200px] bg-white rounded-lg shadow-lg top-full group-hover:block">
            {item.submenu.map((subItem, idx) => (
              <li key={idx}>
              <Link
                to={subItem.href}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              >
                {subItem.label}
              </Link>
              </li>
            ))}
            </ul>
          </div>
          ) : (
          <Link
            to={item.href}
            className="py-2 text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
          )}
        </li>
        ))}

        {/* Profile Section */}
        <li className="flex items-center pl-8 ml-8 space-x-6 border-l">
        {authState.isLogged && authState.userProfile ? (
          <div className="list-none">
          <Link
            to="/profile"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
          >
            <img
            src={authState.userProfile.picture || "https://via.placeholder.com/30"}
            alt="User Avatar"
            className="object-cover w-8 h-8 rounded-full"
            />
            <span className="font-medium">{authState.userProfile.name}</span>
          </Link>
          </div>
        ) : (
          <>
          <button
            onClick={() => login()}
            className="px-4 py-2 font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </button>
          <button className="px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
          </>
        )}
        </li>
      </ul>

          <button
            className="p-2 text-gray-700 transition-colors lg:hidden hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-2 bg-white shadow-lg lg:hidden"
        >
        <ul className="flex flex-col p-6 space-y-4">
          {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            {item.submenu ? (
            <div className="space-y-3">
              <span className="flex items-center font-medium">
              {item.label} <ChevronDown size={16} className="ml-2" />
              </span>
              <ul className="pl-4 space-y-2">
              {item.submenu.map((subItem, idx) => (
                <li key={idx}>
                <Link
                  to={subItem.href}
                  className="block py-2 text-gray-600 hover:text-blue-600"
                >
                  {subItem.label}
                </Link>
                </li>
              ))}
              </ul>
            </div>
            ) : (
            <Link
              to={item.href}
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
            )}
          </li>
          ))}

          <div className="pt-4 mt-4 border-t">
          {authState.isLogged && authState.userProfile ? (
            <Link
            to="/profile"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
            >
            <img
              src={authState.userProfile.picture || "https://via.placeholder.com/30"}
              alt="User Avatar"
              className="object-cover w-8 h-8 rounded-full"
            />
            <span className="font-medium">{authState.userProfile.name}</span>
            </Link>
          ) : (
            <div className="flex flex-col space-y-3">
            <button
              onClick={() => login()}
              className="w-full py-2 font-medium text-center text-gray-700 hover:text-blue-600"
            >
              Login
            </button>
            <button className="w-full py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
            </div>
          )}
          </div>
        </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;