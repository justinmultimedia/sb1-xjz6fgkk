import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Moon, Sun, BookOpen } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-amber-500" />
                <span className="font-rajdhani font-bold text-xl text-white">
                  ilmArchive
                </span>
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:block">
            <nav className="flex items-center space-x-6">
              <NavLink to="/library" className="text-gray-300 hover:text-white transition-colors">
                Library
              </NavLink>
              <NavLink to="/topics" className="text-gray-300 hover:text-white transition-colors">
                Topics
              </NavLink>
              <NavLink to="/scholars" className="text-gray-300 hover:text-white transition-colors">
                Scholars
              </NavLink>
              <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </NavLink>
              <button 
                className="p-2 rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-300" />
              </button>
              <ThemeToggle />
            </nav>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <NavLink 
              to="/library" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Library
            </NavLink>
            <NavLink 
              to="/topics" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Topics
            </NavLink>
            <NavLink 
              to="/scholars" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Scholars
            </NavLink>
            <NavLink 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <div className="flex items-center justify-between px-3 py-2">
              <button 
                className="p-2 rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-300" />
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;