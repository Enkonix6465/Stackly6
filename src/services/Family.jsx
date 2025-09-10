/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import family from "../assets/familyHero.mp4";
import familyPhoto from "../assets/familyPhoto.jpg";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray

const Family = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "html, body { overflow-x: hidden !important; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) benefitsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { t } = useTranslation();

  // Family law-specific content (i18n keys)
  const benefits = [
    t("family.benefits.0"),
    t("family.benefits.1"),
    t("family.benefits.2"),
    t("family.benefits.3"),
    t("family.benefits.4"),
    t("family.benefits.5"),
  ];

  const services = [
    {
      title: t("family.services.0.title"),
      description: t("family.services.0.description"),
    },
    {
      title: t("family.services.1.title"),
      description: t("family.services.1.description"),
    },
    {
      title: t("family.services.2.title"),
      description: t("family.services.2.description"),
    },
    {
      title: t("family.services.3.title"),
      description: t("family.services.3.description"),
    },
    {
      title: t("family.services.4.title"),
      description: t("family.services.4.description"),
    },
    {
      title: t("family.services.5.title"),
      description: t("family.services.5.description"),
    },
  ];

  const howItWorks = [
    t("family.howItWorks.0"),
    t("family.howItWorks.1"),
    t("family.howItWorks.2"),
    t("family.howItWorks.3"),
    t("family.howItWorks.4"),
  ];

  const features = [
    t("family.features.0"),
    t("family.features.1"),
    t("family.features.2"),
    t("family.features.3"),
  ];

  const pricingTiers = [
    {
      title: t("family.pricing.0.title"),
      price: t("family.pricing.0.price"),
      priceNote: t("family.pricing.0.priceNote"),
      features: [
        t("family.pricing.0.features.0"),
        t("family.pricing.0.features.1"),
        t("family.pricing.0.features.2"),
      ],
      buttonText: t("family.pricing.0.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: t("family.pricing.1.title"),
      price: t("family.pricing.1.price"),
      priceNote: t("family.pricing.1.priceNote"),
      features: [
        t("family.pricing.1.features.0"),
        t("family.pricing.1.features.1"),
        t("family.pricing.1.features.2"),
        t("family.pricing.1.features.3"),
      ],
      buttonText: t("family.pricing.0.buttonText"),
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: t("family.pricing.1.badge"),
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: t("family.pricing.2.title"),
      price: t("family.pricing.2.price"),
      priceNote: t("family.pricing.2.priceNote"),
      features: [
        t("family.pricing.2.features.0"),
        t("family.pricing.2.features.1"),
        t("family.pricing.2.features.2"),
        t("family.pricing.2.features.3"),
      ],
      buttonText: t("family.pricing.0.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <div
          className="fixed top-0 left-0 w-full z-[100]"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
          }}
        >
          <Header user={user} onLogout={onLogout} />
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative w-screen h-screen  "
        style={{ minHeight: "100vh", maxWidth: "100vw", background: COLOR_1 }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={family} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full ">
          <h1
            className="font-bold text-5xl text-center mb-6 drop-shadow-lg"
            style={{ color: COLOR_2 }}
            data-aos="fade-down"
          >
            {t("family.heroTitle")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-center text-lg drop-shadow-lg"
            style={{ color: COLOR_2 }}
            data-aos="fade-up"
          >
            {t("family.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="key-benefits"
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              {t("family.benefitsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {benefits.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b}
                  </h3>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={familyPhoto}
                alt="Family"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{
                  maxWidth: "100%",
                  background: darkMode ? "#333333" : "#fff",
                  marginTop: 0,
                }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                {t("family.priorityTitle")}
              </h3>
              <p
                className="text-lg max-w-md self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t("family.priorityDesc")}
              </p>
            </div>
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              {t("family.servicesTitle")}
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
                  <span
                    className="text-2xl font-bold"
                    style={{ color: COLOR_1 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: COLOR_1 }}
                >
                  {service.title}
                </h3>
                <p className="text-base" style={{ color: COLOR_3 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (Styled, Icon-Based) */}
      <section
        className="w-full py-16 px-2"
        style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-semibold text-center mb-4"
            style={{ color: COLOR_1 }}
          >
            <span style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>
              {t("family.howItWorksTitle")}
            </span>
          </h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: COLOR_3 }}
          >
            <span style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
              {t("family.howItWorksDesc")}
            </span>
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
                  <UserIcon className="w-7 h-7" style={{ color: COLOR_2 }} />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    01
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.0.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.0.desc")}
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <DocumentDuplicateIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.1.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.1.desc")}
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
                  <ClipboardDocumentCheckIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.2.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.2.desc")}
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
                  <PaperAirplaneIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.3.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.3.desc")}
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative"
                style={{
                  background: COLOR_3,
                  color: COLOR_1,
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <BriefcaseIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.4.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.4.desc")}
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
                  <SparklesIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.5.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.5.desc")}
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
                  <Cog6ToothIcon
                    className="w-7 h-7"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("family.howItWorks.6.title")}
                </h3>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("family.howItWorks.6.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: COLOR_2 }}
                >
                  {t("family.featuresTitle")}
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  {t("family.featuresDesc")}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t("family.features.0desc")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t("family.features.1desc")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t("family.features.2desc")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t("family.features.3desc")}
                </p>
              </div>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              data-aos="fade-left"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: COLOR_2, color: COLOR_3 }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section */}
      <section
        id="pricing-section"
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t("family.ctaTitle")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("family.ctaDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                style={{
                  background: COLOR_2,
                  color: COLOR_3,
                  border: `2px solid ${COLOR_1}`,
                }}
                className="rounded-2xl p-6 border-2 shadow-md hover:scale-105 transition-all duration-300"
              >
                {tier.badge && (
                  <div className="bg-white text-[#002346] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>
                )}
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: COLOR_1 }}
                >
                  {tier.title}
                </h3>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: COLOR_3 }}
                >
                  {tier.price}
                  <span className="text-lg">{tier.priceNote}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === t("family.pricing.0.buttonText") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/home2#consultation-form")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("family.pricing.1.buttonText") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("family.pricing.2.buttonText") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/home")}
                  >
                    {tier.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Family;
