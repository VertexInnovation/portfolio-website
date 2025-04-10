import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import AuthRedirectMessage from './AuthRedirectMessage';

const STORAGE_KEY = "vertex_auth";

const getStoredAuth = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { isLogged: false };
  
  try {
    const auth = JSON.parse(stored);
    if (auth.expiresAt && auth.expiresAt < Date.now()) {
      localStorage.removeItem(STORAGE_KEY);
      return { isLogged: false };
    }
    return auth;
  } catch (error) {
    console.error("Error parsing auth data:", error);
    return { isLogged: false };
  }
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authState = getStoredAuth();
  const [showMessage] = useState(!authState.isLogged);

  if (!authState.isLogged) {
    return (
      <>
        {showMessage && <AuthRedirectMessage message="Please log in to access this page" />}
        <Navigate to="/signup" replace />
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;