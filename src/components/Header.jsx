
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl">Vertex</Link>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About Us</Link>
          <Link to="/portfolio" className="mx-2">Portfolio</Link>
          <Link to="/services" className="mx-2">Services</Link>
          <Link to="/contact" className="mx-2">Contact Us</Link>
          <Link to="/faq" className="mx-2">FAQ</Link>
          <Link to="/events" className="mx-2">Events</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
