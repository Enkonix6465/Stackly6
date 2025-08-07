import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
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

const Criminal = ({ darkMode, setDarkMode, user, onLogout }) => {
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

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
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
        style={{ backgroundColor: darkMode ? "#002346" : "#fff" }}
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
              style={{ color: "#002346" }}
            >
              Key <span style={{ color: "#AABF91" }}>Advantages</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#B57560" }}
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
                  style={{ backgroundColor: "#AABF91" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#002346" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            {/* Center Message */}
            <div
              className="flex flex-col items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#B57560" }}
              >
                Your Defense. Our Priority.
              </h3>
              <p className="text-lg max-w-md" style={{ color: "#002346" }}>
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
                  style={{ backgroundColor: "#AABF91" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#002346" }}>
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
          background: "linear-gradient(120deg, #002346 90%, #B57560 120%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-white">
              Criminal Law <span style={{ color: "#AABF91" }}>Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#fff", color: "#002346" }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#AABF91" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-2 bg-[#f9f5f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4">
            How We Work
          </h2>
          <p className="text-center text-[#a4704a] mb-12 max-w-2xl mx-auto">
            Our streamlined 7-step process ensures a strong and proactive
            criminal defense.
          </p>
          <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-2">
            {/* STEP 1 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-white"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Initial Consultation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Private session to discuss the alleged offense, your rights,
                  and initial concerns.
                </p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#AABF91]"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Case Assessment
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Thoroughly review FIRs, police reports, witness statements,
                  and all prosecution evidence.
                </p>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#B57560] text-white"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Defense Strategy
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Develop a defense plan—anticipate prosecution steps, identify
                  weaknesses, and prepare motions.
                </p>
              </div>
            </div>
            {/* STEP 4 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-white"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Filing & Representation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  File necessary applications: bail, anticipatory bail, or
                  discharge, and begin court representation.
                </p>
              </div>
            </div>
            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#AABF91]"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Hearings & Trial
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Advocate in court—cross-examine witnesses, present evidence,
                  and challenge prosecution claims.
                </p>
              </div>
            </div>
            {/* STEP 6 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#B57560] text-white"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Updates & Guidance
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Provide regular updates, explain legal proceedings, and offer
                  counsel at every stage.
                </p>
              </div>
            </div>
            {/* STEP 7 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-white"
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
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Resolution & Appeals
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
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
        style={{ background: "linear-gradient(120deg, #B57560, #AABF91)" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#002346" }}
                >
                  Our <span style={{ color: "#AABF91" }}>Client Features</span>
                </h2>
                <p className="text-xl mb-8" style={{ color: "#fff" }}>
                  Empowering clients at every stage.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#fff" }}
                >
                  Our practice delivers tailored criminal defense backed by
                  in-depth legal knowledge, courtroom experience, and
                  personalized attention.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#fff" }}
                >
                  Receive regular updates and have your questions answered
                  promptly, so you're never left in the dark about your case.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#fff" }}
                >
                  Access our secure client portal for all your documents, case
                  calendars, and direct attorney messaging.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#fff" }}
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
                  style={{ background: "#fff", color: "#002346" }}
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
        style={{ backgroundColor: darkMode ? "#002346" : "#fff" }}
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: "#002346" }}
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Secure Your Defense Now
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: "#B57560" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            No matter the charge, our team is ready to protect your future.
          </p>
          {/* Service Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic */}
            <div
              style={{ background: "#AABF91", color: "#002346" }}
              className="rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">Consult</h3>
              <div className="text-4xl font-bold mb-4">
                $199<span className="text-lg">/session</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                <li>Single consultation with a senior lawyer</li>
                <li>Case review & legal road-map</li>
                <li>Actionable advice for next steps</li>
              </ul>
              <button className="w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105">
                Book Consult
              </button>
            </div>
            {/* Standard */}
            <div
              style={{ background: "#002346", color: "#AABF91" }}
              className="rounded-2xl p-6 border-2 border-[#AABF91] scale-105"
            >
              <div className="bg-white text-[#B57560] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard Defense</h3>
              <div className="text-4xl font-bold mb-4">
                $1,299<span className="text-lg">/case</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                <li>All features from Consult</li>
                <li>Representation at investigation & bail</li>
                <li>Detailed evidence review & strategy</li>
                <li>Preparation for trial (up to 2 hearings)</li>
              </ul>
              <button className="w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
            {/* Premium */}
            <div
              style={{ background: "#AABF91", color: "#002346" }}
              className="rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">Comprehensive Defense</h3>
              <div className="text-4xl font-bold mb-4">
                $2,999<span className="text-lg">/case</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                <li>Full representation through trial</li>
                <li>Post-conviction motions & appeals</li>
                <li>24/7 access to legal team</li>
                <li>Weekly case status reports</li>
              </ul>
              <button className="w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Criminal;
