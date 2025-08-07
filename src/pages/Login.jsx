import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const ADMIN_EMAIL = 'admin@verdict.com';
const ADMIN_PASSWORD = 'adminpassword';

const Login = ({ setDarkMode, onLogin }) => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminEmail: '',
    adminPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // USER LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    // Normally, you would validate real user credentials here
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: formData.email
    };
    // Reject login if admin credentials are used
    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    onLogin(userData);
    navigate('/home');
  };

  // USER SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Prevent admin credentials from being used for signup
    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    };
    onLogin(userData);
    navigate('/home');
  };

  // ADMIN LOGIN
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      formData.adminEmail === ADMIN_EMAIL &&
      formData.adminPassword === ADMIN_PASSWORD
    ) {
      // You can set an 'admin' flag in context if needed
      onLogin({ email: ADMIN_EMAIL, isAdmin: true });
      navigate('/admin-dashboard');
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-[#002346] transition duration-300 px-4" style={{overflowX: 'hidden'}}>
      <div className="bg-[#f3f4f6] dark:bg-[#1e293b] p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#002346] dark:text-white">
            {
              isAdmin
                ? 'Admin Login - Verdict'
                : isSignup
                  ? 'Sign Up for Verdict'
                  : 'Login to Verdict'
            }
          </h2>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="flex items-center bg-[#B57560] dark:bg-[#AABF91] rounded-full px-3 py-1"
          >
            <Sun size={16} className="mr-1" /> / <Moon size={16} className="ml-1" />
          </button>
        </div>

        {/* User/Admin TOGGLE */}
        <div className="flex items-center justify-center mb-6">
          <span
            className={`${!isAdmin ? 'font-bold underline' : 'text-gray-500'} cursor-pointer px-2`}
            onClick={() => setIsAdmin(false)}
          >
            User
          </span>
          <span className="mx-2 text-gray-400">|</span>
          <span
            className={`${isAdmin ? 'font-bold underline' : 'text-gray-500'} cursor-pointer px-2`}
            onClick={() => setIsAdmin(true)}
          >
            Admin
          </span>
        </div>

        {/* ADMIN FORM */}
        {isAdmin ? (
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input
              type="email"
              name="adminEmail"
              placeholder="Admin Email"
              value={formData.adminEmail}
              onChange={handleInputChange}
              required
              autoComplete="username"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="password"
              name="adminPassword"
              placeholder="Admin Password"
              value={formData.adminPassword}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="w-full bg-[#002346] text-white py-2 rounded hover:bg-[#1a3b6f] transition-colors"
            >
              Login as Admin
            </button>
          </form>
        ) : (
          // USER FORM
          !isSignup ? (
            // Login
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="username"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button type="submit" className="w-full bg-[#002346] text-white py-2 rounded hover:bg-[#1a3b6f] transition-colors">
                Login
              </button>
            </form>
          ) : (
            // Signup
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button type="submit" className="w-full bg-[#002346] text-white py-2 rounded hover:bg-[#1a3b6f] transition-colors">
                Sign Up
              </button>
            </form>
          )
        )}

        {/* Signup/Login LINK: Only Show for User, Not Admin */}
        {!isAdmin && (
          <p className="mt-4 text-sm text-center text-[#002346] dark:text-white">
            {isSignup ? (
              <>
                Already have an account?{' '}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{' '}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </span>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
