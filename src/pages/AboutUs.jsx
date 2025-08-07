import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import aboutUsHero from "../assets/aboutUsHero.mp4";
import janeDoe from "../assets/janeDoe.jpg";
import johnSmith from "../assets/johnSmith.jpg";
import emilyDavis from "../assets/emilyDavis.jpg";

const AboutUs = ({ darkMode, setDarkMode, user, onLogout }) => (
  <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? "bg-[#002346]" : "bg-white"}`} style={{overflowX: 'hidden'}}> 
    <div className="sticky top-0 z-50">
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
    </div>

    {/* 1. Hero / Introduction with Fullscreen Video Background and Toggle */}
    <section className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={aboutUsHero}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
        
        <h1 className="text-5xl font-extrabold mb-6 text-white">About Verdict Law Firm</h1>
        <p className="text-xl max-w-3xl mx-auto text-white">
          Committed to justice, integrity, and personalized legal solutions for every client.
        </p>
      </div>
    </section>

    {/* 2. Our Mission */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#002346] dark:text-white text-center">Our Mission</h2>
      <p className="max-w-4xl mx-auto text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        At Verdict, our mission is to provide expert legal guidance with compassion and dedication, ensuring our clients’ rights are protected and their objectives are achieved with professionalism and integrity.
      </p>
    </section>

    {/* 3. Our Values */}
    <section className="w-full py-16 px-6 bg-[#AABF91]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[#002346] text-center">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#002346] font-medium text-lg">
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p>We adhere to the highest ethical standards and honesty in all client dealings.</p>
          </li>
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p>Delivering outstanding results through expert knowledge and meticulous preparation.</p>
          </li>
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Client Focus</h3>
            <p>Prioritizing client needs with personalized service and open communication.</p>
          </li>
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Respect</h3>
            <p>Fostering mutual respect within our team and with clients and opposing parties.</p>
          </li>
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p>Employing creative legal strategies to achieve favorable outcomes.</p>
          </li>
          <li className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold mb-2">Community</h3>
            <p>Committed to giving back and supporting access to justice for all.</p>
          </li>
        </ul>
      </div>
    </section>

    {/* 4. Our Team */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-[#002346] text-center">Meet Our Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {[
          { name: "Jane Doe", title: "Founder & Senior Partner", bio: "With over 20 years of litigation experience, Jane leads the firm’s criminal defense practice with passion and expertise.", img: janeDoe },
          { name: "John Smith", title: "Managing Partner", bio: "John specializes in corporate and civil law, guiding clients through complex legal challenges with strategic insight.", img: johnSmith },
          { name: "Emily Davis", title: "Head of Family Law", bio: "Emily brings a compassionate approach to family law, helping clients navigate sensitive personal matters.", img: emilyDavis },
        ].map(({ name, title, bio, img }) => (
          <div key={name} className="text-center p-6 border rounded-lg shadow-md">
            <img src={img} alt={name} className="w-28 h-28 object-cover rounded-full mx-auto mb-6 border-4 border-[#AABF91] shadow" />
            <h3 className="text-xl font-semibold mb-1 text-[#002346]">{name}</h3>
            <p className="text-sm font-medium text-[#B57560] mb-4">{title}</p>
            <p className="text-gray-700 dark:text-gray-300 text-base">{bio}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 5. Our Commitment to Clients */}
    <section className="w-full py-16 px-6 bg-[#B57560] dark:bg-[#AABF91]">
      <div className="max-w-4xl mx-auto text-white dark:text-[#002346] text-center">
        <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
        <p className="text-lg leading-relaxed mb-6">
          We dedicate ourselves to offering transparent, accessible, and proactive legal services. From the first consultation to the final resolution, your goals are at the heart of our approach.
        </p>
        <p className="italic text-base max-w-2xl mx-auto">
          “Verdict Law Firm gave me personalized support and achieved results I thought weren’t possible. Truly a partner you can count on.” — Client Testimonial
        </p>
      </div>
    </section>

    {/* 6. Get in Touch / Call to Action */}
    <section className="w-full py-20 text-center bg-[#002346] dark:bg-[#B57560]">
      <h2 className="text-4xl font-bold mb-6 text-white dark:text-[#AABF91]">Ready to Connect with Us?</h2>
      <p className="mb-8 text-lg max-w-xl mx-auto text-white dark:text-[#002346]">
        Contact Verdict Law Firm today to schedule your consultation and discuss how we can serve your legal needs.
      </p>
      <button className="bg-[#AABF91] text-[#002346] font-bold px-8 py-4 rounded-full hover:bg-[#B57560] hover:text-white transition">
        Book Consultation
      </button>
    </section>

    <Footer />
  </div>
);

export default AboutUs;