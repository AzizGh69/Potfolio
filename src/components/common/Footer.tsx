import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Portfolio</h3>
          <p className="text-gray-400 mb-6">
            Creating innovative and visually stunning digital experiences
            that blend art and technology.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:example@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Navigation</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact</h3>
          <p className="text-gray-400 mb-2">example@example.com</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
          <p className="text-gray-400 mt-4">San Francisco, CA</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;