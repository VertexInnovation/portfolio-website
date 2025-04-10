import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthRedirectMessageProps {
  message: string;
  duration?: number;
}

const AuthRedirectMessage: React.FC<AuthRedirectMessageProps> = ({ 
  message, 
  duration = 3000 
}) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed z-50 px-6 py-3 text-white transform -translate-x-1/2 bg-blue-600 rounded-lg shadow-lg top-20 left-1/2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthRedirectMessage;