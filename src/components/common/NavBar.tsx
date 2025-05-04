import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navbarClass = scrollPosition > 50 
    ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
    : 'bg-transparent';
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${navbarClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Portfolio
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 z-40 pt-20 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col space-y-8 items-center">
            <Link to="/" className="text-white text-2xl" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white text-2xl" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-white text-2xl" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20 w-full justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:example@example.com" className="text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;