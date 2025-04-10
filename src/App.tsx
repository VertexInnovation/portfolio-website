import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import EventsPage from './pages/EventsPage/EventsPage';
import Community from './pages/Community';
import SignUp from './components/Sign/SignUp';
import ForgotPassword from './components/Sign/ForgotPassword';
import Profile from './components/Sign/Profile';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Submissions from "./pages/Submissions";
import Courses from "./pages/LearnPages/Courses";
import Projects from "./pages/LearnPages/Projects";
import Resources from "./pages/LearnPages/Resources";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProtectedRoute from './components/ProtectedRoute';
import { authConfig } from './config/auth';

function App() {
  return (
    <GoogleOAuthProvider 
      clientId={authConfig.googleClientId}
      onScriptLoadSuccess={() => console.log('Google OAuth script loaded successfully')}
      onScriptLoadError={(error) => console.error('Google OAuth script failed to load:', error)}
    >
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="top-0 w-full">
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>
          </header>
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/community" element={<Community />} />
              
              {/* Events Pages */}
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/upcoming" element={<EventsPage />} />
              <Route path="/events/past" element={<EventsPage />} />
              
              {/* Authentication Pages */}
              <Route path="/signup" element={<SignUp />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Learn Pages */}
              <Route path="/learn/courses" element={<Courses />} />
              <Route path="/learn/projects" element={<Projects />} />
              <Route path="/learn/resources" element={<Resources />} />
              
              {/* Protected Pages */}
              <Route 
                path="/submissions" 
                element={
                  <ProtectedRoute>
                    <Submissions />
                  </ProtectedRoute>
                }
              />
              
              {/* 404 Page */}
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
