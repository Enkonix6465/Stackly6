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
import family from '../assets/familyHero.mp4';

const Family = ({ darkMode, setDarkMode, user, onLogout }) => {
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

  // Family law-specific content
  const benefits = [
    "Empathetic support for sensitive family matters",
    "Clear guidance through stressful transitions",
    "Confidential handling of personal information",
    "Effective advocacy in negotiation and courtrooms",
    "Child-centric focus in custody and support cases",
    "Skilled mediation to resolve disputes peacefully",
  ];

  const services = [
    {
      title: "Divorce & Separation",
      description: "Comprehensive representation for contested and uncontested divorces, and all separation arrangements."
    },
    {
      title: "Child Custody & Visitation",
      description: "Advocating for the best interests of your children and fair parenting time."
    },
    {
      title: "Child & Spousal Support",
      description: "Calculation, modification, and enforcement of financial support orders."
    },
    {
      title: "Property & Asset Division",
      description: "Equitable distribution of marital assets, complex property, and post-divorce enforcement."
    },
    {
      title: "Family Mediation & Settlement",
      description: "Non-adversarial solutions to family disputes where possible."
    },
    {
      title: "Protective Orders",
      description: "Urgent filings for restraining orders, domestic violence, and emergency relief."
    }
  ];

  const howItWorks = [
    "Confidential initial consultation to understand your situation",
    "Careful evaluation of your family’s unique needs and priorities",
    "Clear explanation of legal rights, responsibilities, and options",
    "Development of a legal and personal strategy",
    "Guidance and advocacy through every step until resolution"
  ];

  const features = [
    "Regular updates on your case status",
    "Direct contact with your lead family attorney",
    "Private client portal for all family law filings",
    "Compassionate staff focused on respectful service"
  ];

  const pricingTiers = [
    {
      title: "Consult",
      price: "$99", priceNote: "/session",
      features: [
        "Discrete session with a senior family lawyer",
        "Case review and personal strategy discussion",
        "Answers to immediate questions",
      ],
      buttonText: "Book Consult",
      buttonClass: "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className: "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: "Separation Support",
      price: "$799", priceNote: "/case (initial)",
      features: [
        "All Consult services",
        "Drafting and filing of divorce/separation petition",
        "Preliminary negotiation with opposing party",
        "Representation at the first hearing",
      ],
      buttonText: "Contact Us",
      buttonClass: "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Full Representation",
      price: "$2,299", priceNote: "/case",
      features: [
        "All court appearances and negotiation sessions",
        "Drafting and filing of all documents",
        "Child custody/support advocacy",
        "Monthly strategy reviews and access to attorney team",
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
          <source src={family} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Family Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Empathetic support for sensitive family matters.
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
              Trusted advisors for families, parents, and children at every step of your journey.
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
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#B57560' }}>Your Family. Our Priority.</h3>
              <p className="text-lg max-w-md" style={{ color: '#002346' }}>
                Get compassionate, effective solutions for even the most delicate matters.
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
              Family <span style={{ color: '#AABF91' }}>Services</span>
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

      {/* How It Works Section (Styled, Icon-Based) */}
      <section className="w-full py-16 px-2 bg-[#f9f5f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4">
            How We Work
          </h2>
          <p className="text-center text-[#a4704a] mb-12 max-w-2xl mx-auto">
            Our 7-step process to guide you through family law matters with care and clarity.
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
                  Confidential initial meeting to understand your family’s needs.
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
                  Information Gathering
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Collect and review all relevant family, financial, and legal documents.
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
                  Strategy & Checklist
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Develop a personalized legal strategy and checklist for your case.
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
                  Filing & Communication
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Prepare, file, and communicate with all parties and the court.
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
                  Representation
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Advocate for your interests in negotiations, mediation, or court.
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
                  Support & Updates
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Ongoing support, updates, and guidance throughout your case.
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
                  Resolution
                </h3>
                <p className="text-[#2a2a2a] text-center text-xs mt-1">
                  Final decision and next steps—ongoing legal support if needed.
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
                  Always putting your family’s interests first.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  We treat every family law matter with discretion, care, and personal attention.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Access to resources and counseling referrals for emotional support.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Client portal provides 24/7 access to case updates and documents.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
                  Expect dignity, respect, and constant communication at every stage.
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
                    {`Benefit from ${feature.toLowerCase()} as our family law client.`}
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
            Secure Peace of Mind for Your Family
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#B57560' }} data-aos="fade-up" data-aos-delay="100">
            Find clarity, support, and fair solutions—every step of the way.
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

export default Family;
