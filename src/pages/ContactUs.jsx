import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import { useDarkMode } from '../context/DarkModeContext';
import AOS from 'aos';
import Footer from '../components/Footer.jsx';
//import '../aos-custom.css';
import contact from '../assets/contactUsHero.mp4';


const locations = [
  {
    city: "Mumbai",
    address: "12 Justice Lane, Fort, Mumbai 400001",
    phone: "+91-22-5555-1212"
  },
  {
    city: "Delhi",
    address: "220A, Barakhamba Road, Connaught Place, New Delhi 110001",
    phone: "+91-11-4433-2211"
  },
  {
    city: "Bengaluru",
    address: "7 Law Street, Indiranagar, Bengaluru 560038",
    phone: "+91-80-5577-8899"
  }
];


// FAQ data and accordion component
const FAQS = [
  {
    question: "What wellness programs do you offer?",
    answer:
      "We offer comprehensive wellness programs including nutrition coaching, fitness training, mindfulness sessions, stress management, and sleep optimization. Each program is personalized to meet your specific health goals and lifestyle needs."
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by individual and program, but most clients begin to notice improvements within a few weeks of consistent participation."
  },
  {
    question: "What is included in a wellness consultation?",
    answer:
      "A wellness consultation includes a comprehensive assessment of your health, lifestyle, and goals, followed by a personalized plan and recommendations."
  },
  {
    question: "Do you offer virtual wellness sessions?",
    answer:
      "Yes, we offer both in-person and virtual sessions to accommodate your preferences and schedule."
  }
];

