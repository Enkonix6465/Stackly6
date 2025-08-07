import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import servicesHero from "../assets/servicesHero.mp4";
import { Link } from "react-router-dom";

// Example icons, you can replace these with your design system or Heroicons.
import { BriefcaseIcon, UsersIcon, HomeIcon, GlobeAltIcon, ScaleIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";

const serviceData = [
  {
    id: "family",
    title: "Family Law",
    description: "Compassionate and strategic legal support for divorce, child custody, maintenance, adoption, and related family matters.",
    icon: UsersIcon,
    highlights: [
      "Divorce and separation",
      "Child custody and visitation",
      "Adoption and guardianship",
      "Domestic violence cases"
    ]
  },
  {
    id: "criminal",
    title: "Criminal Law",
    description: "Robust defense against criminal charges, from bail to trial to appeals, protecting your rights at every stage.",
    icon: ScaleIcon,
    highlights: [
      "Bail and anticipatory bail applications",
      "Trial and appeal representation",
      "White-collar crimes",
      "Juvenile offenses"
    ]
  },
  {
    id: "civil",
    title: "Civil Law",
    description: "End-to-end civil litigation including contract disputes, property issues, and enforcement of legal rights.",
    icon: BriefcaseIcon,
    highlights: [
      "Contract enforcement/disputes",
      "Property and real estate litigation",
      "Injunctions and recoveries",
      "Consumer protection"
    ]
  },
  {
    id: "corporate",
    title: "Corporate Law",
    description: "Advisory and litigation services for companies, covering compliance, M&A, commercial contracts, and regulatory matters.",
    icon: BuildingOffice2Icon,
    highlights: [
      "Business formation and advisory",
      "Mergers & acquisitions",
      "Contract drafting and disputes",
      "Corporate compliance"
    ]
  },
  {
    id: "immigration",
    title: "Immigration Law",
    description: "Expert assistance for visas, residency, citizenship, employment authorization, and immigration appeals.",
    icon: GlobeAltIcon,
    highlights: [
      "Visa applications and renewals",
      "Residency and work permits",
      "Citizenship and naturalization",
      "Immigration litigation"
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    description: "Full-spectrum legal services for property transactions, leasing, due diligence, and resolving disputes.",
    icon: HomeIcon,
    highlights: [
      "Sale, lease & purchase agreements",
      "Title verification and due diligence",
      "RERA compliance",
      "Property dispute resolution"
    ]
  }
];

const Services = ({ darkMode, setDarkMode, user, onLogout }) => (
  <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? "bg-[#002346]" : "bg-white"}`}>
    <div className="sticky top-0 z-50">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
    </div>
    
    {/* 1. Hero / Intro Section with Fullscreen Video Background */}
    <section className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={servicesHero}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
        <h1 className="text-5xl font-extrabold mb-6 text-white">Our Services</h1>
        <p className="text-xl max-w-3xl mx-auto text-white">
          Comprehensive legal solutions for individuals, families, and businesses — delivered with dedication, expertise, and professionalism.
        </p>
      </div>
    </section>

    {/* 2. Practice Areas Overview */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#002346] dark:text-white">Practice Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map(({ id, title, description, icon: Icon }) => (
          <Link
            key={id}
            to={`/services/${id}`}
            className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <Icon className="w-12 h-12 mb-4 text-[#B57560]" />
            <h3 className="text-2xl font-bold mb-2 text-[#002346] dark:text-[#AABF91]">{title}</h3>
            <p className="text-base text-center mb-2 text-gray-700 dark:text-gray-300">{description}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* 3. Why Choose Us */}
    <section className="w-full py-16 px-6 bg-[#AABF91]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#002346]">Why Choose Verdict</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-[#002346] font-medium">
          <li>Experienced, specialized attorneys</li>
          <li>Transparent process and communication</li>
          <li>Personalized strategies for every client</li>
          <li>Strong advocacy in and out of court</li>
          <li>Results-driven approach</li>
          <li>24/7 client support available</li>
        </ul>
      </div>
    </section>

    {/* 4. Service Highlights */}
    <section className="w-full py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#002346] dark:text-white">Our Expertise in Detail</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {serviceData.map(({ id, title, highlights }) => (
          <div key={id} className="rounded-xl border-[#B57560] border-l-4 bg-[#f8f8f8] dark:bg-[#1e293b] shadow-md p-8 mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-[#B57560]">{title}</h3>
            <ul className="list-disc ml-6 space-y-2 text-[#002346] dark:text-white">
              {highlights.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* 5. Client Success Stories (Testimonials) */}
    <section className="w-full py-16 px-6 bg-[#B57560] dark:bg-[#AABF91]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white dark:text-[#002346]">Client Success Stories</h2>
        <blockquote className="border-l-4 border-[#AABF91] bg-white/20 dark:bg-[#002346]/10 pl-8 pr-6 py-6 rounded-xl mb-8 text-white dark:text-[#002346] text-xl italic">
          “The team at Verdict handled my complicated case with skill, care, and determination. I recommend them to anyone in need of legal counsel!”
          <div className="mt-4 font-bold">— A satisfied client</div>
        </blockquote>
        <blockquote className="border-l-4 border-[#AABF91] bg-white/20 dark:bg-[#002346]/10 pl-8 pr-6 py-6 rounded-xl text-white dark:text-[#002346] text-xl italic">
          “Thanks to Verdict, I secured a favorable result. Communication was always clear and proactive.”
          <div className="mt-4 font-bold">— Business client</div>
        </blockquote>
      </div>
    </section>

    {/* 6. Consultation Call to Action */}
    <section className="w-full py-20 text-center bg-[#002346] dark:bg-[#B57560]">
      <h2 className="text-4xl font-bold mb-6 text-white dark:text-[#AABF91]">Ready for Expert Legal Support?</h2>
      <p className="mb-8 text-lg max-w-xl mx-auto text-white dark:text-[#002346]">
        Contact us today to schedule your confidential consultation and take the first step toward resolution.
      </p>
      <button className="bg-[#AABF91] text-[#002346] font-bold px-8 py-4 rounded-full hover:bg-[#B57560] hover:text-white transition">
        Book Consultation
      </button>
    </section>

    <Footer />
  </div>
);

export default Services;
