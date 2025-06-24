import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/yourusername/password-manager", "_blank");
  };

  return (
    <>
      <nav className="bg-slate-900/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="logo font-extrabold text-xl sm:text-2xl cursor-pointer hover:scale-105 transition-transform duration-200">
              <span className="text-green-400">&lt;</span>
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Password
              </span>
              <span className="text-green-400">Manager/&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Support
                </a>
              </li>
            </ul>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              
              {/* GitHub Button */}
              <button 
                onClick={handleGithubClick}
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </button>

              {/* Mobile GitHub Button */}
              <button 
                onClick={handleGithubClick}
                className="sm:hidden p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-800/95 backdrop-blur-sm`}>
          <div className="px-4 py-4 space-y-2">
            <a 
              href="/" 
              className="block text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="block text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#support" 
              className="block text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;