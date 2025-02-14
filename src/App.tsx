import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import EventsPage from './pages/EventsPage.tsx';
import EventDetail from './pages/EventDetail';
import SignUp from './components/Sign/SignUp';
import VertexInnovateHack from './pages/VertexInnovateHack';
import ForgotPassword from './components/Sign/ForgotPassword';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/vertexinnovate" element={<VertexInnovateHack />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;