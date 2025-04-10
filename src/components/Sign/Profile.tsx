import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Upload, ExternalLink } from 'lucide-react';

const STORAGE_KEY = "vertex_auth";

interface UserProfile {
  name: string;
  picture?: string;
  email?: string;
  given_name?: string;
  family_name?: string;
}

interface AuthState {
  isLogged: boolean;
  userProfile: UserProfile | null;
  token: string | null;
  expiresAt: number | null;
}

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

const Profile = () => {
  const [authState, setAuthState] = useState<AuthState>(getStoredAuth());
  const color = useMotionValue("#13FFAA");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    animate(color, "#13FFAA", {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const glowShadow = useMotionTemplate`0 0 clamp(10px, 3vw, 20px) ${color}`;

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthState({ isLogged: false, userProfile: null, token: null, expiresAt: null });
  };

  if (!authState.isLogged || !authState.userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="p-4 text-center text-white md:p-8">
          <h1 className="text-xl font-bold md:text-2xl">Not logged in</h1>
          <p className="mt-2 text-sm md:text-base">Please log in to view your profile</p>
        </div>
      </div>
    );
  }

  const { userProfile } = authState;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative w-full min-h-screen overflow-hidden text-gray-100"
    >
      {/* Background Stars - conditionally render fewer stars on mobile */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars 
            radius={50} 
            depth={isMobile ? 30 : 50}
            count={isMobile ? 1500 : 2500} 
            factor={isMobile ? 3 : 4} 
            fade 
            speed={1.5} 
          />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <motion.div 
          className="w-full max-w-sm p-4 border border-gray-700 sm:max-w-md md:max-w-lg sm:p-6 md:p-8 backdrop-blur-md bg-black/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative w-24 h-24 mb-4 overflow-hidden rounded-full sm:w-32 sm:h-32 md:w-40 md:h-40 md:mb-6"
              style={{ boxShadow: glowShadow }}
            >
              <img
                src={userProfile.picture || "/api/placeholder/192/192"}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.h1 
              className="max-w-full mb-1 text-xl font-bold break-words md:mb-2 sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {userProfile.name}
            </motion.h1>
            
            <p className="max-w-full mb-4 text-sm text-gray-300 break-words sm:text-base md:text-lg">
              {userProfile.email}
            </p>

            {/* Spectrum Event Submission Portal Button */}
            <motion.div 
              className="w-full mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-4 mb-4 border rounded-lg border-blue-500/30 bg-blue-900/20">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 rounded-full bg-blue-500/20">
                    <Upload className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-300">SPECTRUM'25 Participants</h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Submit your project files and presentation for the SPECTRUM'25 event
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <Link 
                    to="/submissions" 
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black transition-all duration-300 rounded-md bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500"
                  >
                    Go to Submission Portal
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <div className="flex gap-4">
              <motion.button
                className="px-4 py-2 text-sm font-medium text-white transition-opacity rounded-full sm:px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 md:text-base"
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
              
              <Link to="/">
                <motion.button
                  className="px-4 py-2 text-sm font-medium transition-opacity border rounded-full border-gray-600/60 sm:px-6 hover:bg-white/5 md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;