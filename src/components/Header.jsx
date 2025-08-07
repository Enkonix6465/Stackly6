import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, ChevronDown, User, LogOut } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, user, onLogout, sticky }) => {
  const navigate = useNavigate();
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeDropdownOpen, setMobileHomeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return 'U';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setProfileDropdownOpen(false);
    navigate('/');
  };

  const handleDarkModeToggle = () => {
    if (typeof setDarkMode === 'function') {
      setDarkMode(!darkMode);
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header
      style={sticky ? { position: 'sticky', top: 0, zIndex: 50 } : {}}
      className={`flex flex-wrap justify-between items-center px-4 py-4 bg-[#002346] text-white shadow-sm w-full${sticky ? ' sticky-header-fallback' : ''}`}
    >
      <h1 className="text-2xl font-semibold">Verdict</h1>

      {/* Hamburger for mobile */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          className="block text-white"
          onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
          aria-label="Open Menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {/* ...existing code for nav links and dropdowns... */}
        {/* Home Dropdown */}
        <div className="relative">
          <button
            onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
            className="flex items-center space-x-1 bg-[#002346F2] text-[#646cff] hover:text-[#535bf2] transition-colors border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
          >
            <span>Home</span>
            <ChevronDown size={16} />
          </button>
          {homeDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <Link
                to="/home"
                className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setHomeDropdownOpen(false)}
              >
                Home1
              </Link>
              <Link
                to="/home2"
                className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setHomeDropdownOpen(false)}
              >
                Home2
              </Link>
            </div>
          )}
        </div>
        <Link to="/about" className="text-[#646cff] hover:text-[#535bf2] transition-colors">About Us</Link>
        <div className="relative">
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className="flex items-center space-x-1 bg-[#002346F2] text-[#646cff] hover:text-[#535bf2] transition-colors border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
          >
            <span>Services</span>
            <ChevronDown size={16} />
          </button>
          {servicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <Link to="/services/criminal" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Criminal Law</Link>
              <Link to="/services/civil" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Civil Law</Link>
              <Link to="/services/family" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Family Law</Link>
              <Link to="/services/corporate" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Corporate Law</Link>
              <Link to="/services/real-estate" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Real Estate Law</Link>
              <Link to="/services/immigration" className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>Immigration Law</Link>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <Link to="/services" className="block px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setServicesDropdownOpen(false)}>View All Services</Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/blog" className="text-[#646cff] hover:text-[#535bf2] transition-colors">Blog</Link>
        <Link to="/contact" className="text-[#646cff] hover:text-[#535bf2] transition-colors">Contact Us</Link>
      </nav>

      {/* Mobile Nav with dropdowns */}
      {homeDropdownOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-[#002346] bg-opacity-95 flex flex-col items-center justify-center z-50 overflow-y-auto">
          {/* Theme/Profile Buttons in mobile menu */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleDarkModeToggle} className="flex items-center bg-[#242424] text-white rounded-lg px-3 py-2 hover:bg-[#333333] transition-colors">{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
            <div className="relative">
              <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold hover:bg-teal-600 transition-colors border-none outline-none focus:outline-none focus:ring-0 focus:border-none">{getInitials(user?.firstName, user?.lastName)}</button>
              {profileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"><LogOut size={16} className="mr-2" />Logout</button>
                </div>
              )}
            </div>
          </div>
          <button className="absolute top-6 right-6 text-white" onClick={() => setHomeDropdownOpen(false)} aria-label="Close Menu">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {/* Home Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setMobileHomeDropdownOpen(!mobileHomeDropdownOpen)} className="block py-4 text-2xl text-white w-full text-center bg-[#002346F2]">Home <ChevronDown size={20} className="inline" /></button>
            {/* Home dropdown options */}
            {mobileHomeDropdownOpen && (
              <div className="w-full flex flex-col items-center">
                <Link to="/home" className="block py-2 text-lg text-white w-full text-center" onClick={() => setMobileHomeDropdownOpen(false)}>Home1</Link>
                <Link to="/home2" className="block py-2 text-lg text-white w-full text-center" onClick={() => setMobileHomeDropdownOpen(false)}>Home2</Link>
              </div>
            )}
          </div>
          {/* Services Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} className="block py-4 text-2xl text-white w-full text-center bg-[#002346F2]">Services <ChevronDown size={20} className="inline" /></button>
            {/* Services dropdown options */}
            {servicesDropdownOpen && (
              <div className="w-full flex flex-col items-center">
                <Link to="/services/criminal" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Criminal Law</Link>
                <Link to="/services/civil" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Civil Law</Link>
                <Link to="/services/family" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Family Law</Link>
                <Link to="/services/corporate" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Corporate Law</Link>
                <Link to="/services/real-estate" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Real Estate Law</Link>
                <Link to="/services/immigration" className="block py-2 text-lg text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Immigration Law</Link>
                <Link to="/services" className="block py-2 text-lg text-blue-300 w-full text-center" onClick={() => setHomeDropdownOpen(false)}>View All Services</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="block py-4 text-2xl text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>About Us</Link>
          <Link to="/blog" className="block py-4 text-2xl text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Blog</Link>
          <Link to="/contact" className="block py-4 text-2xl text-white w-full text-center" onClick={() => setHomeDropdownOpen(false)}>Contact Us</Link>
        </nav>
      )}

      <div className="flex items-center space-x-4">
        <button onClick={handleDarkModeToggle} className="flex items-center bg-[#242424] text-white rounded-lg px-3 py-2 hover:bg-[#333333] transition-colors">{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
        <div className="relative">
          <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold hover:bg-teal-600 transition-colors border-none outline-none focus:outline-none focus:ring-0 focus:border-none">{getInitials(user?.firstName, user?.lastName)}</button>
          {profileDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>
              <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"><LogOut size={16} className="mr-2" />Logout</button>
            </div>
          )}
        </div>
      </div>

      {(servicesDropdownOpen || profileDropdownOpen) && (
        <div className="fixed inset-0 z-40" onClick={() => { setServicesDropdownOpen(false); setProfileDropdownOpen(false); }} />
      )}
    </header>
  );
};

export default Header;

// Add this to the bottom of the file for sticky fallback support
// You can move this to your main CSS if preferred
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .sticky-header-fallback {
      position: sticky !important;
      top: 0 !important;
      z-index: 50 !important;
    }
  `;
  document.head.appendChild(style);
}