/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import AOS from "aos";
import Footer from "../components/Footer.jsx";
import { useTranslation } from "react-i18next";
//import '../aos-custom.css';
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import criminal from "../assets/criminalHero.mp4";
import criminalPhoto from "../assets/criminalPhoto.jpg";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333";

const Criminal = ({ user, onLogout }) => {
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
  // Smooth scroll methods
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { t } = useTranslation();

  // Page Content
  const benefits = [
    t("criminal.benefit1"),
    t("criminal.benefit2"),
    t("criminal.benefit3"),
    t("criminal.benefit4"),
    t("criminal.benefit5"),
    t("criminal.benefit6"),
  ];

  const services = [
    {
      title: t("criminal.service1.title"),
      description: t("criminal.service1.desc"),
    },
    {
      title: t("criminal.service2.title"),
      description: t("criminal.service2.desc"),
    },
    {
      title: t("criminal.service3.title"),
      description: t("criminal.service3.desc"),
    },
    {
      title: t("criminal.service4.title"),
      description: t("criminal.service4.desc"),
    },
    {
      title: t("criminal.service5.title"),
      description: t("criminal.service5.desc"),
    },
    {
      title: t("criminal.service6.title"),
      description: t("criminal.service6.desc"),
    },
  ];

  const howItWorks = [
    "Schedule a confidential consultation",
    "We assess your situation and legal options",
    "Receive a tailored defense strategy",
    "Navigate investigation and hearings with ongoing support",
    "Achieve the best possible outcome with our expert team",
  ];

  const features = [
    t("criminal.feature1"),
    t("criminal.feature2"),
    t("criminal.feature3"),
    t("criminal.feature4"),
  ];

  const pricingTiers = [
    {
      title: t("criminal.pricing1.title"),
      price: t("criminal.pricing1.price"),
      priceNote: t("criminal.pricing1.priceNote"),
      features: [
        t("criminal.pricing1.feature1"),
        t("criminal.pricing1.feature2"),
        t("criminal.pricing1.feature3"),
        t("criminal.pricing1.feature4"),
      ],
      buttonText: t("criminal.pricing1.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: t("criminal.pricing2.title"),
      price: t("criminal.pricing2.price"),
      priceNote: t("criminal.pricing2.priceNote"),
      features: [
        t("criminal.pricing2.feature1"),
        t("criminal.pricing2.feature2"),
        t("criminal.pricing2.feature3"),
        t("criminal.pricing2.feature4"),
      ],
      buttonText: t("criminal.pricing2.buttonText"),
      badge: t("criminal.pricing2.badge"),
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: t("criminal.pricing3.title"),
      price: t("criminal.pricing3.price"),
      priceNote: t("criminal.pricing3.priceNote"),
      features: [
        t("criminal.pricing3.feature1"),
        t("criminal.pricing3.feature2"),
        t("criminal.pricing3.feature3"),
        t("criminal.pricing3.feature4"),
      ],
      buttonText: t("criminal.pricing3.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header user={user} onLogout={onLogout} />
      </div>

      {/* Hero Section */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{ minHeight: "100vh", maxWidth: "100vw" }}
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
          <source src={criminal} type="video/mp4" />
          {t("criminal.hero.noVideoSupport")}
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold text-5xl mb-6 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            {t("criminal.hero.title")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg"
            data-aos="fade-up"
          >
            {t("criminal.hero.subtitle")}
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
              {t("criminal.benefits.title")}
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              {t("criminal.benefits.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Benefits List */}
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {benefits.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#F8F4E3" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#333333" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={criminalPhoto}
                alt="Criminal Law"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{
                  maxWidth: "100%",
                  background: darkMode ? "#333333" : "#fff",
                  marginTop: 0,
                  alignSelf: "flex-start",
                }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                {t("criminal.benefits.imageTitle")}
              </h3>
              <p
                className="text-lg max-w-md self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t("criminal.benefits.imageSubtitle")}
              </p>
            </div>
            {/* More Benefits */}
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#F8F4E3" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#333333" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{
          background: "#002346",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              {t("criminal.services.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F8F4E3", color: "#333333" }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#002346" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl text-[#002346] font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="w-full py-16 px-2"
        style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#002346] text-center mb-4">
            <span style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>
              {t("criminal.howWeWork.title")}
            </span>
          </h2>
          <p className="text-center text-[#002346] mb-12 max-w-2xl mx-auto">
            <span style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
              {t("criminal.howWeWork.subtitle")}
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-2">
            {/* STEP 1 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <UserIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    01
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step1.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step1.desc")}
                </p>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                  background: COLOR_3,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <DocumentDuplicateIcon
                    className="w-7 h-7 text-[#002346]"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold text-[#002346] tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    02
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step2.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step2.desc")}
                </p>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#333333] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ClipboardDocumentCheckIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    03
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step3.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step3.desc")}
                </p>
              </div>
            </div>
            {/* STEP 4 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "84px",
                  height: "92px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <PaperAirplaneIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    04
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step4.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step4.desc")}
                </p>
              </div>
            </div>
            {/* STEP 5 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                  background: COLOR_3,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <BriefcaseIcon
                    className="w-7 h-7 text-[#002346]"
                    style={{ color: COLOR_2 }}
                  />
                  <span
                    className="mt-1 text-base font-bold text-[#002346] tracking-widest"
                    style={{ color: COLOR_2 }}
                  >
                    05
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step5.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step5.desc")}
                </p>
              </div>
            </div>
            {/* STEP 6 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#333333] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(26% 1%, 74% 1%, 100% 50%, 74% 99%, 26% 99%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <SparklesIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    06
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step6.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step6.desc")}
                </p>
              </div>
            </div>
            {/* STEP 7 */}
            <div className="flex flex-col items-center mx-3 w-[120px]">
              <div
                className="relative bg-[#002346] text-[#F8F4E3]"
                style={{
                  clipPath:
                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                  width: "72px",
                  height: "80px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Cog6ToothIcon className="w-7 h-7" />
                  <span className="mt-1 text-base font-bold tracking-widest">
                    07
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-2">
                <h3
                  className="text-[#002346] font-semibold text-center text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {t("criminal.howWeWork.step7.title")}
                </h3>
                <p
                  className="text-[#333333] text-center text-xs mt-1"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t("criminal.howWeWork.step7.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("criminal.features.title")}
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  {t("criminal.features.subtitle")}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("criminal.features.desc1")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("criminal.features.desc2")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("criminal.features.desc3")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("criminal.features.desc4")}
                </p>
              </div>
            </div>
            {/* Features as cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              data-aos="fade-left"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: "#F8F4E3", color: "#333333" }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {t("criminal.features.benefit", { feature })}
                  </p>
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
            {t("criminal.pricing.title")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("criminal.pricing.subtitle")}
          </p>
          {/* Service Tiers */}
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
                {tier.buttonText === t("criminal.pricing1.buttonText") && (
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
                {tier.buttonText === t("criminal.pricing2.buttonText") && (
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
                {tier.buttonText === t("criminal.pricing3.buttonText") && (
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
      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        bgColor={darkMode ? undefined : "#F8F4E3"}
      />
    </div>
  );
};

export default Criminal;
