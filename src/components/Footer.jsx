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
      className={` ${darkMode ? "bg-[#002346] text-[#F8F4E3]" : "text-[#333333]"
        } px-4 sm:px-8 py-10 border-t-1 border-black font-sans transition-colors duration-300 overflow-x-hidden w-full`}
      style={!darkMode && bgColor ? { background: bgColor } : undefined}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
        {/* Logo Only */}
        <div className="col-span-1 flex items-center justify-center lg:justify-start">
          <div className=" ">
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
        <div className="flex flex-col">
          <h4
            className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
          >
            {t("quickLinks")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/home"
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
        <div className="flex flex-col">
          <h4
            className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
          >
            {t("practiceAreas")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/criminal"
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
                className={`hover:underline ${darkMode
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
        <div className="flex flex-col">
          <h4
            className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"}`}
          >
            {t("contact")}
          </h4>
          <div className="gap-2 flex flex-col mb-2" >
            <p className="text-sm leading-relaxed">
              <span className={`font-semibold ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"}`}>{t("address")}:</span>
              <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}> 456 Justice Street, Lawville</span></p>
            <p><span className={`font-semibold ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"}`}>{t("phone")}:</span>
              <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}> (987) 654-3210</span></p>
            <p><span className={`font-semibold ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"}`}>{t("email")}:</span>
              <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}> info@bluejusticelaw.com</span></p>
            <p> <span className={`font-semibold ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"}`}>{t("hours")}:</span>
              <span className={darkMode ? "text-[#F8F4E3]" : "text-[#333333]"}> {t("workingHours")}</span></p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform rounded-full p-2 shadow bg-opacity-80"
              style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
            >
              <FaFacebookF color={darkMode ? "#F8F4E3" : "#002346"} size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform rounded-full p-2 shadow bg-opacity-80"
              style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
            >
              <FaLinkedinIn color={darkMode ? "#F8F4E3" : "#002346"} size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform rounded-full p-2 shadow bg-opacity-80"
              style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
            >
              <FaInstagram color={darkMode ? "#F8F4E3" : "#002346"} size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform rounded-full p-2 shadow bg-opacity-80"
              style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
            >
              <FaTwitter color={darkMode ? "#F8F4E3" : "#002346"} size={22} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h4
            className={`text-lg font-semibold mb-3 ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
              }`}
          >
            {t("newsletter")}
          </h4>
          <p
            className={`text-sm mb-2 ${darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
              }`}
          >
            {t("newsletterDesc")}
          </p>
          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder={t("yourEmail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-t sm:rounded-l sm:rounded-t-none border text-sm focus:outline-none focus:ring-2 focus:ring-[#26A0A2] ${darkMode
                  ? "border-[#F8F4E3] bg-[#002346] text-[#F8F4E3]"
                  : "border-[#002346] bg-[#F8F4E3] text-[#333333]"
                  }`}
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none text-sm transition-colors font-semibold shadow focus:outline-none focus:ring-2 focus:ring-[#26A0A2]`}
                style={{
                  backgroundColor: darkMode ? "#F8F4E3" : "#002346",
                  color: darkMode ? "#002346" : "#F8F4E3",
                }}
              >
                {t("subscribe")}
              </button>
            </div>
            {subscribed && (
              <span
                className={`mt-2 text-xs font-semibold ${darkMode ? "text-[#F8F4E3]" : "text-[#002346]"
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
        className={`border-t mt-10 pt-4 text-center text-sm ${darkMode
          ? "border-[#F8F4E3] text-[#F8F4E3]"
          : "border-[#002346] text-[#333333]"
          }`}
      >
        <p className="mb-2">© 2025 Blue Justice Law. {t("allRightsReserved")}</p>

      </div>
    </footer>
  );
};

export default Footer;
