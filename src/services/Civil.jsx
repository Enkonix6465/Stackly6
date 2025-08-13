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
import civil from '../assets/civilHero.mp4';
import civilPhoto from '../assets/civilSection.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333'; // dark gray

const Civil = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
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

  const benefits = [
    "Experienced guidance from initiation to final resolution",
    "Thorough analysis of facts, documents, and legal strategy",
    "Personalized representation tailored to your objectives",
    "Clear and frequent client communication",
    "Aggressive advocacy in negotiations and courtrooms",
    "Experience in complex, high-stakes civil matters",
  ];

  const features = [
    "Direct access to civil law specialists",
    "Timely document review and turnaround",
    "Custom compliance checklists",
    "On-demand updates via our client portal"
  ];

  const services = [
    {
      title: "Dispute Resolution",
      description:
        "Litigation and Alternate Dispute Resolution (ADR) including mediation and arbitration for civil and commercial claims.",
    },
    {
      title: "Property & Real Estate Disputes",
      description:
        "Boundary disputes, title actions, landlord-tenant matters, and partition suits handled by experts.",
    },
    {
      title: "Contractual Claims",
      description:
        "Enforcement of contracts, damages, specific performance, and breach of contract representation.",
    },
    {
      title: "Consumer Protection",
      description:
        "Filing and defending consumer cases before forums and commissions.",
    },
    {
      title: "Injunctions & Interim Relief",
      description:
        "Speedy action to prevent harm through temporary restraining orders, stays, and interim breaches.",
    },
    {
      title: "Execution, Appeals, & Enforcement",
      description:
        "Recovery of decrees and post-judgment enforcement, as well as appellate litigation.",
    },
  ];

  const pricingTiers = [
    {
      title: "Consult",
      price: "$199",
      priceNote: "/session",
      features: [
        "Consultation with a civil law expert",
        "Document review (up to 20 pages)",
        "Initial case appraisal & options"
      ],
      buttonText: "Book Consult",
      buttonClass:
        `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className:
        `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`
    },
    {
      title: "Full Litigation",
      price: "$2,499",
      priceNote: "/case",
      features: [
        "End-to-end representation through trial and judgment",
        "All court appearances",
        "Drafting, filing & processing suit or response",
        "Settlement/ADR attempt included"
      ],
      buttonText: "Contact Us",
      buttonClass:
        `w-full bg-[#AABF91] text-${COLOR_1} font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105`,
      badge: "MOST POPULAR",
      boxStyle: { background: COLOR_1, color: COLOR_2 },
      className: `rounded-2xl p-6 border-2 border-${COLOR_1} scale-105`
    },
    {
      title: "Appeals & Enforcement",
      price: "$1,499",
      priceNote: "/case",
      features: [
        "Appellate litigation",
        "Enforcement of decrees",
        "Post-judgment representation",
        "Urgent interim reliefs"
      ],
      buttonText: "Start Now",
      buttonClass:
        `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className:
        `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`
    }
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? `bg-[${COLOR_1}]` : `bg-[${COLOR_2}]`}`}
      style={{overflowX: 'hidden'}}
    >
      <div className={`fixed top-0 left-0 w-full z-[100] ${darkMode ? `bg-[${COLOR_3}]` : `bg-[${COLOR_2}]`} shadow-lg`}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
          sticky={true}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', backgroundColor: COLOR_1 }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={civil} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Civil Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Experienced guidance from initiation to final resolution.
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
              Diligent legal support for individuals, families, and businesses
              in any civil dispute or challenge.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Left column: Benefits */}
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
            {/* Center: Image and Tagline */}
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={civilPhoto}
                alt="Civil Law"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                Your Rights. Our Focus.
              </h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                Dedicated, responsive lawyers—committed to securing the best
                civil outcome for you.
              </p>
            </div>
            {/* Right column: More benefits */}
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
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
              Civil Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: COLOR_2, color: COLOR_3 }}
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

      {/* How It Works */}
      <section className="w-full py-16 px-2" style={{ background: darkMode ? '#002346' : '#F8F4E3' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4">
            <span style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>How We Work</span>
          </h2>
          <p className="text-center text-[#002346] mb-12 max-w-2xl mx-auto">
            <span style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>Our 7-step process to pursue your civil legal matters thoroughly and
            efficiently.</span>
          </p>
          <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-2">
            {/* STEP 1 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_1,
                  color: COLOR_2,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <UserIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    01
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Consultation
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Understand your dispute, rights, and legal options in a
                  confidential session.
                </p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <DocumentDuplicateIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest" style={{color: COLOR_2}}>
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Detailed Case Review
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Assess evidence, contracts, communications, and other relevant
                  documents.
                </p>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_2,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ClipboardDocumentCheckIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Legal Strategy
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Develop a tailored legal plan: negotiation, mediation, or
                  formal litigation.
                </p>
              </div>
            </div>
            {/* STEP 4 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_1,
                  color: COLOR_2,
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "84px",
                  height: "92px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <PaperAirplaneIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Filing & Communications
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Draft, file, and serve legal documents; maintain clear
                  communication throughout.
                </p>
              </div>
            </div>
            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <BriefcaseIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest" style={{color: COLOR_2}}>
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Advocacy & Hearings
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Represent your interests in negotiations, ADR, and court
                  hearings.
                </p>
              </div>
            </div>
            {/* STEP 6 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_2,
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "72px",
                  height: "80px",
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
                  Progress Updates
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Ongoing status reports and legal support at each stage.
                </p>
              </div>
            </div>
            {/* STEP 7 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_1,
                  color: COLOR_2,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Cog6ToothIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Resolution & Next Steps
                </h3>
                <p className="text-[#333333] text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Final court outcome, enforcement, and assistance after
                  judgment, if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: COLOR_2 }}
                >
                  Our Client Features
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  Focused on justice and peace of mind for you.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  We combine deep courtroom experience with sensitivity and
                  practical problem-solving.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  You can view case documents, timelines, and updates online, or
                  call us for personalized support.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  Our team is available for urgent hearings, restraining orders,
                  and last-minute filings.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  Every question is answered with compassion, speed, and
                  clarity.
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
                  style={{ background: COLOR_2, color: COLOR_3 }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {`Benefit from ${feature.toLowerCase()} as our civil client.`}
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
            Secure Justice In Your Civil Matter
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get a fair chance, knowledgeable advocacy, and peace of mind—with
            us.
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

export default Civil;
