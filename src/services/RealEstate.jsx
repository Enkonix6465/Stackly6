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
import realEstate from '../assets/realEstateHero.mp4';

const RealEstate = ({ darkMode, setDarkMode, user, onLogout }) => {
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('key-benefits');
    if (benefitsSection) benefitsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  // Real Estate Law content
  const benefits = [
    "Comprehensive support for property buyers, sellers, and investors",
    "Meticulous due diligence on title, zoning, and compliance",
    "Protection from real estate fraud and defective transactions",
    "Smooth closings with minimal hassle and maximum clarity",
    "Strong negotiation skills for contracts and disputes",
    "Experience in both residential and commercial real estate matters",
  ];

  const services = [
    {
      title: "Purchase & Sale Transactions",
      description: "Review, negotiation, and preparation of sale deeds, purchase agreements, and closing documents."
    },
    {
      title: "Title Search & Due Diligence",
      description: "Thorough investigation of title, encumbrances, and legal compliance before any property transfer."
    },
    {
      title: "Leasing & Tenancy Agreements",
      description: "Drafting, review, and enforcement of residential and commercial lease agreements."
    },
    {
      title: "Property Disputes & Litigation",
      description: "Boundary disputes, specific performance, and legal representation in property-related lawsuits."
    },
    {
      title: "Development & Construction",
      description: "Advisory for developers on RERA, land acquisition, and regulatory permissions."
    },
    {
      title: "Condominium & Association Law",
      description: "Support for owners and associations on by-laws, compliance, and dispute resolution."
    }
  ];

  const howItWorks = [
    "Book a property law consultation",
    "Our lawyers review documents, history, and your priorities",
    "Get clear advice on legal risks, rights, and the best path forward",
    "We handle paperwork, negotiation, and regulatory filings",
    "Receive ongoing guidance until your transaction or dispute is finalized"
  ];

  const features = [
    "Fast document review and processing",
    "Online updates on every step of your matter",
    "Access to secure portal for all deeds and reports",
    "24/7 attention to urgent property issues"
  ];

  const pricingTiers = [
    {
      title: "Consult",
      price: "$199", priceNote: "/property",
      features: [
        "30-min session with a property lawyer",
        "Quick title, compliance, or agreement check",
        "Actionable next steps for buyers/sellers",
      ],
      buttonText: "Book Consult",
      buttonClass: "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className: "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: "Transaction Pack",
      price: "$1,299", priceNote: "/deal",
      features: [
        "All Consult services",
        "Drafting/Review of all deeds and agreements",
        "Liaison with banks and authorities",
        "Representation at registry/closing",
      ],
      buttonText: "Contact Us",
      buttonClass: "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Full Litigation",
      price: "$2,799", priceNote: "/case",
      features: [
        "Representation for property disputes through final order",
        "All hearings, documentation, and filings",
        "Settlement negotiations and mediation",
        "Monthly updates from your legal team",
      ],
      buttonText: "Start Now",
      buttonClass: "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className: "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-[#002346]' : 'bg-white'}`}>
      <div className="sticky top-0 z-50">
        <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
        </div>
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
          <source src={realEstate} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Real Estate Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Comprehensive legal support for property buyers, sellers, and investors.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="key-benefits" className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? '#002346' : '#fff' }}
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#002346' }}>
              Key <span style={{ color: '#AABF91' }}>Advantages</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B57560' }}>
              The clarity and protection you need for all property and real estate matters.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="300">
              {benefits.slice(0, 3).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: '#AABF91' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#002346' }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: '#002346' }}>{b}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="600">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#B57560' }}>Your Property. Our Priority.</h3>
              <p className="text-lg max-w-md" style={{ color: '#002346' }}>
                From buying and selling to disputes, our team secures every step of your real estate journey.
              </p>
            </div>
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
              {benefits.slice(3, 6).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: '#AABF91' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#002346' }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: '#002346' }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: 'linear-gradient(120deg, #002346 90%, #B57560 120%)' }}>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-white">
              Real Estate <span style={{ color: '#AABF91' }}>Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: '#fff', color: '#002346' }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#AABF91' }}>
                    {String(index + 1).padStart(2, '0')}
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
            Our 7-step process to guide you through your real estate journey.
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
                  Consultation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Schedule an initial consultation to discuss your property goals and legal needs.
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
                  Document Review
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Review property documents, titles, and legal compliance requirements.
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
                  Due Diligence
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Conduct thorough title search and property investigation.
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
                  Transaction
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Handle purchase agreements, contracts, and closing documents.
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
                  Negotiation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Negotiate terms, resolve disputes, and protect your interests.
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
                  Closing
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Facilitate smooth closing and property transfer process.
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
                  Protection
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Ongoing legal support and protection for your property investment.
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
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: '#002346' }}>
                  Our <span style={{ color: '#AABF91' }}>Client Features</span>
                </h2>
                <p className="text-xl mb-8" style={{ color: '#fff' }}>
                  Real estate law, streamlined for you.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  We deliver fast, detail-oriented legal help for real estate buyers, sellers, and landlords.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Enjoy secure uploads and downloads of contracts and reports through our client portal.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Get alerts for deadlines, closings, and regulatory requirements on your phone or email.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Always have a property law expert on your side for emergencies or urgent opinions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">
              {features.map((feature, index) => (
                <div key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: '#fff', color: '#002346' }}>
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {`Benefit from ${feature.toLowerCase()} as our real estate client.`}
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
            Secure Your Next Move in Real Estate
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#B57560' }} data-aos="fade-up" data-aos-delay="100">
            Trusted guidance for every transaction, dispute, and development.
          </p>
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

export default RealEstate;
