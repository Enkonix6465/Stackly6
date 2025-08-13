import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import AOS from "aos";
import Footer from "../components/Footer.jsx";
//import '../aos-custom.css';
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import criminal from '../assets/criminalHero.mp4';
import criminalPhoto from '../assets/criminalPhoto.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333';

const Criminal = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  // Smooth scroll methods
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Page Content
  const benefits = [
    "Expert representation at every stage of criminal proceedings",
    "Thorough case analysis and evidence gathering",
    "Confidential and strategic legal advice",
    "Aggressive defense against prosecution",
    "Guidance on plea bargains and settlement options",
    "Support and advocacy in bail hearings",
  ];

  const services = [
    {
      title: "Bail & Remand Hearings",
      description:
        "Swift intervention for bail applications, minimizing custody time and protecting your rights",
    },
    {
      title: "Pre-Charge Consultations",
      description: "Early legal guidance for individuals under investigation",
    },
    {
      title: "Trial Defense",
      description: "Meticulous trial preparation and robust advocacy in court",
    },
    {
      title: "Appeals & Post-Conviction",
      description:
        "Challenging verdicts and sentences, seeking justice through the appellate courts",
    },
    {
      title: "White-Collar Crime",
      description:
        "Specialized defense for fraud, embezzlement, and regulatory offenses",
    },
    {
      title: "Juvenile Criminal Defense",
      description: "Protection and advocacy for minors facing criminal charges",
    },
  ];

  const howItWorks = [
    "Schedule a confidential consultation",
    "We assess your situation and legal options",
    "Receive a tailored defense strategy",
    "Navigate investigation and hearings with ongoing support",
    "Achieve the best possible outcome with our expert team",
  ];

  const features = [
    "Direct access to senior attorneys",
    "24/7 client helpline",
    "Case status updates on our secure portal",
    "Comprehensive case documentation",
  ];

  const pricingTiers = [
    {
      title: "Consult",
      price: "$199",
      priceNote: "/session",
      features: [
        "Single consultation with a senior lawyer",
        "Case review & legal road-map",
        "Actionable advice for next steps",
        "Monthly reports and full online access",
        "*Fair use policy applies",
      ],
      buttonText: "Book Consult",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },{
      title: "Standard Defense",
      price: "$1,299",
      priceNote: "/case (initial)",
      features: [
        "All features from Consult",
        "Representation at investigation & bail",
        "Detailed evidence review & strategy",
        "Preparation for trial (up to 2 hearings)",
      ],
      buttonText: "Contact Us",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Comprehensive Defense",
      price: "$2,999",
      priceNote: "/case",
      features: [
        "Full representation through trial",
        "Post-conviction motions & appeals",
        "24/7 access to legal team",
        "Weekly case status reports",
      ],
      buttonText: "Start Now",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    }
    // Add more pricing tiers here if needed
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          user={user}
          onLogout={onLogout}
        />
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={criminal} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Criminal Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Expert representation at every stage of criminal proceedings.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="key-benefits"
        className="w-full py-16 px-4 transition-colors duration-300"
  style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              Key Advantages
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              Committed to upholding your rights and delivering justice at every
              turn.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Benefits List */}
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {benefits.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#F8F4E3" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#333333" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-start justify-start h-full" data-aos="zoom-in" data-aos-delay="600">
              <img
                src={criminalPhoto}
                alt="Criminal Law"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3 className="text-2xl font-bold mb-4 self-center lg:self-start" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>Your Defense. Our Priority.</h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                Experience client-first criminal law representation designed to
                achieve the best results for your case.
              </p>
            </div>
            {/* More Benefits */}
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#F8F4E3" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#333333" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{
          background: "#002346",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              Criminal Law Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F8F4E3", color: "#333333" }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#002346" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl text-[#002346] font-bold mb-4">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-2" style={{ background: darkMode ? '#002346' : '#F8F4E3' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4" >
            <span style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>How We Work</span>
          </h2>
          <p className="text-center text-[#002346] mb-12 max-w-2xl mx-auto">
            <span style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>Our streamlined 7-step process ensures a strong and proactive
            criminal defense.</span>
          </p>
          <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-2">
            {/* STEP 1 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <UserIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    01
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Initial Consultation
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Private session to discuss the alleged offense, your rights,
                  and initial concerns.
                </p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <DocumentDuplicateIcon className="w-7 h-7 text-[#002346]" />
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest">
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Case Assessment
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Thoroughly review FIRs, police reports, witness statements,
                  and all prosecution evidence.
                </p>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#333333] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ClipboardDocumentCheckIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Defense Strategy
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Develop a defense plan—anticipate prosecution steps, identify
                  weaknesses, and prepare motions.
                </p>
              </div>
            </div>
            {/* STEP 4 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "84px",
                  height: "92px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <PaperAirplaneIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Filing & Representation
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  File necessary applications: bail, anticipatory bail, or
                  discharge, and begin court representation.
                </p>
              </div>
            </div>
            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <BriefcaseIcon className="w-7 h-7 text-[#002346]" />
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest">
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Hearings & Trial
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Advocate in court—cross-examine witnesses, present evidence,
                  and challenge prosecution claims.
                </p>
              </div>
            </div>
            {/* STEP 6 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#333333] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "84px",
                  height: "92px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <SparklesIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Updates & Guidance
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Provide regular updates, explain legal proceedings, and offer
                  counsel at every stage.
                </p>
              </div>
            </div>
            {/* STEP 7 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Cog6ToothIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Resolution & Appeals
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Court decision—assist with bail, sentencing, appeals, or
                  expungement where necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  Our Client Features
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  Empowering clients at every stage.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Our practice delivers tailored criminal defense backed by
                  in-depth legal knowledge, courtroom experience, and
                  personalized attention.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Receive regular updates and have your questions answered
                  promptly, so you're never left in the dark about your case.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Access our secure client portal for all your documents, case
                  calendars, and direct attorney messaging.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We stand by you, whether you need an immediate bail
                  application or representation in a complex trial.
                </p>
              </div>
            </div>
            {/* Features as cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              data-aos="fade-left"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                style={{ background: "#F8F4E3", color: "#333333" }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    Benefit from {feature.toLowerCase()} as a valued client.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section */}
      <section
  id="pricing-section"
  className="w-full py-16 px-4 transition-colors duration-300"
  style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Secure Your Defense Now
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            No matter the charge, our team is ready to protect your future.
          </p>
          {/* Service Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, i) => (
              <div key={i} style={{background: COLOR_2, color: COLOR_3, border: `2px solid ${COLOR_1}`}} className="rounded-2xl p-6 border-2 shadow-md hover:scale-105 transition-all duration-300">
                {tier.badge &&
                  <div className="bg-white text-[#002346] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>}
                <h3 className="text-2xl font-bold mb-2" style={{color: COLOR_1}}>{tier.title}</h3>
                <div className="text-4xl font-bold mb-4" style={{color: COLOR_3}}>{tier.price}<span className="text-lg">{tier.priceNote}</span></div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === 'Book Consult' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/home2#consultation-form')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Contact Us' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/contact')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Start Now' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/home')}
                  >
                    {tier.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  <Footer darkMode={darkMode} setDarkMode={setDarkMode} bgColor={darkMode ? undefined : "#F8F4E3"} />
    </div>
  );
};

export default Criminal;
