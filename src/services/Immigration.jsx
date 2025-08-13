import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import immigration from '../assets/immigrationHero.mp4';
import immigrationPhoto from '../assets/immigrationPhoto.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333';

const Immigration = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) benefitsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Immigration law-specific content
  // Pricing tiers for the final CTA/Pricing Section
  const pricingTiers = [
    {
      title: "Full Representation",
      price: "$2,199",
      priceNote: "/case",
      features: [
        "Representation in hearings and appeals",
        "Unlimited attorney communication*",
        "Emergency support and resubmissions",
        "Monthly reports and full online access",
        "*Fair use policy applies",
      ],
      buttonText: "Start Now",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },{
      title: "Case Filing",
      price: "$849",
      priceNote: "/case (initial)",
      features: [
        "All Consult services",
        "Drafting, filing & processing suit or response",
        "Representation at first hearing",
        "Settlement/ADR attempt included",
      ],
      buttonText: "Contact Us",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Full Litigation",
      price: "$2,499",
      priceNote: "/case",
      features: [
        "End-to-end representation through trial and judgment",
        "All court appearances",
        "Drafting of all motions, written statements, affidavits",
        "Monthly progress calls & reports",
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
  const benefits = [
  "Experienced support through every immigration stage",
  "Document preparation and review to minimize refusals",
  "Latest knowledge on law and policy changes",
  "Advocacy in appeals, hearings, and consular processes",
  "Personalized strategy for every unique case",
  "Transparent communication at every step",
  ];

  const services = [
    {
      title: "Visa Applications",
      description:
        "Preparation and submission of visitor, student, work, and business visa applications.",
    },
    {
      title: "Permanent Residency & Green Cards",
      description:
        "End-to-end handling of PR, green card, and family/class-based sponsorship applications.",
    },
    {
      title: "Citizenship & Naturalization",
      description:
        "Expert assistance with applications, interviews, and documentation for citizenship.",
    },
    {
      title: "Deportation Defense & Appeals",
      description:
        "Representation in immigration court, appeals, and challenging removal orders.",
    },
    {
      title: "Employer & Sponsorship Solutions",
      description:
        "Support for companies and individuals with LMIA, sponsorships, and compliance.",
    },
    {
      title: "Humanitarian & Refugee Cases",
      description:
        "Applications for asylum, protected person status, and other humanitarian programs.",
    },
  ];

  const howItWorks = [
    "Schedule a confidential consultation to discuss your goals or immigration needs",
    "Get a document checklist and personalized review of your situation",
    "We prepare, file, and track your application",
    "Regular updates and guidance until decision or landing",
    "Ongoing support for appeals, extensions, or status changes",
  ];

  const features = [
    "Experienced support through every immigration stage",
    "Document preparation and review to minimize refusals",
    "Latest knowledge on law and policy changes",
    "Advocacy in appeals, hearings, and consular processes",
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? "bg-[#367588]" : "bg-[#F8F4E3]"}`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#F8F4E3] dark:bg-[#367588] shadow-lg">
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', background: darkMode ? '#367588' : '#F8F4E3' }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={immigration} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6" style={{ color: '#F8F4E3', }} data-aos="fade-down">
            Immigration Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#333333', }} data-aos="fade-up">
            Experienced support through every immigration stage.
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
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              Comprehensive immigration solutions for individuals, families, and
              employers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {benefits.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={immigrationPhoto}
                alt="Immigration"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                Your Future. Our Commitment.
              </h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                We guide you through the complex world of immigration with care
                and expertise.
              </p>
            </div>
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
                <div
                  key={idx + 3}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>
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
            <h2 className="text-5xl font-bold text-white">
              Immigration Services
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
          <h2 className="text-4xl md:text-5xl font-semibold text-[#367588] text-center mb-4">
            <span style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>How We Work</span>
          </h2>
          <p className="text-center text-[#333333] mb-12 max-w-2xl mx-auto">
            <span style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>Our 7-step process to guide you on your immigration journey.</span>
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
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Consultation
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Schedule an initial confidential consultation to discuss your
                  plans.
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
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Document Preparation
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Prepare and organize necessary documentation.
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
                  <ClipboardDocumentCheckIcon className="w-7 h-7 text-[#F8F4E3]" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Checklist
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Get a tailored document checklist for your application.
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
                  <PaperAirplaneIcon className="w-7 h-7 text-[#F8F4E3]" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Submission
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  File your full immigration application.
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
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Representation
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  We liaise and represent you with authorities as needed.
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
                  <SparklesIcon className="w-7 h-7 text-[#F8F4E3]" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Track & Support
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Track the process and respond to requests.
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
                  <Cog6ToothIcon className="w-7 h-7 text-[#F8F4E3]" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Resolution
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Final decision and next steps—ongoing legal support, if
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: '#002346' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  Our Client Features
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  Clarity and support for a truly global clientele.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We serve clients from all backgrounds, languages, and
                  countries.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Track your case from anywhere in the world, 24/7.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Get reminders and recommendations long before key deadlines.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Your privacy and goals—always our first priority.
                </p>
              </div>
            </div>
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
                    {`Benefit from ${feature.toLowerCase()} as our immigration client.`}
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
            Take the Next Step—Begin Your Immigration Journey
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Expert support for dreams, reunification, and new
            beginnings—worldwide.
          </p>
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
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
};

export default Immigration;
