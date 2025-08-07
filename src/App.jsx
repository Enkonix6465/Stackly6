import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Criminal from './services/Criminal';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Corporate from './services/Corporate';
import Civil from './services/Civil';
import Family from './services/Family';
import RealEstate from './services/RealEstate';
import Immigration from './services/Immigration';
import Services from './services/Services';
import AboutUs from './pages/AboutUs';
import AdminDashboard from './pages/AdminDashboard';
import Home2 from './pages/Home2';
import UnderstandingYourRights from './pages/UnderstandingYourRights';
import BailApplicationProcess from './pages/BailApplicationProcess';
import WhiteCollarCrimeDefenses from './pages/WhiteCollarCrimeDefences';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('verdict-dark-mode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem('verdict-dark-mode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setDarkMode={setDarkMode} onLogin={handleLogin} />} />
          <Route path="/home" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/criminal" element={<Criminal darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/contact" element={<ContactUs darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/corporate" element={<Corporate darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/civil" element={<Civil darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/family" element={<Family darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/real-estate" element={<RealEstate darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services" element={<Services darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/services/immigration" element={<Immigration darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/about" element={<AboutUs darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/home2" element={<Home2 darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/blog/bail-application-process" element={<BailApplicationProcess darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/blog/white-collar-crime-defenses" element={<WhiteCollarCrimeDefenses darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
          <Route path="/blog/understanding-your-rights" element={<UnderstandingYourRights darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;