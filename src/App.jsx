import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import FooterPage from './components/FooterPage';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
    
      <Navbar />

      {/* Main content */}
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

     
      <FooterPage />
    </div>
    </Router>
  );
}

export default App;

