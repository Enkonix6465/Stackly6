import React from "react";
import { useNavigate } from "react-router-dom";
import philosophy from "../assets/philosophy.jpg";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import home2Hero from "../assets/home2Hero.mp4";

import { useState, useRef, useEffect } from "react";

export default function Home2({ user, onLogout }) {
  const { darkMode, setDarkMode } = useDarkMode();
  function useSyncHeight(leftRef, rightRef) {
    useEffect(() => {
      function sync() {
        if (leftRef.current && rightRef.current) {
          leftRef.current.style.height = rightRef.current.offsetHeight + "px";
        }
      }
      sync();
      window.addEventListener("resize", sync);
      return () => window.removeEventListener("resize", sync);
    }, [leftRef, rightRef]);
  }
  const navigate = useNavigate();
  // Strict color palette
  const COLOR_1 = "#002346"; // deep blue
  const COLOR_2 = "#F8F4E3"; // off-white
  const COLOR_3 = "#333333"; // dark gray
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

  const [consultSent, setConsultSent] = useState(false);

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultSent(true);
    setTimeout(() => setConsultSent(false), 4000); // Hide after 4s
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300`}
      style={{
        overflowX: "hidden",
        background: darkMode ? COLOR_1 : COLOR_2,
        color: darkMode ? COLOR_2 : COLOR_3,
      }}
    >
      <div
        className="fixed top-0 left-0 w-full z-[100]"
        style={{
          background: darkMode ? COLOR_3 : COLOR_2,
          boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
        }}
      >
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Section 1: Hero Section with Video */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{ minHeight: "100vh", maxWidth: "100vw", background: COLOR_1 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={home2Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <h1
            className="text-5xl font-extrabold mb-6 drop-shadow-lg"
            style={{ color: COLOR_2 }}
          >
            Welcome to Verdict
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto mb-8 drop-shadow-lg"
            style={{ color: COLOR_2 }}
          >
            Providing trusted legal counsel with unmatched dedication and
            integrity.
          </p>
        </div>
      </section>
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-32">
        {/* Section 2: Our Philosophy */}
        {/* Section 2: Our Philosophy with Side Image */}
        <section
          className="max-w-5xl mx-auto px-0 py-0 flex flex-col md:flex-row items-stretch min-h-[420px]"
          style={{
            background: darkMode ? "#002346" : "#F8F4E3",
            color: "#333333",
          }}
        >
          {(() => {
            const leftRef = useRef(null);
            const rightRef = useRef(null);
            useSyncHeight(leftRef, rightRef);

            return (
              <>
                {/* Left Side: Image (synced height) */}
                <div
                  ref={leftRef}
                  className="md:w-2/5 w-full flex items-stretch justify-center"
                  style={{
                    background: darkMode ? "#002346" : "#F8F4E3",
                    minHeight: 280,
                    transition: "height 0.3s",
                  }}
                >
                  <img
                    src={philosophy}
                    alt="Law Firm Philosophy"
                    className="rounded-xl shadow-lg object-cover h-full"
                    style={{
                      width: "98%",
                      maxWidth: "420px",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                {/* Right Side: Content (synced height) */}
                <div
                  ref={rightRef}
                  className="md:w-3/5 w-full flex flex-col justify-center px-8 py-10"
                  style={{ backgroundColor: darkMode? "#002346" : "#F8F4E3" }}
                >
                  <h2
                    className="text-4xl font-extrabold mb-4"
                    style={{ color: darkMode ? "#fff" : "#002346" }}
                  >
                    Our Philosophy
                  </h2>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: darkMode ? "#fff" : "#002346" }}
                  >
                    Integrity, advocacy, and unwavering commitment to justice
                    anchor our practice. Every client benefits from our
                    personalized guidance, transparency, and strategic
                    excellence—delivering results that transform lives.
                  </p>
                  <div className="flex flex-col space-y-4">
                    {/* Card 1 */}
                    <div
                      className="rounded-lg shadow-md p-6 mb-2"
                      style={{
                        background: "#002346",
                        color: "#F8F4E3",
                        borderLeft: "6px solid #333333",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-1">
                        Client-Centered Advocacy
                      </h3>
                      <p>
                        Every matter is approached with empathy and
                        diligence—your interests and rights are always at the
                        forefront.
                      </p>
                    </div>
                    {/* Card 2 */}
                    <div
                      className="rounded-lg shadow-md p-6 mb-2"
                      style={{
                        background: "#F8F4E3",
                        color: "#333333",
                        borderLeft: "6px solid #002346",
                      }}
                    >
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: "#002346" }}
                      >
                        Transparent Guidance
                      </h3>
                      <p>
                        We keep you informed at every stage, ensuring clear
                        communication and honest advice for confident decisions.
                      </p>
                    </div>
                    {/* Card 3 */}
                    <div
                      className="rounded-lg shadow-md p-6"
                      style={{
                        background: "#002346",
                        color: "#F8F4E3",
                        borderLeft: "6px solid #333333",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-1">Proven Results</h3>
                      <p>
                        Our strategic approach has secured favorable outcomes
                        for thousands, from individuals to major corporations.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </section>

        {/* Section 3: Our Approach */}
        <section
          className="max-w-6xl mx-auto rounded-2xl p-10 shadow-lg border border-opacity-30"
          style={{
            background: COLOR_1,
            borderColor: COLOR_2,
            color: COLOR_2,
            boxShadow: darkMode
              ? "0 8px 20px rgba(55,88,98,0.5)"
              : "0 4px 15px rgba(54,117,136,0.3)",
          }}
        >
          <h2
            className="text-4xl font-extrabold mb-10 text-center"
            style={{ color: COLOR_2 }}
          >
            Our Approach
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto text-lg leading-relaxed">
            <p>
              At <span className="font-semibold">Verdict</span>, we combine
              strategic insight with meticulous attention to detail. Every case
              is handled with personalized care, ensuring that your voice is
              heard and your goals are prioritized.
            </p>
            <p>
              We emphasize clear communication
              and transparency throughout the legal process, offering you
              consistent updates and honest assessments to guide your decisions.
            </p>
            <p>
              Our proactive legal strategies focus on both negotiation and
              litigation, aiming for solutions that minimize risk while
              maximizing your interests.
            </p>
          </div>
        </section>

        {/* Section 4: Case Studies */}
        <section
          className="max-w-7xl mx-auto rounded-2xl p-10 shadow-lg border border-opacity-20"
          style={{
            background: COLOR_2,
            borderColor: COLOR_1,
            color: COLOR_3,
            boxShadow: darkMode
              ? "0 8px 30px rgba(54,117,136,0.35)"
              : "0 6px 25px rgba(54,117,136,0.2)",
          }}
        >
          <h2
            className="text-4xl font-extrabold mb-12 text-center"
            style={{ color: COLOR_3 }}
          >
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {caseStudies.map(({ title, summary, year }, idx) => (
              <article
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg transition hover:shadow-xl border border-transparent hover:border-teal-600 cursor-pointer"
                style={{
                  color: COLOR_3,
                  borderColor: darkMode ? COLOR_1 : "transparent",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: COLOR_3 }}
                >
                  {title}
                </h3>
                <p className="mb-6 leading-relaxed text-lg">{summary}</p>
                <div
                  className="inline-block px-4 py-2 rounded-lg font-semibold text-sm"
                  style={{
                    backgroundColor: COLOR_1,
                    color: COLOR_2,
                    boxShadow: "0 2px 8px rgba(54,117,136,0.6)",
                  }}
                >
                  Year: {year}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5: Latest Legal Insights */}
        <section
          className="max-w-7xl mx-auto rounded-xl p-8 shadow-md"
          style={{ background: COLOR_1 }}
        >
          <h2
            className="text-3xl font-semibold mb-8 text-center"
            style={{ color: COLOR_2 }}
          >
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
                className="p-6 rounded-lg shadow hover:shadow-lg transition"
                style={{
                  background: COLOR_2,
                  color: COLOR_3,
                  border: `2px solid ${COLOR_1}`,
                }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: COLOR_3 }}
                >
                  {title}
                </h3>
                <p style={{ color: COLOR_3 }}>{excerpt}</p>
                <button
                  className="mt-4 inline-block py-2 px-4 rounded transition text-sm"
                  style={{ background: COLOR_3, color: COLOR_2 }}
                  onClick={() => navigate("/blog")}
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Section 6: Contact & Appointment */}
        <section
          id="consultation-form"
          className="rounded-xl p-8 shadow-md max-w-3xl mx-auto"
          style={{ background: COLOR_2 }}
        >
          <h2
            className="text-3xl font-semibold mb-6 text-center"
            style={{ color: COLOR_3 }}
          >
            Schedule a Consultation
          </h2>
          <form className="space-y-6" onSubmit={handleConsultSubmit}>
            <div>
              <label
                className="block mb-1"
                htmlFor="name"
                style={{ color: COLOR_3 }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                required
                className="w-full p-3 rounded border"
                style={{
                  border: `2px solid ${COLOR_1}`,
                  background: COLOR_2,
                  color: COLOR_3,
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                htmlFor="email"
                style={{ color: COLOR_3 }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full p-3 rounded border"
                style={{
                  border: `2px solid ${COLOR_1}`,
                  background: COLOR_2,
                  color: COLOR_3,
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                htmlFor="message"
                style={{ color: COLOR_3 }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Briefly describe your legal matter"
                required
                className="w-full p-3 rounded border"
                style={{
                  border: `2px solid ${COLOR_1}`,
                  background: COLOR_2,
                  color: COLOR_3,
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded transition-colors"
              style={{ background: COLOR_3, color: COLOR_2 }}
            >
              Book Appointment
            </button>
          </form>
          {consultSent && (
            <div
              className="mt-4 text-center text-green-700 font-semibold"
              style={{ color: "#002346" }}
            >
              Appointment is booked successfully!
            </div>
          )}
        </section>
      </main>

      {/* Anchor for Book Consultation scroll */}
      <div id="consultation"></div>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