function FAQAccordion() {
  const [openIdx, setOpenIdx] = React.useState(0);
  // Color palette
  const COLOR_1 = '#002346';
  const COLOR_2 = '#F8F4E3';
  const COLOR_3 = '#333333';
  return (
    <div className="space-y-5">
      {FAQS.map((faq, idx) => (
        <div
          key={faq.question}
          className="rounded-2xl shadow-lg faq-card"
          style={{ background: COLOR_2, border: '2px solid transparent', transition: 'border-color 0.2s' }}
        >
          <button
            className="w-full flex justify-between items-center px-6 py-5 focus:outline-none text-left transition-colors rounded-2xl"
            style={{
              color: openIdx === idx ? COLOR_1 : COLOR_2,
              fontWeight: 700,
              fontSize: '1.15rem',
              background: openIdx === idx ? COLOR_2 : COLOR_1,
              borderBottom: openIdx === idx ? `1px solid ${COLOR_1}` : 'none',
              borderRadius: '1rem',
              transition: 'color 0.2s, background 0.2s'
            }}
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span style={{ color: openIdx === idx ? COLOR_1 : COLOR_2 }}>{faq.question}</span>
            <span style={{ color: openIdx === idx ? COLOR_1 : COLOR_2, fontSize: '1.5rem', transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s, color 0.2s' }}>
              &#x25B2;
            </span>
          </button>
          {openIdx === idx && (
            <div
              id={`faq-panel-${idx}`}
              className="px-6 pb-5 pt-1 text-[1rem]"
              style={{ color: COLOR_3 }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const ContactUs = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Strict color palette
  const COLOR_1 = '#002346'; // deep blue
  const COLOR_2 = '#F8F4E3'; // off-white
  const COLOR_3 = '#333333'; // dark gray

  // Contact form submit handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessageSubmitted(true);
    setTimeout(() => setMessageSubmitted(false), 3000);
  };
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? `bg-[${COLOR_1}] text-[${COLOR_2}]` : `bg-[${COLOR_2}] text-[${COLOR_3}]`}`} style={{overflowX: 'hidden', background: darkMode ? COLOR_1 : COLOR_2, color: darkMode ? COLOR_2 : COLOR_3}}> 
      <div className="fixed top-0 left-0 w-full z-[100]" style={{background: darkMode ? COLOR_3 : COLOR_2, boxShadow: '0 2px 8px 0 rgba(51,51,51,0.08)'}}>
  <Header user={user} onLogout={onLogout} />
        
      </div>

      {/* 1. Hero Section with Video */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', background: COLOR_1 }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover', background: COLOR_1 }}
        >
          <source src={contact} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-down">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-up">
            We're here to help reach out for legal advice, appointments, or urgent support.
          </p>
        </div>
      </section>

      {/* 2. Firm Contact Information */}
      <section className="w-full py-12 px-6" style={{backgroundColor: darkMode ? COLOR_1 : COLOR_2}}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: darkMode ? COLOR_2 : COLOR_1 }} data-aos="fade-up">
            Ways to Reach Us
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background: darkMode ? '#F8F4E3' : COLOR_1, color: darkMode ? '#333333' : COLOR_2 }}
              data-aos="fade-right"
            >
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="mb-2">mail@enkonix.com</p>
            </div>
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background: COLOR_3, color: COLOR_2 }}
              data-aos="fade-up"
            >
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="mb-2">+91-90000-12345</p>
            </div>
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background: darkMode ? '#F8F4E3' : COLOR_1, color: darkMode ? '#333333' : COLOR_2 }}
              data-aos="fade-left"
            >
              <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
              <p className="mb-2">+91-90001-45678</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form */}
      <section className="w-full py-16 px-6" style={{ background: COLOR_1 }}>
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg p-8" style={{background: COLOR_2 }}>
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: COLOR_3 }} data-aos="fade-down">
            Send Us a Message
          </h2>
          
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl border border-[#e5e7eb]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0,35,70,0.08)' }}
              onSubmit={handleContactSubmit}
            >
              {/* Left column: Image and fields */}
              <div className="flex flex-col gap-6 justify-center">
                {/* Name */}
                <label className="font-medium text-sm mb-1 self-start" htmlFor="name" style={{ color: '#222' }}>Your Name</label>
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#002346]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    className="pl-10 border border-[#002346] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#002346] bg-white text-base w-full placeholder-[#b0b0b0]"
                    placeholder="Your Name"
                    required
                    style={{ color: '#222' }}
                  />
                </div>
                {/* Email */}
                <label className="font-medium text-sm mb-1 self-start" htmlFor="email" style={{ color: '#222' }}>Mail</label>
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#002346]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    className="pl-10 border border-[#002346] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#002346] bg-white text-base w-full placeholder-[#b0b0b0]"
                    placeholder="Your Email"
                    required
                    style={{ color: '#222' }}
                  />
                </div>
                {/* Phone */}
                <label className="font-medium text-sm mb-1 self-start" htmlFor="phone" style={{ color: '#222' }}>Phone</label>
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#002346]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h.01M7 15h.01"/></svg>
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                    className="pl-10 border border-[#002346] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#002346] bg-white text-base w-full placeholder-[#b0b0b0]"
                    placeholder="Your Name"
                    style={{ color: '#222' }}
                  />
                </div>
              </div>
              {/* Right column: Message */}
              <div className="flex flex-col gap-6">
                <label className="font-medium text-sm mb-1" htmlFor="message" style={{ color: '#222' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={11}
                  className="border border-[#002346] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#002346] bg-white text-base w-full placeholder-[#b0b0b0]"
                  placeholder="Your Name"
                  required
                  style={{ color: '#222' }}
                />
              </div>
              {/* Button and sent message */}
              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#002346] hover:bg-[#00172a] text-white font-semibold py-3 px-10 rounded-xl shadow-md transition-colors duration-300 text-lg"
                  style={{ minWidth: '260px' }}
                >
                  Send Message
                </button>
              </div>
              {messageSubmitted && (
                <div className="md:col-span-2 text-center mt-2 text-green-600 font-semibold">
                  Message sent successfully!
                </div>
              )}
            </form>
        </div>
      </section>

      {/* 4. Office Locations */}
      <section className="w-full py-16 px-6" style={{ backgroundColor : darkMode ? COLOR_1 : COLOR_2 }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: darkMode ? COLOR_2 : COLOR_1 }} data-aos="fade-up">
            Our Offices
          </h2>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className="rounded-2xl shadow-lg p-8 flex-1"
                style={{ background: COLOR_2, color: COLOR_3, borderTop: `4px solid ${COLOR_1}` }}
                data-aos="fade-up"
                data-aos-delay={i*100}
              >
                <h3 className="text-xl text-[#002346] font-bold mb-2">{loc.city}</h3>
                <p className="mb-2">{loc.address}</p>
                <p className="mb-1 font-semibold" style={{ color: COLOR_1 }}>Phone: {loc.phone}</p>
                <p className="text-xs" style={{ color: COLOR_3 }}>(Map & directions available upon request)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency Help */}
      <section className="w-full py-12 px-6" style={{ background: COLOR_1 }}>
        <div className="rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882353772!3d40.74076297144166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x2595e5b0b5b0b5b0!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wellness Center NYC Location"
            ></iframe>
          </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="w-full py-16 px-6" style={{ backgroundColor : darkMode ? COLOR_1 : COLOR_2 }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: darkMode ? COLOR_2 : COLOR_1 }} data-aos="fade-down">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>
  <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default ContactUs;
