import React from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
  // You may want to keep user state here if needed
  const [user, setUser] = React.useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/home" element={<HomePage user={user} onLogout={handleLogout} />} />
          <Route path="/services/criminal" element={<Criminal user={user} onLogout={handleLogout} />} />
          <Route path="/blog" element={<Blog user={user} onLogout={handleLogout} />} />
          <Route path="/contact" element={<ContactUs user={user} onLogout={handleLogout} />} />
          <Route path="/services/corporate" element={<Corporate user={user} onLogout={handleLogout} />} />
          <Route path="/services/civil" element={<Civil user={user} onLogout={handleLogout} />} />
          <Route path="/services/family" element={<Family user={user} onLogout={handleLogout} />} />
          <Route path="/services/real-estate" element={<RealEstate user={user} onLogout={handleLogout} />} />
          <Route path="/services" element={<Services user={user} onLogout={handleLogout} />} />
          <Route path="/services/immigration" element={<Immigration user={user} onLogout={handleLogout} />} />
          <Route path="/about" element={<AboutUs user={user} onLogout={handleLogout} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard user={user} onLogout={handleLogout} />} />
          <Route path="/home2" element={<Home2 user={user} onLogout={handleLogout} />} />
          <Route path="/blog/bail-application-process" element={<BailApplicationProcess user={user} onLogout={handleLogout} />} />
          <Route path="/blog/white-collar-crime-defenses" element={<WhiteCollarCrimeDefenses user={user} onLogout={handleLogout} />} />
          <Route path="/blog/understanding-your-rights" element={<UnderstandingYourRights user={user} onLogout={handleLogout} />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;