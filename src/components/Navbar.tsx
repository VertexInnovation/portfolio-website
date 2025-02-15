import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [authState, setAuthState] = useState<AuthState>(getStoredAuth());

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

  const MenuItem = ({
    item,
  }: {
    item: {
      label: string;
      href?: string;
      submenu?: { label: string; href: string }[];
    };
  }) => (
    <div className="relative group">
      {item.submenu ? (
        <div className="flex items-center gap-1 cursor-pointer">
          <button
            className="flex items-center gap-1 text-gray-700 transition-colors hover:text-blue-600"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span>{item.label}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 transition-colors group-hover:text-blue-600" />
          </button>
          <div className="absolute left-0 hidden pt-2 group-hover:block top-full">
            <div
              className="bg-white rounded-xl shadow-lg p-2 min-w-[200px]"
              role="menu"
            >
              {item.submenu.map((subItem: { label: string; href: string }) => (
                <Link
                  key={subItem.label}
                  to={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 transition-colors rounded-lg hover:bg-blue-50"
                  role="menuitem"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link
          to={item.href || "#"}
          className="text-gray-700 transition-colors hover:text-blue-600"
        >
          {item.label}
        </Link>
      )}
    </div>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            >
              Vertex
            </motion.div>
          </Link>

          <div className="items-center hidden space-x-8 lg:flex">
            {MENU_ITEMS.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </div>

          {/*Desktop*/}
          <div className="items-center hidden space-x-4 lg:flex">
            {authState.isLogged && authState.userProfile ? (
              <div className="relative flex items-center space-x-4 cursor-pointer group">
                <img
                  src={authState.userProfile.picture || "/default-avatar.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-700">
                  {authState.userProfile.name}
                </span>
                <div className="absolute -bottom-10 right-0 hidden mt-2 bg-white border rounded-lg shadow-lg group-hover:block">
                  <button
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => logOut()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button
                  className="px-4 py-2 text-gray-700 transition-colors hover:text-blue-600"
                  onClick={() => login()}
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  className="px-6 py-2 text-white transition-opacity bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="p-2 text-gray-700 transition-colors lg:hidden hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t lg:hidden"
          >
            <div className="container px-4 py-4 mx-auto">
              {MENU_ITEMS.map((item) => (
                <div key={item.label} className="py-2">
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="font-medium text-gray-700">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block text-sm text-gray-600 transition-colors hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-700 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/*Mobile*/}
              <div className="flex flex-col pt-4 space-y-2 border-t">
                {authState.isLogged && authState.userProfile ? (
                  <div className="relative flex items-center space-x-4 cursor-pointer">
                    <img
                      src={
                        authState.userProfile.picture || "/default-avatar.png"
                      }
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-700">
                      {authState.userProfile.name}
                    </span>
                    <div className="bg-white border rounded-lg">
                      <button
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => logOut()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      className="px-4 py-2 text-gray-700 transition-colors hover:text-blue-600"
                      onClick={() => login()}
                    >
                      Login
                    </button>
                    <Link
                      to="/signup"
                      className="px-6 py-2 text-white transition-opacity bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
