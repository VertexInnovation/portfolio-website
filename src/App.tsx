import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import EventsPage from './pages/EventsPage.tsx';
import Community from './pages/Community';
import EventDetail from './pages/EventDetail';
import SignUp from './components/Sign/SignUp';
import VertexInnovateHack from './pages/VertexInnovateHack';
import ForgotPassword from './components/Sign/ForgotPassword';
import Profile from './components/Sign/Profile';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Submissions from "./pages/Submissions";
import Courses from "./pages/LearnPages/Courses";
import Projects from "./pages/LearnPages/Projects";
import Resources from "./pages/LearnPages/Resources";
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

function App() {
  const clientId = '727346499975-g4j5a4h9chc0o0f48ir1fbhd6b4thu75.apps.googleusercontent.com'; 

  return (
    
    <GoogleOAuthProvider clientId={clientId}> {/* Wrap with GoogleOAuthProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 z-50 w-full">
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>
          </header>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
              <Route path="/vertexinnovate" element={<VertexInnovateHack />} />

              <Route path="/submissions" element={<Submissions />} />

              <Route path= "/community" element={<Community />} />
              <Route path="/learn/courses" element={<Courses />} />
              <Route path="/learn/projects" element={<Projects />} />
              <Route path="/learn/resources" element={<Resources />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      
    </GoogleOAuthProvider>
  );
}

export default App;