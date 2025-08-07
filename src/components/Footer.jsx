
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import verdictLogo from '../assets/verdictLogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#1e293b] text-[#1E3A8A] dark:text-[#F8FAFC] px-6 py-10 font-sans transition-colors duration-300 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Name */}
        <div className="col-span-1">
          <img src={verdictLogo} alt="Verdict Law Logo" className="mb-2 w-12 h-12 rounded-full object-cover" />
          <h2 className="font-lora text-xl font-bold">Verdict Law</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services/criminal" className="hover:underline">Criminal Law</a></li>
            <li><a href="/services/family" className="hover:underline">Family Law</a></li>
            <li><a href="/services/corporate" className="hover:underline">Corporate Law</a></li>
            <li><a href="/services/civil" className="hover:underline">Civil Law</a></li>
            <li><a href="/services/real-estate" className="hover:underline">Real Estate Law</a></li>
            <li><a href="/services/immigration" className="hover:underline">Immigration Law</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">
            <strong>Address:</strong> 456 Justice Street, Lawville<br />
            <strong>Phone:</strong> (987) 654-3210<br />
            <strong>Email:</strong> info@bluejusticelaw.com<br />
            <strong>Hours:</strong> Mon–Fri, 9 AM – 6 PM
          </p>
          <div className="flex space-x-3 mt-2 md:mt-0 text-[#0F766E] dark:text-[#AABF91]">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-2">Stay updated with legal tips and news.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l border border-gray-300 dark:border-gray-600 text-sm
                         bg-white dark:bg-[#334155] text-[#1E3A8A] dark:text-[#F8FAFC]"
            />
            <button className="bg-[#1E3A8A] dark:bg-[#AABF91] text-white dark:text-[#002346] px-4 py-2 rounded-r text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-[#CBD5E1] dark:border-[#344561] mt-10 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Blue Justice Law. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;