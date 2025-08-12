import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { useDarkMode } from '../context/DarkModeContext';
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
import familyPhoto from '../assets/familyPhoto.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333'; // dark gray

const Family = ({ user, onLogout }) => {
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
    "Skilled mediation to resolve disputes",
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
    <div className={`min-h-screen w-full transition-colors duration-300`} style={{background: darkMode ? COLOR_1 : COLOR_2}}>
      <div className="sticky top-0 z-50">
        <div className="fixed top-0 left-0 w-full z-[100]" style={{background: darkMode ? COLOR_3 : COLOR_2, boxShadow: '0 2px 8px 0 rgba(51,51,51,0.08)'}}>
          <Header user={user} onLogout={onLogout} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', background: COLOR_1 }}>
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
          <h1 className="font-bold text-5xl mb-6 drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-down">
            Family Law
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-up">
            Empathetic support for sensitive family matters.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="key-benefits" className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-5xl font-bold mb-4" style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>
              Key Advantages
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
              Trusted advisors for families, parents, and children at every step of your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="300">
              {benefits.slice(0, 3).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#F8F4E3" }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>{b}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-start justify-start h-full" data-aos="zoom-in" data-aos-delay="600">
              <img 
                src={familyPhoto} 
                alt="Family" 
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3 className="text-2xl font-bold mb-4 self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>Your Family. Our Priority.</h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                Get compassionate, effective solutions for even the most delicate matters.
              </p>
            </div>
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
              {benefits.slice(3, 6).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#F8F4E3" }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: COLOR_1 }}>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              Family Services
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
                  <span className="text-2xl font-bold" style={{ color: COLOR_1 }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: COLOR_1}}>{service.title}</h3>
                <p className="text-base" style={{color: COLOR_3}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (Styled, Icon-Based) */}
      <section className="w-full py-16 px-2" style={{ background: darkMode ? '#002346' : '#F8F4E3' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4" style={{color: COLOR_1}}>
            <span style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>How We Work</span>
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{color: COLOR_3}}>
            <span style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>Our 7-step process to guide you through family law matters with care and clarity.</span>
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
                  Confidential initial meeting to understand your family’s needs.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_2,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <DocumentDuplicateIcon className="w-7 h-7" style={{color: COLOR_1}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_1}}>
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Information Gathering
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Collect and review all relevant family, financial, and legal documents.
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
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Strategy & Checklist
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Develop a personalized legal strategy and checklist for your case.
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
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Filing & Communication
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Prepare, file, and communicate with all parties and the court.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_2,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <BriefcaseIcon className="w-7 h-7" style={{color: COLOR_1}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_1}}>
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Representation
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Advocate for your interests in negotiations, mediation, or court.
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
                  width: "84px",
                  height: "92px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <SparklesIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Support & Updates
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Ongoing support, updates, and guidance throughout your case.
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
                  <Cog6ToothIcon className="w-7 h-7" style={{color: COLOR_2}} />
                  <span className="mt-1 text-base font-bold tracking-widest" style={{color: COLOR_2}}>
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3 className="font-semibold text-center text-base" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>
                  Resolution
                </h3>
                <p className="text-center text-xs mt-1" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                  Final decision and next steps—ongoing legal support if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: COLOR_1 }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: COLOR_2 }}>
                  Our Client Features
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  Always putting your family’s interests first.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  We treat every family law matter with discretion, care, and personal attention.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Access to resources and counseling referrals for emotional support.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Client portal provides 24/7 access to case updates and documents.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Expect dignity, respect, and constant communication at every stage.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">
              {features.map((feature, index) => (
                <div key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: COLOR_2, color: COLOR_3 }}>
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
      <section id="pricing-section" className="w-full py-16 px-4 transition-colors duration-300" style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}>
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-5xl font-bold mb-4" style={{ color: darkMode ? "#F8F4E3" : "#002346" }} data-aos="fade-down" data-aos-delay="50">
            Secure Peace of Mind for Your Family
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: darkMode ? "#F8F4E3" : "#333333" }} data-aos="fade-up" data-aos-delay="100">
            Find clarity, support, and fair solutions—every step of the way.
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

export default Family;
