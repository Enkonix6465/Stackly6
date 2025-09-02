import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Footer = ({ darkMode, bgColor }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useTranslation();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  return (
    <footer
      className={` ${
        darkMode ? "bg-[#002346] text-[#F8F4E3]" : "text-[#333333]"
      } px-6 py-10 font-sans transition-colors duration-300 overflow-x-hidden w-full`}
      style={!darkMode && bgColor ? { background: bgColor } : undefined}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo Only */}
        <div className="col-span-1 flex items-start">
          <div className="w-28 h-28 flex items-center justify-center overflow-hidden">
            <img
              src={logo1}
              alt="Logo"
              className="w-52 h-52 object-contain"
              style={{
                filter:
                  "grayscale(100%) brightness(0.5) sepia(1) hue-rotate(160deg) saturate(4) contrast(1.2)",
              }}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
            }`}
          >
            {t("quickLinks")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/home"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("services")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h4
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
            }`}
          >
            {t("practiceAreas")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/criminal"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("criminalLaw")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/family"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("familyLaw")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/corporate"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("corporateLaw")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/civil"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("civilLaw")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/real-estate"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("realEstateLaw")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/immigration"
                className={`hover:underline ${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                }`}
              >
                {t("immigrationLaw")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
            }`}
          >
            {t("contact")}
          </h4>
          <p className="text-sm">
            <span
              className={`font-semibold ${
                darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
            >
              {t("address")}:
            </span>{" "}
            <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}>
              456 Justice Street, Lawville
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
            >
              {t("phone")}:
            </span>{" "}
            <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}>
              (987) 654-3210
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
            >
              {t("email")}:
            </span>{" "}
            <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}>
              info@bluejusticelaw.com
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
            >
              {t("hours")}:
            </span>{" "}
            <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}>
              {t("workingHours")}
            </span>
          </p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF color="#002346" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn color="#002346" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="#002346" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter color="#002346" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
            }`}
          >
            {t("newsletter")}
          </h4>
          <p
            className={`text-sm mb-2 ${
              darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
            }`}
          >
            {t("newsletterDesc")}
          </p>
          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <div className="flex">
              <input
                type="email"
                placeholder={t("yourEmail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-l border text-sm ${
                  darkMode
                    ? "border-[#F8F4E3] bg-[#002346] text-[#F8F4E3]"
                    : "border-[#002346] bg-[#F8F4E3] text-[#333333]"
                }`}
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r text-sm transition-colors ${
                  darkMode
                    ? "bg-[#F8F4E3] text-[#002346] hover:bg-[#333333] hover:text-[#F8F4E3]"
                    : "bg-[#002346] text-[#F8F4E3] hover:bg-[#333333] hover:text-[#F8F4E3]"
                }`}
              >
                {t("subscribe")}
              </button>
            </div>
            {subscribed && (
              <span
                className={`mt-2 text-xs font-semibold ${
                  darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
                }`}
              >
                {t("subscribed")}
              </span>
            )}
          </form>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        className={`border-t mt-10 pt-4 text-center text-sm ${
          darkMode
            ? "border-[#F8F4E3] text-[#F8F4E3]"
            : "border-[#002346] text-[#333333]"
        }`}
      >
        <p>© 2025 Blue Justice Law. {t("allRightsReserved")}</p>
        <div className="mt-2 space-x-4">
          <Link
            to="/privacy"
            className={`hover:underline ${
              darkMode
                ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                : "text-[#333333] hover:text-[#002346]"
            }`}
          >
            {t("privacyPolicy")}
          </Link>
          <Link
            to="/terms"
            className={`hover:underline ${
              darkMode
                ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                : "text-[#333333] hover:text-[#002346]"
            }`}
          >
            {t("termsConditions")}
          </Link>
          <Link
            to="/disclaimer"
            className={`hover:underline ${
              darkMode
                ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                : "text-[#333333] hover:text-[#002346]"
            }`}
          >
            {t("disclaimer")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
