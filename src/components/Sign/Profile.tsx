import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

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

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthState({ isLogged: false, userProfile: null, token: null, expiresAt: null });
  };

  if (!authState.isLogged || !authState.userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="p-8 text-center text-white">
          <h1 className="text-2xl font-bold">Not logged in</h1>
          <p>Please log in to view your profile</p>
        </div>
      </div>
    );
  }

  const { userProfile } = authState;

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
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="p-8 border border-gray-700 backdrop-blur-md bg-black/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative w-40 h-40 mb-6 overflow-hidden rounded-full"
              style={{ boxShadow: glowShadow }}
            >
              <img
                src={userProfile.picture || "/api/placeholder/192/192"}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.h1 
              className="mb-2 text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {userProfile.name}
            </motion.h1>
            
            <p className="mb-8 text-xl text-gray-300">
              {userProfile.email}
            </p>
            
            <motion.button
              className="px-6 py-2 font-medium text-white transition-opacity rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
