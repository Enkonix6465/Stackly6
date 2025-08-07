import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AOS from 'aos';
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import corporate from '../assets/corporateHero.mp4';

const Corporate = ({ darkMode, setDarkMode, user, onLogout }) => {
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const benefits = [
    "End-to-end legal support for all stages of corporate growth",
    "Meticulous contract review and drafting to protect your interests",
    "Confidential guidance on mergers, acquisitions, and restructuring",
    "Comprehensive compliance and governance advice",
    "Risk management for directors, officers, and stakeholders",
    "Proactive representation in regulatory and commercial disputes",
  ];

  const services = [
    {
      title: "Business Formation & Structuring",
      description: "Strategic guidance for incorporating companies, startups, partnerships, and joint ventures"
    },
    {
      title: "Contracts & Agreements",
      description: "Drafting, negotiation, and review of commercial contracts, NDAs, employment agreements, and more"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Legal due diligence, transaction structuring, and regulatory filings for M&A deals"
    },
    {
      title: "Regulatory Compliance",
      description: "Advice on company law, sectoral regulations, and ongoing compliance audits"
    },
    {
      title: "Shareholder Disputes",
      description: "Expert representation and mediation in internal company or partnership disputes"
    },
    {
      title: "Corporate Governance",
      description: "Board advisory, risk management, policy development, and compliance with listing rules"
    }
  ];

  const howItWorks = [
    "Schedule a strategy session for your company",
    "We analyze your needs, documents, and objectives",
    "Expert lawyers prepare and review all relevant documentation",
    "Proactive support in negotiations and regulatory meetings",
    "Ongoing assistance with compliance and future business decisions"
  ];

  const features = [
    "Direct access to corporate law specialists",
    "Timely document review and turnaround",
    "Custom compliance checklists",
    "On-demand updates via our client portal"
  ];

  const pricingTiers = [
    {
      title: "Consult",
      price: "$299",
      priceNote: "/session",
      features: [
        "Consultation with a corporate law expert",
        "Document review (up to 20 pages)",
        "Initial business appraisal & options"
      ],
      buttonText: "Book Consult",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300"
    },
    {
      title: "Annual Retainer",
      price: "$4,999",
      priceNote: "/year",
      features: [
        "All Consult services",
        "Unlimited contract drafting & review",
        "Compliance audits & filings",
        "Board advisory & risk management"
      ],
      buttonText: "Contact Us",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105"
    },
    {
      title: "Full Corporate Support",
      price: "$9,999",
      priceNote: "/year",
      features: [
        "End-to-end representation for all corporate matters",
        "M&A, restructuring, and dispute resolution",
        "Dedicated legal team & priority support",
        "Monthly strategy calls & reports"
      ],
      buttonText: "Start Now",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300"
    }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-[#002346]' : 'bg-white'}`} style={{overflowX: 'hidden'}}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} sticky={true} />
      </div>
      {/* Hero Section with Video */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={corporate} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Corporate Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            End-to-end legal support for all stages of corporate growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-4 transition-colors duration-300" style={{ backgroundColor: darkMode ? '#002346' : '#f9f9f9' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#002346' }} data-aos="fade-down">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ backgroundColor: darkMode ? '#003366' : '#fff' }} data-aos="fade-up">
                <SparklesIcon className="w-10 h-10 mb-4" style={{ color: '#B57560' }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: darkMode ? '#fff' : '#002346' }}>
                  {benefit}
                </h3>
                <p className="text-center text-sm" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
                  {/* Add any additional descriptive text here */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-2 bg-[#f9f5f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4">
            How We Work
          </h2>
          <p className="text-center text-[#a4704a] mb-12 max-w-2xl mx-auto">
            Our 7-step process for handling your corporate legal needs with precision and expertise.
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
                  <span className="material-icons w-7 h-7">business_center</span>
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
                  Discuss your corporate goals, challenges, and legal requirements.
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
                  <span className="material-icons w-7 h-7 text-[#002346]">description</span>
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest">
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Document Review
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Analyze contracts, company policies, compliance documents, and filings.
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
                  <span className="material-icons w-7 h-7">gavel</span>
                  <span className="mt-1 text-base font-bold tracking-widest">
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Legal Strategy
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Develop a custom plan for transactions, compliance, or dispute resolution.
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
                  <span className="material-icons w-7 h-7">send</span>
                  <span className="mt-1 text-base font-bold tracking-widest">
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Drafting & Filings
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Prepare, file, and serve corporate documents, agreements, and notices.
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
                  <span className="material-icons w-7 h-7 text-[#002346]">groups</span>
                  <span className="mt-1 text-base font-bold text-[#002346] tracking-widest">
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Negotiation & Representation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Advocate for your interests in negotiations, meetings, and regulatory hearings.
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
                  <span className="material-icons w-7 h-7">update</span>
                  <span className="mt-1 text-base font-bold tracking-widest">
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Ongoing Support
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Regular updates and legal guidance throughout your corporate matter.
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
                  <span className="material-icons w-7 h-7">check_circle</span>
                  <span className="mt-1 text-base font-bold tracking-widest">
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="text-[#002346] font-semibold text-center text-base">
                  Completion & Next Steps
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Finalize transactions, compliance, or dispute resolution and advise on future needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: 'linear-gradient(120deg, #B57560, #AABF91)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: '#002346' }}>
                  Our <span style={{ color: '#AABF91' }}>Client Features</span>
                </h2>
                <p className="text-xl mb-8" style={{ color: '#fff' }}>
                  Supporting leaders and teams every step of the way.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Your business deserves proactive, attentive, and informed legal counsel for every deal and decision.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Track all your matters online, schedule calls, and stay ahead of compliance deadlines with our digital tools.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Access document templates, policy guides, and timely business law updates through our secure portal.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  We adapt to your business needs, whether you are a startup, SME, or a multinational.
                </p>
              </div>
            </div>
            {/* Features as cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">
              {features.map((feature, index) => (
                <div key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: '#fff', color: '#002346' }}>
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    Benefit from {feature.toLowerCase()} as our corporate client.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section */}
      <section id="pricing-section" className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? '#002346' : '#fff' }}>
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#002346' }} data-aos="fade-down" data-aos-delay="50">
            Secure Your Corporate Advantage
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#B57560' }} data-aos="fade-up" data-aos-delay="100">
            Build and grow your company with expert legal partners by your side.
          </p>
          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, i) => (
              <div key={i} style={tier.boxStyle}
                className={tier.className}>
                {tier.badge &&
                  <div className="bg-white text-[#B57560] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>}
                <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                <div className="text-4xl font-bold mb-4">{tier.price}<span className="text-lg">{tier.priceNote}</span></div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                <button className={tier.buttonClass}>{tier.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Corporate;