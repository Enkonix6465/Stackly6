/* eslint-disable no-unused-vars */
import lawAndOrder from "../assets/lawAndOrder.jpg";
import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  const [isSignup, setIsSignup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminEmail: "",
    adminPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Helper to log any event to localStorage in a consistent format
  const logUserEvent = (email, name, event) => {
    const now = new Date();
    const newLog = {
      email,
      name,
      loginTime: now.toLocaleTimeString(),
      loginDate: now.toLocaleDateString(),
      event, // 'login' or 'signup'
    };
    const logins = JSON.parse(localStorage.getItem("userLogins") || "[]");
    logins.push(newLog);
    localStorage.setItem("userLogins", JSON.stringify(logins));
  };

  // USER LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const found = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    if (!found) {
      alert("No such user registered. Please sign up first.");
      return;
    }

    const fullName = `${found.firstName} ${found.lastName}`;
    logUserEvent(found.email, fullName, "login");

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        firstName: found.firstName,
        lastName: found.lastName,
        email: found.email,
      }),
    );

    onLogin({
      firstName: found.firstName,
      lastName: found.lastName,
      email: found.email,
    });
    navigate("/home");
  };

  // USER SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    if (users.some((u) => u.email === formData.email)) {
      alert("User already registered. Please login.");
      return;
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    users.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    logUserEvent(
      userData.email,
      `${userData.firstName} ${userData.lastName}`,
      "signup",
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      }),
    );

    const { password, ...loginUser } = userData;
    onLogin(loginUser);
    navigate("/home");
  };

  // ADMIN LOGIN
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      formData.adminEmail === ADMIN_EMAIL &&
      formData.adminPassword === ADMIN_PASSWORD
    ) {
      logUserEvent(ADMIN_EMAIL, "Admin", "login");

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          firstName: "Admin",
          lastName: "",
          email: ADMIN_EMAIL,
        }),
      );

      onLogin({ email: ADMIN_EMAIL, isAdmin: true });
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center transition duration-300 relative"
      style={{
        backgroundImage: `url(${lawAndOrder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`bg-[#f3f4f6] ${darkMode ? "dark:bg-[#1e293b]" : ""} p-8 rounded-lg shadow-md w-full max-w-md mx-auto relative z-10`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-[#002346]"}`}
          >
            {isAdmin
              ? "Admin Login - Verdict"
              : isSignup
                ? "Sign Up for Verdict"
                : "Login to Verdict"}
          </h2>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`flex items-center rounded-full px-3 py-1 ${darkMode ? "bg-[#AABF91]" : "bg-[#B57560]"}`}
          >
            <Sun size={16} className="mr-1" /> /{" "}
            <Moon size={16} className="ml-1" />
          </button>
        </div>

        {/* User/Admin TOGGLE */}
        <div className="flex items-center justify-center mb-6">
          <span
            className={`${!isAdmin ? "font-bold underline" : "text-gray-500"} cursor-pointer px-2`}
            onClick={() => setIsAdmin(false)}
          >
            User
          </span>
          <span className="mx-2 text-gray-400">|</span>
          <span
            className={`${isAdmin ? "font-bold underline" : "text-gray-500"} cursor-pointer px-2`}
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
        ) : // USER FORM
        !isSignup ? (
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
            <button
              type="submit"
              className="w-full bg-[#002346] text-white py-2 rounded hover:bg-[#1a3b6f] transition-colors"
            >
              Login
            </button>
          </form>
        ) : (
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
            <button
              type="submit"
              className="w-full bg-[#002346] text-white py-2 rounded hover:bg-[#1a3b6f] transition-colors"
            >
              Sign Up
            </button>
          </form>
        )}

        {!isAdmin && (
          <p className="mt-4 text-sm text-center text-[#002346] dark:text-white">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
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
