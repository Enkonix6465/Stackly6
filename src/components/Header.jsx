import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import logo from "../assets/logo1.png";

export default function Header() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [mobileLanguageDropdown, setMobileLanguageDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  // Robust initials logic: always update on mount, menu open, and storage change
  useEffect(() => {
    const getInitials = () => {
      let currentUser = { firstName: "", lastName: "" };
      try {
        currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
          firstName: "",
          lastName: "",
        };
        // eslint-disable-next-line no-unused-vars
      } catch (e) {
        /* empty */
      }
      const first = currentUser.firstName?.trim?.()[0] || "";
      const last = currentUser.lastName?.trim?.()[0] || "";
      const initials = `${first}${last}`.toUpperCase();
      return initials || "U"; // fallback to 'U' for User
    };
    setInitials(getInitials());
    const handleStorage = () => setInitials(getInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const getInitials = () => {
      let currentUser = { firstName: "", lastName: "" };
      try {
        currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
          firstName: "",
          lastName: "",
        };
        // eslint-disable-next-line no-unused-vars
      } catch (e) {
        /* empty */
      }
      const first = currentUser.firstName?.trim?.()[0] || "";
      const last = currentUser.lastName?.trim?.()[0] || "";
      const initials = `${first}${last}`.toUpperCase();
      return initials || "U";
    };
    setInitials(getInitials());
  }, [isAvatarDropdownOpen, isMobileMenuOpen]);

  // Close avatar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAvatarDropdownOpen && !event.target.closest(".avatar-dropdown")) {
        setIsAvatarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAvatarDropdownOpen]);

  // Use global darkMode and setDarkMode props for dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setHomeDropdown(false);
    setServicesDropdown(false);
    setMobileServicesDropdown(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userLogins");
    // Navigate to welcome page
    navigate("/");
    // Close dropdown
    setIsAvatarDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full shadow-md transition-colors  duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
      style={{ minHeight: "56px", height: "56px" }}
    >
      <div
        className="  mx-auto px-4 sm:px-6 py-2 flex items-center justify-between"
        style={{ minHeight: "56px", height: "56px" }}
      >
        {/* Desktop Navigation - Right Side with Equal Gaps */}
        <nav className="flex items-center w-full justify-between  ">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <a href="/home">
                <img
                  src={logo}
                  alt="LIFE Logo"
                  className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2  ">
            {/* Languages Dropdown */}
            <div className="relative">
              <button
                className={`text-lg font-semibold hover:text-teal flex items-center gap-1 focus:outline-none transition-colors duration-200`}
                style={
                  darkMode
                    ? { color: "#fff", background: "#000" }
                    : { color: "#000", background: "transparent" }
                }
                onClick={() => setLanguageDropdown((open) => !open)}
              >
                {t("languages")}
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {languageDropdown && (
                <div
                  className={`absolute left-0 mt-2 w-40 border rounded shadow-lg z-50 transition-colors duration-200 ${
                    darkMode ? "bg-gray-800 border-gray-600" : "bg-white "
                  }`}
                >
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setLanguageDropdown(false);
                    }}
                  >
                    {t("english")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      setLanguageDropdown(false);
                    }}
                  >
                    {t("arabic")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      i18n.changeLanguage("he");
                      setLanguageDropdown(false);
                    }}
                  >
                    {t("hebrew")}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`text-lg hover:text-teal flex items-center  focus:outline-none transition-colors duration-200`}
                style={
                  darkMode
                    ? { color: "#fff", background: "#000" }
                    : { color: "#000", background: "transparent" }
                }
                onClick={() => setHomeDropdown((open) => !open)}
              >
                {t("home")}
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {homeDropdown && (
                <div
                  className={`absolute left-0 mt-2 w-48 border rounded shadow-lg z-50 transition-colors duration-200 ${
                    darkMode ? "bg-gray-800 border-gray-600" : "bg-white "
                  }`}
                >
                  <Link
                    to="/home"
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setHomeDropdown(false);
                      scrollToTop();
                    }}
                  >
                    {t("home")}1
                  </Link>
                  <Link
                    to="/home2"
                    className={`block px-4 py-3 text-base hover:bg-blue-100 transition-colors duration-200 `}
                    onClick={() => {
                      setHomeDropdown(false);
                      scrollToTop();
                    }}
                  >
                    {t("home")}2
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className={`text-lg font-semibold hover:text-teal transition-colors duration-200  `}
              style={
                darkMode
                  ? { color: "#fff", background: "#000" }
                  : { color: "#000", background: "transparent" }
              }
              onClick={scrollToTop}
            >
              {t("about")}
            </Link>
            <div className="relative">
              <button
                className={`text-lg hover:text-teal flex items-center  focus:outline-none transition-colors duration-200`}
                style={
                  darkMode
                    ? { color: "#fff", background: "#000" }
                    : { color: "#000", background: "transparent" }
                }
                onClick={() => {
                  navigate("/services");
                  scrollToTop();
                }}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                onFocus={() => setServicesDropdown(true)}
                onBlur={() => setServicesDropdown(false)}
              >
                {t("services")}
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesDropdown && (
                <div
                  className={`absolute left-0 mt-2 w-56 border rounded shadow-lg z-50 transition-colors duration-200 ${
                    darkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-200"
                  }`}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer border-b ${
                      darkMode
                        ? "text-white hover:bg-gray-700 border-gray-600"
                        : "text-black hover:bg-gray-100 border-gray-200"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services");
                      scrollToTop();
                    }}
                  >
                    {t("viewAllServices")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/family");
                      scrollToTop();
                    }}
                  >
                    {t("familyLaw")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/civil");
                      scrollToTop();
                    }}
                  >
                    {t("civilLaw")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/corporate");
                      scrollToTop();
                    }}
                  >
                    {t("corporateLaw")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/real-estate");
                      scrollToTop();
                    }}
                  >
                    {t("realEstateLaw")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/criminal");
                      scrollToTop();
                    }}
                  >
                    {t("criminalLaw")}
                  </div>
                  <div
                    className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate("/services/immigration");
                      scrollToTop();
                    }}
                  >
                    {t("immigrationLaw")}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/blog"
              className={`text-lg   hover:text-teal transition-colors duration-200 ${
                darkMode ? "text-white" : "text-black"
              }`}
              style={
                darkMode
                  ? { color: "#fff", background: "#000" }
                  : { color: "#000", background: "transparent" }
              }
              onClick={scrollToTop}
            >
              {t("blog")}
            </Link>
            <Link
              to="/contact"
              className={`text-lg   hover:text-teal transition-colors duration-200 ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={scrollToTop}
              style={
                darkMode
                  ? { color: "#fff", background: "#000" }
                  : { color: "#000", background: "transparent" }
              }
            >
              {t("contact")}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Avatar with Dropdown */}
            <div className="relative avatar-dropdown">
              <div
                onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
                className="w-10 h-10 bg-[#26A0A2] rounded-full flex items-center justify-center text-white font-bold text-base cursor-pointer hover:bg-[#1f8a8c] transition-colors duration-200"
              >
                {initials}
              </div>

              {/* Avatar Dropdown */}
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      <div className="font-medium">User Profile</div>
                      <div className="text-gray-500 text-xs">Signed in</div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm   hover:bg-gray-100 transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Dark Mode Toggle Button for Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {darkMode ? (
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              )}
            </svg>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full ${
              darkMode
                ? "[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600"
                : ""
            }`}
          >
            {/* Languages Dropdown Mobile */}
            <div>
              <button
                onClick={() =>
                  setMobileLanguageDropdown(!mobileLanguageDropdown)
                }
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200`}
                style={
                  darkMode
                    ? { background: "#0F1524", color: "#F8F4E3" }
                    : { background: "#fff", color: "#333333" }
                }
              >
                <span className="font-semibold">{t("languages")}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileLanguageDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileLanguageDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <div
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setMobileLanguageDropdown(false);
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("english")}
                  </div>
                  <div
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      setMobileLanguageDropdown(false);
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("arabic")}
                  </div>
                  <div
                    onClick={() => {
                      i18n.changeLanguage("he");
                      setMobileLanguageDropdown(false);
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("hebrew")}
                  </div>
                </div>
              )}
            </div>
            {/* User Profile Circle at Top */}

            {/* Home Dropdown */}
            <div>
              <button
                onClick={() => setHomeDropdown(!homeDropdown)}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200`}
                style={
                  darkMode
                    ? { background: "#0F1524", color: "#F8F4E3" }
                    : { background: "#fff", color: "#333333" }
                }
              >
                <span className="font-semibold">Home</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    homeDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {homeDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/home1"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("home")}1
                  </Link>
                  <Link
                    to="/home2"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("home")}2
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 text-black `}
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("about")}
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileServicesDropdown(!mobileServicesDropdown)
                }
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200`}
                style={
                  darkMode
                    ? { background: "#0F1524", color: "#F8F4E3" }
                    : { background: "#fff", color: "#333333" }
                }
              >
                <span className="font-semibold">{t("services")}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileServicesDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("viewAllServices")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/family");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("familyLaw")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/civil");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("civilLaw")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/corporate");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("corporateLaw")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/real-estate");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("realEstateLaw")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/criminal");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("criminalLaw")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/immigration");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("immigrationLaw")}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-black hover:bg-gray-100"
              }`}
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              Blog
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-black hover:bg-gray-100"
              }`}
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              Contact Us
            </Link>

            {/* User Profile & Logout for Mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 px-4">
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t("userProfile")}
                </span>
                <div className="w-8 h-8 bg-[#26A0A2] rounded-full flex items-center justify-center  font-bold text-sm">
                  {initials}
                </div>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className={`w-full text-left px-4 py-3 mt-2 text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center `}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {t("logout")}
              </button>
            </div>

            {/* Bottom padding for scroll space */}
            <div className="pb-8"></div>
          </div>
        </div>
      )}
    </header>
  );
}
