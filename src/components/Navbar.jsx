import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const handleLinkClick = (path) => {
    if (location.pathname === path) {

      setIsOpen(false);
    } else {

      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl"> 🌦️ Weather Dashboard</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-8 h-8 p-2 bg-white rounded-full shadow-lg focus:outline-none"
        >
          <span className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-10 py-2 space-y-2 text-right bg-white/5 backdrop-blur-sm rounded-b-xl shadow">
          <Link to="/" onClick={() => handleLinkClick("/")} className="block text-gray-800 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" onClick={() => handleLinkClick("/about")} className="block text-gray-800 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact")} className="block text-gray-800 hover:text-blue-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
