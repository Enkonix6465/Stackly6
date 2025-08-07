import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import home from '../assets/homeHero.mp4';

import janeDoe from '../assets/janeDoe.jpg';
import johnSmith from '../assets/johnSmith.jpg';
import emilyDavis from '../assets/emilyDavis.jpg';
import kevinSpacey from '../assets/kevinSpacey.jpg';

const Home = ({ darkMode, setDarkMode, user, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#002346] transition duration-300" style={{overflowX: 'hidden'}}>
      {/* Sticky header wrapper for z-index stacking context */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>

      <main className="flex-grow text-[#002346] dark:text-white  mx-auto">
        {/* 1. Hero Section */}
        <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
          >
            <source src={home} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
              Welcome to Verdict Law Firm
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white drop-shadow-lg">
              Your trusted legal partner committed to protecting your rights and guiding you to justice.
            </p>
            <button className="bg-[#002346] text-white px-8 py-4 rounded-full hover:bg-[#B57560] transition drop-shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </section>

        {/* 2. Practice Areas */}
        <section className="px-6 py-10 bg-[#B57560]">
          <h2 className="text-3xl font-bold mb-8">Practice Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              'criminal',
              'family',
              'corporate',
              'civil',
              'real-estate',
              'immigration'
            ].map((area) => (
              <button onClick={() => navigate(`/services/${area}`)} key={area} className="p-6 bg-white border rounded-lg hover:shadow-lg transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">{area}</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Expert legal services tailored to your needs in {area.toLowerCase()}.
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Why Choose Us / Key Advantages */}
        <section className="px-6 py-10">
          <h2 className="text-3xl font-bold mb-8">Why Choose Verdict</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-disc list-inside text-lg">
            <li>Experienced attorneys committed to your success</li>
            <li>Personalized strategies for every case</li>
            <li>Transparent communication and updates</li>
            <li>Proven track record of favorable outcomes</li>
            <li>Client-first approach and strong advocacy</li>
            <li>24/7 support and availability</li>
          </ul>
        </section>

        {/* 4. Meet the Team */}
        <section className="px-6 py-10 bg-[#B57560]">
          <h2 className="text-3xl font-bold mb-8">Meet Our Attorneys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Jane Doe', title: 'Senior Criminal Lawyer', img: janeDoe },
              { name: 'John Smith', title: 'Family Law Specialist', img: johnSmith },
              { name: 'Emily Davis', title: 'Corporate Law Expert', img: emilyDavis },
              { name: 'Kevin Spacey', title: 'Real Estate Law Specialist', img: kevinSpacey },
            ].map(({ name, title, img }) => (
              <div
                key={name}
                className="relative rounded-lg text-center flex flex-col justify-end items-center overflow-hidden shadow-lg border group transition-transform duration-300 cursor-pointer"
                style={{
                  width: '270px',
                  height: '300px',
                  margin: '0 auto',
                  color: '#fff',
                }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)',
                  }}
                  aria-label={name}
                />
                <div className="relative z-10 p-4 w-full flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg" style={{color:'#fff'}}>{name}</h3>
                  <p className="text-base font-medium drop-shadow-lg" style={{color:'#fff'}}>{title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Client Testimonials */}
        <section className="px-6 py-10">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Verdict’s team was professional, knowledgeable, and compassionate throughout my case.",
                client: "Sarah W."
              },
              {
                quote: "Thanks to their expertise, I secured the best outcome possible. Highly recommend!",
                client: "Michael T."
              }
            ].map(({ quote, client }, idx) => (
              <blockquote key={idx} className="border-l-4 border-[#AABF91] pl-6 italic text-lg text-gray-800 dark:text-gray-200">
                “{quote}” — <span className="font-bold">{client}</span>
              </blockquote>
            ))}
          </div>
        </section>

        {/* 6. Contact / Consultation CTA */}
        <section className="text-center py-20 bg-[#B57560] dark:bg-[#AABF91] rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-white dark:text-[#002346]">
            Ready to Protect Your Rights?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-white dark:text-[#002346]">
            Contact Verdict today to schedule your confidential consultation.
          </p>
          <button className="bg-[#002346] text-white px-8 py-4 rounded-full hover:bg-[#AABF91] transition">
            Book Your Consultation
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
