import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import servicesHero from "../assets/servicesHero.mp4";
import whyChoose from "../assets/whyChoose.jpg";
import familySection from "../assets/familySection.png";
import criminalSection from "../assets/criminalSection.jpg";
import civilSection from "../assets/civilSection.jpg";
import corporateSection from "../assets/corporateSection.jpg";
import immigrationSection from "../assets/immigrationSection.jpg";
import realestateSection from "../assets/realestateSection.jpg";
import { Link } from "react-router-dom";

// Example icons, you can replace these with your design system or Heroicons.
import {
  BriefcaseIcon,
  UsersIcon,
  HomeIcon,
  GlobeAltIcon,
  ScaleIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const COLOR_1 = "#002346"; // teal blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray

const serviceData = [
  {
    id: "family",
    title: "Family Law",
    description:
      "Compassionate and strategic legal support for divorce, child custody, maintenance, adoption, and related family matters.",
    icon: UsersIcon,
    highlights: [
      "Divorce and separation",
      "Child custody and visitation",
      "Adoption and guardianship",
      "Domestic violence cases",
    ],
  },
  {
    id: "criminal",
    title: "Criminal Law",
    description:
      "Robust defense against criminal charges, from bail to trial to appeals, protecting your rights at every stage.",
    icon: ScaleIcon,
    highlights: [
      "Bail and anticipatory bail applications",
      "Trial and appeal representation",
      "White-collar crimes",
      "Juvenile offenses",
    ],
  },
  {
    id: "civil",
    title: "Civil Law",
    description:
      "End-to-end civil litigation including contract disputes, property issues, and enforcement of legal rights.",
    icon: BriefcaseIcon,
    highlights: [
      "Contract enforcement/disputes",
      "Property and real estate litigation",
      "Injunctions and recoveries",
      "Consumer protection",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Law",
    description:
      "Advisory and litigation services for companies, covering compliance, M&A, commercial contracts, and regulatory matters.",
    icon: BuildingOffice2Icon,
    highlights: [
      "Business formation and advisory",
      "Mergers & acquisitions",
      "Contract drafting and disputes",
      "Corporate compliance",
    ],
  },
  {
    id: "immigration",
    title: "Immigration Law",
    description:
      "Expert assistance for visas, residency, citizenship, employment authorization, and immigration appeals.",
    icon: GlobeAltIcon,
    highlights: [
      "Visa applications and renewals",
      "Residency and work permits",
      "Citizenship and naturalization",
      "Immigration litigation",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    description:
      "Full-spectrum legal services for property transactions, leasing, due diligence, and resolving disputes.",
    icon: HomeIcon,
    highlights: [
      "Sale, lease & purchase agreements",
      "Title verification and due diligence",
      "RERA compliance",
      "Property dispute resolution",
    ],
  },
];

const Services = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

    {/* 1. Hero / Intro Section with Fullscreen Video Background */}
    <section
      className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ background: COLOR_1 }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={servicesHero}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center"
        style={{ background: "rgba(51,51,51,0.5)" }}
      >
        <h1 className="text-5xl font-extrabold mb-6" style={{ color: COLOR_2 }}>
          Our Services
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
          Comprehensive legal solutions for individuals, families, and
          businesses — delivered with dedication, expertise, and
          professionalism.
        </p>
      </div>
    </section>

    {/* 2. Practice Areas Overview */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2
        className="text-3xl font-bold mb-10 text-center"
        style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
      >
        Practice Areas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map(({ id, title, description, icon: Icon }) => (
          <Link
            key={id}
            to={`/services/${id}`}
            className="rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            style={{
              background: darkMode ? COLOR_3 : COLOR_2,
              border: `2px solid ${COLOR_1}`,
            }}
          >
            <Icon className="w-12 h-12 mb-4" style={{ color: darkMode ? '#fff' : COLOR_1 }} />
            <h3 className="text-2xl font-bold mb-2" style={{ color: darkMode ? '#fff' : COLOR_1 }}>
              {title}
            </h3>
            <p
              className="text-base text-center mb-2"
              style={{ color: darkMode ? '#fff' : COLOR_3 }}
            >
              {description}
            </p>
          </Link>
        ))}
      </div>
    </section>

    {/* 3. Why Choose Us - Redesigned */}
    <section
      className="w-full py-16 px-6 flex flex-col items-center justify-center"
      style={{ background: COLOR_1 }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Feature Cards */}
        <div className="flex flex-col space-y-6 h-full">
          <h2 className="text-3xl font-bold mb-4" style={{ color: COLOR_2 }}>
            Why Choose Verdict
          </h2>
          <div className="space-y-6 h-full flex flex-col justify-between">
            {/* Feature Card 1 */}
            <div
              className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
              style={{ borderLeft: `6px solid ${COLOR_1}` }}
            >
              <svg
                className="w-8 h-8 mr-4 flex-shrink-0"
                fill="none"
                stroke="#333333"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 19V7a2 2 0 012-2h8a2 2 0 012 2v12" />
                <path d="M6 19h12" />
                <path d="M9 19v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
              </svg>
              <div>
                <div
                  className="font-bold text-lg mb-1"
                  style={{ color: COLOR_1 }}
                >
                  Less Time in the Chair
                </div>
                <div className="text-[#333333] text-base">
                  Efficient, streamlined legal processes to save you time and
                  stress.
                </div>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div
              className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
              style={{ borderLeft: `6px solid ${COLOR_1}` }}
            >
              <svg
                className="w-8 h-8 mr-4 flex-shrink-0"
                fill="none"
                stroke="#333333"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              <div>
                <div
                  className="font-bold text-lg mb-1"
                  style={{ color: COLOR_1 }}
                >
                  More Efficient
                </div>
                <div className="text-[#333333] text-base">
                  Modern technology and expert teams for faster, more effective
                  results.
                </div>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div
              className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
              style={{ borderLeft: `6px solid ${COLOR_1}` }}
            >
              <svg
                className="w-8 h-8 mr-4 flex-shrink-0"
                fill="none"
                stroke="#333333"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v20" />
                <path d="M5 12h14" />
              </svg>
              <div>
                <div
                  className="font-bold text-lg mb-1"
                  style={{ color: COLOR_1 }}
                >
                  Longer Lasting
                </div>
                <div className="text-[#333333] text-base">
                  Sustainable legal solutions that protect your interests for
                  the long term.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center h-full">
          <img
            src={whyChoose}
            alt="Why Choose Verdict"
            className="rounded-2xl w-full max-w-md h-full object-cover shadow-lg"
            style={{ border: `4px solid ${COLOR_1}`, maxHeight: "520px" }}
          />
        </div>
      </div>
    </section>

    {/* 4. Service Highlights */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2
        className="text-3xl font-bold mb-10 text-center"
        style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
      >
        Our Expertise in Detail
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {serviceData.map(({ id, title, highlights }) => {
          // Use an overlay for all cards with a background image
          const hasImageBg =
            id === "family" ||
            id === "criminal" ||
            id === "civil" ||
            id === "corporate" ||
            id === "immigration" ||
            id === "real-estate";

          // Special fix for 'civil' and 'corporate': don't use a dark solid as the background, just the image with overlay!
          let bg =
            id === "family"
              ? `${COLOR_2} url(${familySection}) right bottom/cover no-repeat`
              : id === "criminal"
              ? `${COLOR_2} url(${criminalSection}) right bottom/cover no-repeat`
              : id === "civil"
              ? `url(${civilSection}) right bottom/cover no-repeat`
              : id === "corporate"
              ? `url(${corporateSection}) right bottom/cover no-repeat`
              : id === "immigration"
              ? `${COLOR_2} url(${immigrationSection}) right bottom/cover no-repeat`
              : id === "real-estate"
              ? `${COLOR_2} url(${realestateSection}) right bottom/cover no-repeat`
              : COLOR_2;

          // On civil and corporate, always use dark text and a nearly white overlay for maximum contrast!
          const isDoubleBrightOverlay = id === "civil" || id === "corporate";

          return (
            <div
              key={id}
              className="rounded-xl border-l-4 shadow-md p-8 mb-6 relative overflow-hidden"
              style={{
                background: bg,
                borderColor: COLOR_1,
                minHeight: "260px",
              }}
            >
              {/* Overlay for all image-background cards */}
              {hasImageBg && (
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: isDoubleBrightOverlay
                      ? "rgba(255,255,255,0.93)" // really strong overlay for these two
                      : "rgba(248,244,227,0.77)",
                    zIndex: 1,
                  }}
                />
              )}

              <div className="relative z-10">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    color: COLOR_1, // heading
                  }}
                >
                  {title}
                </h3>
                <ul
                  className="list-disc ml-6 space-y-2"
                  style={{ color: COLOR_3 /* always dark text for clarity */ }}
                >
                  {highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* 5. Client Success Stories (Testimonials) - Redesigned */}
    <section className="w-full py-16 px-6" style={{ background: COLOR_1 }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: COLOR_2 }}
        >
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "The platform has completely transformed the way we manage cases.
              It's intuitive, powerful, and has significantly boosted our
              productivity."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Thompson"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  Sarah Thompson
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  Partner @ LegalTech Associates
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "The automation features alone have saved us countless hours.
              We're able to focus more on our clients and less on administrative
              tasks."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Emily Davis"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  Emily Davis
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  Managing Partner @ ABC Legal Group
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "The Client Portal is a game-changer. Our clients love the
              transparency and access it provides."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Harris"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  John Harris
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  CEO @ LawFirm Solutions
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "We've seen a marked improvement in our communication since
              switching to Verdict."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Michael Lee"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  Michael Lee
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  Partner
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "The real-time updates and notifications ensure we never miss a
              deadline. It's like having an extra team member on board."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Sophia Martinez"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  Sophia Martinez
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  Director @ Martinez & Co. Legal Services
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div
            className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
            style={{
              background: COLOR_2,
              color: COLOR_3,
              border: `1px solid ${COLOR_1}`,
            }}
          >
            <div className="italic mb-4">
              "The customization options allowed us to tailor the platform
              exactly to our needs. It feels like it was built just for us."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Rachel Green"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                  Rachel Green
                </div>
                <div
                  className="text-xs"
                  style={{ color: COLOR_3, opacity: 0.7 }}
                >
                  Head of Operations @ Smith Law Firm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 6. Consultation Call to Action */}
    <section
      className="w-full py-20 text-center"
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <h2 className="text-4xl font-bold mb-6" style={{ color: darkMode ? COLOR_2 : COLOR_1 }}>
        Ready for Expert Legal Support?
      </h2>
      <p className="mb-8 text-lg max-w-xl mx-auto" style={{ color: darkMode ? '#fff' : COLOR_1 }}>
        Contact us today to schedule your confidential consultation and take the
        first step toward resolution.
      </p>
      {(() => {
        const navigate = useNavigate();
        return (
          <button
            className="font-bold px-8 py-4 rounded-full transition"
            style={{
              background: darkMode ? COLOR_3 : COLOR_2,
              color: darkMode ? COLOR_2 : COLOR_1,
              border: `2px solid ${COLOR_1}`,
            }}
            onClick={() => navigate('/home2#consultation-form')}
          >
            Book Consultation
          </button>
        );
      })()}
    </section>

    <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
  </div>
  );
};

export default Services;
