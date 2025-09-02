/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
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

import { useTranslation } from "react-i18next";

const serviceData = [
  {
    id: "family",
    titleKey: "services.practiceAreas.family.title",
    descKey: "services.practiceAreas.family.desc",
    icon: UsersIcon,
    highlightsKeys: [
      "services.practiceAreas.family.highlights.0",
      "services.practiceAreas.family.highlights.1",
      "services.practiceAreas.family.highlights.2",
      "services.practiceAreas.family.highlights.3",
    ],
  },
  {
    id: "criminal",
    titleKey: "services.practiceAreas.criminal.title",
    descKey: "services.practiceAreas.criminal.desc",
    icon: ScaleIcon,
    highlightsKeys: [
      "services.practiceAreas.criminal.highlights.0",
      "services.practiceAreas.criminal.highlights.1",
      "services.practiceAreas.criminal.highlights.2",
      "services.practiceAreas.criminal.highlights.3",
    ],
  },
  {
    id: "civil",
    titleKey: "services.practiceAreas.civil.title",
    descKey: "services.practiceAreas.civil.desc",
    icon: BriefcaseIcon,
    highlightsKeys: [
      "services.practiceAreas.civil.highlights.0",
      "services.practiceAreas.civil.highlights.1",
      "services.practiceAreas.civil.highlights.2",
      "services.practiceAreas.civil.highlights.3",
    ],
  },
  {
    id: "corporate",
    titleKey: "services.practiceAreas.corporate.title",
    descKey: "services.practiceAreas.corporate.desc",
    icon: BuildingOffice2Icon,
    highlightsKeys: [
      "services.practiceAreas.corporate.highlights.0",
      "services.practiceAreas.corporate.highlights.1",
      "services.practiceAreas.corporate.highlights.2",
      "services.practiceAreas.corporate.highlights.3",
    ],
  },
  {
    id: "immigration",
    titleKey: "services.practiceAreas.immigration.title",
    descKey: "services.practiceAreas.immigration.desc",
    icon: GlobeAltIcon,
    highlightsKeys: [
      "services.practiceAreas.immigration.highlights.0",
      "services.practiceAreas.immigration.highlights.1",
      "services.practiceAreas.immigration.highlights.2",
      "services.practiceAreas.immigration.highlights.3",
    ],
  },
  {
    id: "real-estate",
    titleKey: "services.practiceAreas.real-estate.title",
    descKey: "services.practiceAreas.real-estate.desc",
    icon: HomeIcon,
    highlightsKeys: [
      "services.practiceAreas.real-estate.highlights.0",
      "services.practiceAreas.real-estate.highlights.1",
      "services.practiceAreas.real-estate.highlights.2",
      "services.practiceAreas.real-estate.highlights.3",
    ],
  },
];

const Services = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <Header user={user} onLogout={onLogout} />
      </div>

      {/* 1. Hero / Intro Section with Fullscreen Video Background */}
      <section
        className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: COLOR_1 }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={servicesHero}
          loading="lazy"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center"
          style={{ background: "rgba(51,51,51,0.5)" }}
        >
          <h1
            className="text-5xl font-extrabold mb-6"
            style={{ color: COLOR_2 }}
          >
            {t("services.heroTitle")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
            {t("services.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* 2. Practice Areas Overview */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
        >
          {t("services.practiceAreasTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map(({ id, titleKey, descKey, icon: Icon }) => (
            <Link
              key={id}
              to={`/services/${id}`}
              className="rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: darkMode ? COLOR_3 : COLOR_2,
                border: `2px solid ${COLOR_1}`,
              }}
            >
              <Icon
                className="w-12 h-12 mb-4"
                style={{ color: darkMode ? "#fff" : COLOR_1 }}
              />
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: darkMode ? "#fff" : COLOR_1 }}
              >
                {t(titleKey)}
              </h3>
              <p
                className="text-base text-center mb-2"
                style={{ color: darkMode ? "#fff" : COLOR_3 }}
              >
                {t(descKey)}
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
              {t("services.whyChooseTitle")}
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
                    {t("services.whyChoose.cards.0.title")}
                  </div>
                  <div className="text-[#333333] text-base">
                    {t("services.whyChoose.cards.0.desc")}
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
                    {t("services.whyChoose.cards.1.title")}
                  </div>
                  <div className="text-[#333333] text-base">
                    {t("services.whyChoose.cards.1.desc")}
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
                    {t("services.whyChoose.cards.2.title")}
                  </div>
                  <div className="text-[#333333] text-base">
                    {t("services.whyChoose.cards.2.desc")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={whyChoose}
              alt={t("services.whyChoose.imageAlt")}
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
          {t("services.expertiseTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceData.map(({ id, titleKey, highlightsKeys }) => {
            // ...existing code...
            const hasImageBg =
              id === "family" ||
              id === "criminal" ||
              id === "civil" ||
              id === "corporate" ||
              id === "immigration" ||
              id === "real-estate";

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
                {hasImageBg && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: isDoubleBrightOverlay
                        ? "rgba(255,255,255,0.93)"
                        : "rgba(248,244,227,0.77)",
                      zIndex: 1,
                    }}
                  />
                )}

                <div className="relative z-10">
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{
                      color: COLOR_1,
                    }}
                  >
                    {t(titleKey)}
                  </h3>
                  <ul
                    className="list-disc ml-6 space-y-2"
                    style={{
                      color: COLOR_3,
                    }}
                  >
                    {highlightsKeys.map((key, i) => (
                      <li key={i}>{t(key)}</li>
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
            {t("services.testimonialsTitle")}
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
                {t("services.testimonials.0.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt={t("services.testimonials.0.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.0.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.0.title")}
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
                {t("services.testimonials.1.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt={t("services.testimonials.1.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.1.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.1.title")}
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
                {t("services.testimonials.2.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt={t("services.testimonials.2.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.2.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.2.title")}
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
                {t("services.testimonials.3.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt={t("services.testimonials.3.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.3.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.3.title")}
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
                {t("services.testimonials.4.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt={t("services.testimonials.4.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.4.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.4.title")}
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
                {t("services.testimonials.5.quote")}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt={t("services.testimonials.5.name")}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    {t("services.testimonials.5.name")}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    {t("services.testimonials.5.title")}
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
        <h2
          className="text-4xl font-bold mb-6"
          style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
        >
          {t("services.ctaTitle")}
        </h2>
        <p
          className="mb-8 text-lg max-w-xl mx-auto"
          style={{ color: darkMode ? "#fff" : COLOR_1 }}
        >
          {t("services.ctaDesc")}
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
              onClick={() => navigate("/home2#consultation-form")}
            >
              {t("services.ctaButton")}
            </button>
          );
        })()}
      </section>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Services;
