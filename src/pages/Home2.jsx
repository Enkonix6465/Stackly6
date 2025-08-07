import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import home2Hero from '../assets/home2Hero.mp4';

export default function Home2({ darkMode, setDarkMode, user, onLogout }) {
  const caseStudies = [
    {
      title: "Successful Property Dispute Resolution",
      summary:
        "Our expert team helped a client reclaim rightful ownership in a complex boundary dispute, achieving a favorable settlement through mediation.",
      year: 2024,
    },
    {
      title: "Winning Contractual Claim",
      summary:
        "Represented a business client in breach of contract litigation, securing significant damages and reinforcement of contractual rights.",
      year: 2023,
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col bg-white dark:bg-[#002346] transition-colors duration-300`}
      style={{ overflowX: 'hidden' }}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>

      {/* Section 1: Hero Section with Video */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={home2Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            Welcome to Verdict
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white drop-shadow-lg">
            Providing trusted legal counsel with unmatched dedication and integrity.
          </p>
        </div>
      </section>
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-32">

        {/* Section 2: Our Philosophy */}
        <section className="bg-[#AABF91] dark:bg-[#1e293b] rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-[#002346] dark:text-white mb-6 text-center">
            Our Philosophy
          </h2>
          <p className="text-[#002346] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
            We believe that justice is a fundamental right and strive to deliver personalized legal services that empower our clients. With a blend of compassion and professionalism, our team is committed to achieving the best possible outcomes.
          </p>
        </section>

        {/* Section 3: Our Approach */}
        <section className="max-w-5xl mx-auto bg-[#B57560] dark:bg-[#1e293b] rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-[#002346] dark:text-white mb-8 text-center">
            Our Approach
          </h2>
          <div className="space-y-6 text-[#002346] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <p>
              At Verdict, we combine strategic insight with meticulous attention to detail. Every case is handled with personalized care, ensuring that your voice is heard and your goals are prioritized.
            </p>
            <p>
              We emphasize clear communication and transparency throughout the legal process, offering you consistent updates and honest assessments to guide your decisions.
            </p>
            <p>
              Our proactive legal strategies focus on both negotiation and litigation, aiming for solutions that minimize risk while maximizing your interests.
            </p>
          </div>
        </section>

        {/* Section 4: Case Studies */}
        <section className="max-w-6xl mx-auto bg-[#AABF91] rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-[#002346] dark:text-white mb-8 text-center">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map(({ title, summary, year }, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-[#334155] p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-[#002346] dark:text-white mb-2">{title}</h3>
                <p className="text-[#002346] dark:text-gray-300 mb-4">{summary}</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Year: {year}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5: Latest Legal Insights */}
        <section className="max-w-7xl mx-auto bg-[#B57560] rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-[#002346] dark:text-white mb-8 text-center">
            Latest Legal Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Understanding Civil Litigation",
                excerpt:
                  "A comprehensive overview of steps involved in civil litigation.",
              },
              {
                title: "Your Rights in Property Disputes",
                excerpt:
                  "Key points every property owner should know to safeguard their interests legally.",
              },
              {
                title: "Effective Contract Drafting Tips",
                excerpt:
                  "Tips for creating airtight contracts to avoid future legal complications.",
              },
            ].map(({ title, excerpt }, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-[#334155] p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-[#002346] dark:text-white mb-2">{title}</h3>
                <p className="text-[#002346] dark:text-gray-300">{excerpt}</p>
                <button className="mt-4 inline-block bg-[#B57560] hover:bg-[#8c5448] text-white py-2 px-4 rounded transition text-sm">
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Section 6: Contact & Appointment */}
        <section className="bg-[#AABF91] dark:bg-[#1e293b] rounded-xl p-8 shadow-md max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#002346] dark:text-white mb-6 text-center">
            Schedule a Consultation
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[#002346] dark:text-white mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-[#002346] dark:text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-[#002346] dark:text-white mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Briefly describe your legal matter"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#002346] dark:bg-[#AABF91] text-white dark:text-[#002346] py-3 rounded hover:bg-[#1a3b6f] dark:hover:bg-[#889f59] transition-colors"
            >
              Book Appointment
            </button>
          </form>
        </section>
      </main>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
