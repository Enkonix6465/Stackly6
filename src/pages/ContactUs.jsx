import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
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

const values = [
  "Proven record of success in criminal and civil cases",
  "Direct, transparent communication with each client",
  "Sensitive and confidential handling of all matters",
  "Experienced attorneys for every stage of your case",
  "Emergency help available 24/7",
  "Tailored legal strategies for your unique needs"
];

const ContactUs = ({ darkMode, setDarkMode, user, onLogout }) => {


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Dark mode toggle button
  const handleToggle = () => setDarkMode(prev => !prev);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-[#002346]' : 'bg-white'}`} style={{overflowX: 'hidden'}}> 
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>

      {/* 1. Hero Section with Video */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={contact} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            We're here to help—reach out for legal advice, appointments, or urgent support at any time. Our team will respond swiftly to your needs.
          </p>
        </div>
      </section>

      {/* 2. Firm Contact Information */}
      <section className="w-full py-12 px-6" style={{ background:'#fff' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color:'#002346' }} data-aos="fade-up">
            Ways to Reach Us
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background:'#AABF91', color:'#002346' }}
              data-aos="fade-right"
            >
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="mb-2">contact@yourfirm.com</p>
            </div>
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background:'#B57560', color:'#fff' }}
              data-aos="fade-up"
            >
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="mb-2">+91-90000-12345</p>
              <p className="text-sm" style={{ color:'#AABF91' }}>Mon-Fri 9AM-7PM</p>
            </div>
            <div
              className="p-6 rounded-2xl shadow-lg"
              style={{ background:'#AABF91', color:'#002346' }}
              data-aos="fade-left"
            >
              <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
              <p className="mb-2">+91-90001-45678</p>
              <p className="text-sm" style={{ color:'#B57560' }}>Quick Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form */}
      <section className="w-full py-16 px-6" style={{ background:'#AABF91' }}>
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg p-8" style={{background:'#fff' }}>
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color:'#002346' }} data-aos="fade-down">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                className="w-full border-2 rounded-lg px-4 py-3"
                style={{ borderColor:'#AABF91', color:'#002346' }}
                type="text"
                placeholder="Your Name"
                required
                data-aos="fade-right"
              />
              <input
                className="w-full border-2 rounded-lg px-4 py-3"
                style={{ borderColor:'#AABF91', color:'#002346' }}
                type="email"
                placeholder="Your Email"
                required
                data-aos="fade-left"
              />
            </div>
            <input
              className="w-full border-2 rounded-lg px-4 py-3"
              style={{ borderColor:'#AABF91', color:'#002346' }}
              type="text"
              placeholder="Your Phone"
              required
              data-aos="fade-right"
            />
            <textarea
              rows={5}
              className="w-full border-2 rounded-lg px-4 py-3"
              style={{ borderColor:'#AABF91', color:'#002346' }}
              placeholder="Your Message"
              required
              data-aos="fade-left"
            />
            <button
              className="py-3 px-8 font-semibold rounded-lg mt-4"
              style={{ background:'#002346', color:'#fff' }}
              type="submit"
              data-aos="fade-up"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* 4. Office Locations */}
      <section className="w-full py-16 px-6" style={{ background:'#002346' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color:'#AABF91' }} data-aos="fade-up">
            Our Offices
          </h2>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className="rounded-2xl shadow-lg p-8 flex-1"
                style={{ background:'#fff', color:'#002346' }}
                data-aos="fade-up"
                data-aos-delay={i*100}
              >
                <h3 className="text-xl font-bold mb-2">{loc.city}</h3>
                <p className="mb-2">{loc.address}</p>
                <p className="mb-1 font-semibold" style={{ color:'#B57560' }}>Phone: {loc.phone}</p>
                <p className="text-xs" style={{ color:'#AABF91' }}>(Map & directions available upon request)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency Help */}
      <section className="w-full py-12 px-6" style={{ background:'#B57560' }}>
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

      {/* 6. Why Choose Us / Firm Values */}
      <section className="w-full py-16 px-6" style={{ background:'#AABF91' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#002346'}} data-aos="fade-down">
            Why Choose Our Firm?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left justify-center">
            {values.map((point, idx) => (
              <li
                key={point}
                className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay={idx*60}
                style={{ color:'#002346', borderLeft:`6px solid #B57560` }}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{background:'#B57560'}}
                ></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
