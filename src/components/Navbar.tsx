import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
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

interface MenuItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
  isOpen?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  {
    label: "Learn",
    isOpen: false,
    submenu: [
      { label: "Courses", href: "/learn/courses" },
      { label: "Projects", href: "/learn/projects" },
      { label: "Resources", href: "/learn/resources" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Team", href: "/team" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(getStoredAuth());
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logOut = () => {
    updateAuthState({
      isLogged: false,
      userProfile: null,
      token: null,
      expiresAt: null,
    });
    setProfileDropdownOpen(false);
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
  }, [logOut]);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-md ${isScrolled ? "bg-transparent shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        {/* Logo with "Vertex" Text */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-transparent transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text hover:from-purple-600 hover:via-blue-600 hover:to-purple-600">
            {' '}Vertex
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="items-center hidden space-x-8 lg:flex">
          {MENU_ITEMS.map((item, index) => (
            <li key={index} className="relative">
              {item.submenu ? (
                <div className="relative group">
                  <span className="flex items-center py-2 text-white cursor-pointer">
                    {item.label} <ChevronDown size={16} className="ml-1.5" />
                  </span>
                  <ul className="absolute left-0 hidden mt-1 min-w-[200px]bg-transparent backdrop-blur-md rounded-lg shadow-lg top-full group-hover:block">
                    {item.submenu.map((subItem, idx) => (
                      <li key={idx}>
                        <Link
                          to={subItem.href}
                          className="block px-6 py-3 text-white hover:bg-white/10 whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.href || '/'}
                  className="py-2 text-white hover:text-blue-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* Profile Section with Dropdown */}
          <li className="flex items-center pl-8 ml-8 space-x-6 border-l border-white/20">
            {authState.isLogged && authState.userProfile ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-3 text-white hover:text-blue-300"
                >
                  <img
                    src={authState.userProfile.picture || "https://via.placeholder.com/30"}
                    alt="User Avatar"
                    className="object-cover w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">{authState.userProfile.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 w-48 mt-2 bg-transparent rounded-lg shadow-lg backdrop-blur-md ring-1 ring-white/10">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center w-full px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <User size={16} className="mr-2" />
                        Profile
                      </Link>
                      <button
                        onClick={logOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-300 transition-colors hover:bg-red-500/20"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => login()}
                  className="px-4 py-2 font-medium text-white hover:text-blue-300"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                  Sign Up
                </button>
              </>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-white transition-colors lg:hidden hover:text-blue-300"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 w-full mt-2 overflow-hidden bg-transparent rounded-lg shadow-lg backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col p-6 space-y-4 bg-transparent backdrop-blur-md">
              {MENU_ITEMS.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <motion.div
                      initial={false}
                      animate={{ height: "auto" }}
                      className="space-y-3"
                    >
                      <button
                        className="flex items-center justify-between w-full py-2 font-medium text-white hover:text-blue-300"
                        onClick={() => item.isOpen = !item.isOpen}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${item.isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: item.isOpen ? 1 : 0,
                          height: item.isOpen ? "auto" : 0
                        }}
                        className="pl-4 space-y-2 overflow-hidden"
                      >
                        {item.submenu.map((subItem, idx) => (
                          <li key={idx}>
                            <Link
                              to={subItem.href}
                              className="block px-3 py-2 text-white transition-colors rounded-lg hover:text-blue-300 hover:bg-white/10"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="block px-3 py-2 font-medium text-white transition-colors rounded-lg hover:text-blue-300 hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              <motion.div
                className="pt-4 mt-4 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {authState.isLogged && authState.userProfile ? (
                  <div className="space-y-3">
                    <Link
                      to="/profile"
                      className="flex items-center p-3 space-x-3 text-white rounded-lg hover:text-blue-300 hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src={authState.userProfile.picture || "https://via.placeholder.com/30"}
                        alt="User Avatar"
                        className="object-cover w-8 h-8 rounded-full" />
                      <span className="font-medium">{authState.userProfile.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logOut();
                        setIsOpen(false);
                      }}
                      className="w-full py-2 font-medium text-red-300 transition-colors rounded-lg hover:bg-red-500/20"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => login()}
                      className="w-full py-2 font-medium text-center text-white hover:text-blue-300"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setIsOpen(false);
                      }}
                      className="w-full py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;