/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useLayoutEffect, useRef } from "react";

// Utility to sync left image height with right content
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
import { useDarkMode } from "../context/DarkModeContext";
import { useLocation, Link } from "react-router-dom";
import supremeCourt from "../assets/supremeCourt.png";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import { useTranslation } from "react-i18next";

import blog from "../assets/blogHero.mp4";

// Scroll to top on route change (useLayoutEffect for immediate scroll)
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const useBlogPosts = (t) => [
  {
    title: t("blogPage.posts.0.title"),
    date: t("blogPage.posts.0.date"),
    excerpt: t("blogPage.posts.0.excerpt"),
    slug: "understanding-your-rights",
    author: t("blogPage.posts.0.author"),
  },
  {
    title: t("blogPage.posts.1.title"),
    date: t("blogPage.posts.1.date"),
    excerpt: t("blogPage.posts.1.excerpt"),
    slug: "bail-application-process",
    author: t("blogPage.posts.1.author"),
  },
  {
    title: t("blogPage.posts.2.title"),
    date: t("blogPage.posts.2.date"),
    excerpt: t("blogPage.posts.2.excerpt"),
    slug: "white-collar-crime-defenses",
    author: t("blogPage.posts.2.author"),
  },
];

const useSuggestions = (t) => [
  {
    title: t("blogPage.suggestions.0.title"),
    description: t("blogPage.suggestions.0.description"),
    icon: "🛑",
  },
  {
    title: t("blogPage.suggestions.1.title"),
    description: t("blogPage.suggestions.1.description"),
    icon: "⚖️",
  },
  {
    title: t("blogPage.suggestions.2.title"),
    description: t("blogPage.suggestions.2.description"),
    icon: "💼",
  },
  {
    title: t("blogPage.suggestions.3.title"),
    description: t("blogPage.suggestions.3.description"),
    icon: "🏠",
  },
  {
    title: t("blogPage.suggestions.4.title"),
    description: t("blogPage.suggestions.4.description"),
    icon: "💻",
  },
  {
    title: t("blogPage.suggestions.5.title"),
    description: t("blogPage.suggestions.5.description"),
    icon: "📱",
  },
];

const usePrecautions = (t) => ({
  below18: [
    t("blogPage.precautions.below18.0"),
    t("blogPage.precautions.below18.1"),
    t("blogPage.precautions.below18.2"),
    t("blogPage.precautions.below18.3"),
  ],
  adults: [
    t("blogPage.precautions.adults.0"),
    t("blogPage.precautions.adults.1"),
    t("blogPage.precautions.adults.2"),
    t("blogPage.precautions.adults.3"),
  ],
  seniorCitizens: [
    t("blogPage.precautions.seniorCitizens.0"),
    t("blogPage.precautions.seniorCitizens.1"),
    t("blogPage.precautions.seniorCitizens.2"),
    t("blogPage.precautions.seniorCitizens.3"),
  ],
});

// Law Quiz Data and Component
const useQuizQuestions = (t) => [
  {
    question: t("blogPage.quiz.0.question"),
    options: [
      t("blogPage.quiz.0.options.0"),
      t("blogPage.quiz.0.options.1"),
      t("blogPage.quiz.0.options.2"),
      t("blogPage.quiz.0.options.3"),
    ],
    answer: 0,
  },
  {
    question: t("blogPage.quiz.1.question"),
    options: [
      t("blogPage.quiz.1.options.0"),
      t("blogPage.quiz.1.options.1"),
      t("blogPage.quiz.1.options.2"),
      t("blogPage.quiz.1.options.3"),
    ],
    answer: 1,
  },
  {
    question: t("blogPage.quiz.2.question"),
    options: [
      t("blogPage.quiz.2.options.0"),
      t("blogPage.quiz.2.options.1"),
      t("blogPage.quiz.2.options.2"),
      t("blogPage.quiz.2.options.3"),
    ],
    answer: 0,
  },
  {
    question: t("blogPage.quiz.3.question"),
    options: [
      t("blogPage.quiz.3.options.0"),
      t("blogPage.quiz.3.options.1"),
      t("blogPage.quiz.3.options.2"),
      t("blogPage.quiz.3.options.3"),
    ],
    answer: 1,
  },
  {
    question: t("blogPage.quiz.4.question"),
    options: [
      t("blogPage.quiz.4.options.0"),
      t("blogPage.quiz.4.options.1"),
      t("blogPage.quiz.4.options.2"),
      t("blogPage.quiz.4.options.3"),
    ],
    answer: 3,
  },
];

function LawQuiz() {
  const { t } = useTranslation();
  const QUIZ_QUESTIONS = useQuizQuestions(t);
  const COLOR_1 = "#002346"; // Deep Blue
  const COLOR_2 = "#F8F4E3"; // Soft Ivory
  const COLOR_3 = "#333333"; // Charcoal Black

  const [step, setStep] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [feedback, setFeedback] = React.useState(null);

  const handleSelect = (idx) => {
    if (showResult) return;
    const copy = [...selected];
    copy[step] = idx;
    setSelected(copy);

    if (idx === QUIZ_QUESTIONS[step].answer) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  const handleNext = () => {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
      setFeedback(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
      setFeedback(null);
    }
  };

  const correctCount = selected.reduce(
    (acc, val, idx) => acc + (val === QUIZ_QUESTIONS[idx].answer ? 1 : 0),
    0,
  );

  if (showResult) {
    return (
      <div
        className="rounded-2xl shadow-lg p-8 max-w-xl mx-auto"
        style={{
          background: COLOR_2,
          color: COLOR_3,
          border: `2px solid ${COLOR_1}`,
        }}
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: COLOR_1 }}>
          {t("blogPage.quizResult.title")}
        </h3>
        <p className="text-lg mb-2">
          {t("blogPage.quizResult.score", {
            score: correctCount,
            total: QUIZ_QUESTIONS.length,
          })}
        </p>
        <button
          className="mt-6 py-2 px-6 font-semibold rounded-full"
          style={{
            background: COLOR_1,
            color: COLOR_2,
            border: `2px solid ${COLOR_1}`,
          }}
          onClick={() => {
            setStep(0);
            setSelected([]);
            setShowResult(false);
            setFeedback(null);
          }}
        >
          {t("blogPage.quizResult.tryAgain")}
        </button>
      </div>
    );
  }

  const q = QUIZ_QUESTIONS[step];
  return (
    <div
      className="rounded-2xl shadow-lg p-8 max-w-xl mx-auto"
      style={{
        background: COLOR_2,
        color: COLOR_3,
        border: `2px solid ${COLOR_1}`,
      }}
    >
      <h3
        className="text-xl font-bold mb-6 text-left"
        style={{ color: COLOR_3 }}
      >
        {q.question}
      </h3>
      <div className="flex flex-col gap-4 mb-4">
        {q.options.map((opt, idx) => {
          const isSelected = selected[step] === idx;
          let optionBg = COLOR_2;
          let optionColor = COLOR_3;
          if (isSelected) {
            if (feedback === true && idx === q.answer) {
              optionBg = COLOR_1;
              optionColor = COLOR_2;
            } else if (feedback === false && idx === selected[step]) {
              optionBg = "rgba(255, 99, 99, 0.85)";
              optionColor = COLOR_2;
            }
          }
          return (
            <button
              key={opt}
              className="w-full text-left px-6 py-4 rounded-xl border transition-colors text-base font-medium select-none"
              style={{
                border: `1.5px solid ${COLOR_1}`,
                background: optionBg,
                color: optionColor,
                boxShadow: isSelected
                  ? "0 2px 8px 0 rgba(54,117,136,0.15)"
                  : "none",
                cursor: selected[step] != null ? "default" : "pointer",
                pointerEvents: selected[step] != null ? "none" : "auto",
              }}
              onClick={() => handleSelect(idx)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {feedback !== null && (
        <p
          className="text-sm font-semibold mb-4"
          style={{ color: feedback ? "#138000" : "#cc0000" }}
          aria-live="polite"
        >
          {feedback
            ? t("blogPage.quizResult.correct")
            : t("blogPage.quizResult.incorrect", {
                answer: q.options[q.answer],
              })}
        </p>
      )}
      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-3 rounded font-semibold"
          style={{
            background: "#d1d5db",
            color: "#333",
            cursor: step === 0 ? "not-allowed" : "pointer",
          }}
          onClick={handlePrev}
          disabled={step === 0}
        >
          {t("blogPage.quizResult.prev")}
        </button>
        <button
          className="px-6 py-3 rounded font-semibold"
          style={{
            background: COLOR_1,
            color: COLOR_2,
            cursor: selected[step] != null ? "pointer" : "not-allowed",
            opacity: selected[step] != null ? 1 : 0.6,
          }}
          onClick={handleNext}
          disabled={selected[step] == null}
        >
          {step === QUIZ_QUESTIONS.length - 1
            ? t("blogPage.quizResult.finish")
            : t("blogPage.quizResult.next")}
        </button>
      </div>
    </div>
  );
}

// Indian Judiciary Flowchart component
function JudiciaryFlowchart() {
  const COLOR_1 = "#002346"; // Deep Blue
  const COLOR_2 = "#F8F4E3"; // Soft Ivory
  const COLOR_3 = "#333333"; // Charcoal Black

  // A simple flowchart using divs and CSS flex/grid with arrows and boxes
  return (
    <section
      className="w-full mx-auto px-6 py-16"
      style={{ background: COLOR_2 }}
      aria-label="Indian Judiciary System Flowchart"
    >
      <h2
        className="text-4xl text-center font-bold mb-12"
        style={{ color: COLOR_3 }}
      >
        Indian Judiciary System
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-16">
        {/* Supreme Court */}
        <div className="flex flex-col items-center">
          <div
            className="rounded-xl border-4 border-solid shadow-lg px-8 py-6 text-center"
            style={{
              borderColor: COLOR_1,
              background: COLOR_2,
              color: COLOR_3,
              minWidth: 280,
            }}
          >
            <h3 className="text-xl font-semibold mb-1">
              Supreme Court of India
            </h3>
            <p className="text-sm">
              Highest judicial authority and final court of appeal.
            </p>
          </div>
          <div
            className="w-0.5 h-12 bg-gradient-to-b from-transparent via-black/50 to-transparent mt-4"
            style={{ backgroundColor: COLOR_3 }}
            aria-hidden="true"
          />
        </div>

        {/* High Courts */}
        <div className="flex justify-center space-x-12">
          <div
            className="rounded-xl border-4 border-solid shadow-lg px-6 py-5 text-center"
            style={{
              borderColor: COLOR_1,
              background: COLOR_2,
              color: COLOR_3,
              minWidth: 220,
            }}
          >
            <h3 className="text-lg font-semibold mb-1">High Courts</h3>
            <p className="text-xs">
              State-level courts with appellate and original jurisdiction.
            </p>
          </div>
        </div>

        <div
          className="w-full border-t-4 border-dashed"
          style={{ borderColor: COLOR_1 }}
          aria-hidden="true"
        />

        {/* Subordinate Courts */}
        <div className="grid grid-cols-3 gap-8 max-w-5xl w-full text-center">
          <div
            className="rounded-xl border-4 border-solid shadow-lg p-4"
            style={{
              borderColor: COLOR_1,
              background: COLOR_2,
              color: COLOR_3,
            }}
            aria-label="District Courts and Sessions Courts"
          >
            <h4 className="font-semibold mb-1">District & Sessions Courts</h4>
            <p className="text-xs">
              Handle civil and criminal cases at district level.
            </p>
          </div>
          <div
            className="rounded-xl border-4 border-solid shadow-lg p-4"
            style={{
              borderColor: COLOR_1,
              background: COLOR_2,
              color: COLOR_3,
            }}
            aria-label="Civil Courts"
          >
            <h4 className="font-semibold mb-1">Civil Courts</h4>
            <p className="text-xs">
              Deal with disputes involving individuals or organizations.
            </p>
          </div>
          <div
            className="rounded-xl border-4 border-solid shadow-lg p-4"
            style={{
              borderColor: COLOR_1,
              background: COLOR_2,
              color: COLOR_3,
            }}
            aria-label="Criminal Courts"
          >
            <h4 className="font-semibold mb-1">Criminal Courts</h4>
            <p className="text-xs">
              Handle cases involving crimes and offences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Blog = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const COLOR_1 = "#002346"; // Deep Blue
  const COLOR_2 = "#F8F4E3"; // Soft Ivory
  const COLOR_3 = "#333333"; // Charcoal Black

  const blogPosts = useBlogPosts(t);
  const suggestions = useSuggestions(t);
  const precautions = usePrecautions(t);

  return (
    <>
      <ScrollToTop />
      <div
        className={`min-h-screen w-full transition-colors duration-300`}
        style={{
          overflowX: "hidden",
          background: darkMode ? COLOR_1 : COLOR_2,
          color: darkMode ? COLOR_2 : COLOR_3,
        }}
      >
        {/* Fixed Header */}
        <div
          className="fixed top-0 left-0 w-full z-[100]"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
          }}
        >
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={user}
            onLogout={onLogout}
          />
        </div>

        {/* 1. Hero Section with Video */}
        <section
          className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
          style={{
            minHeight: "100vh",
            maxWidth: "100vw",
            paddingTop: "64px",
            background: COLOR_1,
          }}
        >
          <video
            autoPlay
            loop
            loading="lazy"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
            style={{
              minHeight: "100vh",
              minWidth: "100vw",
              objectFit: "cover",
              background: COLOR_1,
            }}
          >
            <source src={blog} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1
              className="font-bold text-5xl mb-6 drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-down"
            >
              {t("blogPage.hero.title")}
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-up"
            >
              {t("blogPage.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Blog Grid */}
        <section
          className="w-full py-16 px-4 mx-auto"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="block p-8 min-h-[300px] rounded-2xl shadow-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: COLOR_2,
                  color: COLOR_1,
                  border: `2px solid ${COLOR_1}`,
                  textDecoration: "none",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-base mb-3" style={{ color: COLOR_3 }}>
                    {post.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                    <span className="text-sm" style={{ color: COLOR_1 }}>
                      {post.author}
                    </span>
                    <span
                      className="text-xs mt-2 sm:mt-0"
                      style={{ color: COLOR_3 }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <button
                    className="mt-6 py-2 px-6 font-semibold rounded-full"
                    style={{
                      background: COLOR_3,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                      cursor: "pointer",
                    }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    {t("blogPage.readMore")}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Suggestions Section */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{ background: COLOR_1 }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl text-center font-bold mb-12"
            style={{ color: COLOR_2 }}
          >
            {t("blogPage.suggestionsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {suggestions.map(({ title, description, icon }, idx) => (
              <div
                key={idx}
                className="bg-[#F8F4E3] rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer"
                style={{ color: COLOR_2, minHeight: "260px" }}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                role="article"
                aria-label={title}
              >
                <div className="text-6xl mb-5" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="text-xl text-[#002346] font-semibold mb-4">
                  {title}
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Precautions by Age Group Section */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl text-center font-bold mb-12"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
          >
            {t("blogPage.precautionsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
            {/* Below 18 Age */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{
                border: `3px solid ${COLOR_1}`,
                color: "#002346",
                backgroundColor: "#F8F4E3",
              }}
              role="region"
              aria-label="Precautions for Below 18 Age"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                {t("blogPage.precautions.below18Title")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.below18.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Adults */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{
                border: `3px solid ${COLOR_1}`,
                color: COLOR_3,
                backgroundColor: "#F8F4E3",
              }}
              role="region"
              aria-label="Precautions for Adults"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                {t("blogPage.precautions.adultsTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.adults.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Senior Citizens */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{
                border: `3px solid ${COLOR_1}`,
                color: COLOR_3,
                backgroundColor: "#F8F4E3",
              }}
              role="region"
              aria-label="Precautions for Senior Citizens"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                {t("blogPage.precautions.seniorCitizensTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.seniorCitizens.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: General Knowledge — Supreme Court of India */}
        <section
          className="w-full mx-auto px-6 py-16 flex flex-col md:flex-row items-stretch justify-center max-w-7xl"
          style={{ background: "#002346", borderRadius: "1.5rem" }}
          aria-label="General Knowledge About Supreme Court of India"
          data-aos="fade-up"
        >
          {/* Height sync for image and content */}
          {(() => {
            const leftRef = useRef(null);
            const rightRef = useRef(null);
            useSyncHeight(leftRef, rightRef);

            return (
              <>
                {/* Left: Supreme Court Image */}
                <div
                  ref={leftRef}
                  className="md:w-1/2 w-full flex items-stretch justify-center mb-8 md:mb-0"
                  style={{ transition: "height 0.3s" }}
                >
                  <img
                    src={supremeCourt}
                    alt="Supreme Court of India"
                    className="rounded-xl shadow-lg object-cover border-4 w-full max-w-[360px] h-full"
                    style={{
                      width: "90%",
                      maxWidth: "360px",
                      borderColor: "#002346",
                      borderStyle: "solid",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Right: Content */}
                <div
                  ref={rightRef}
                  className="md:w-1/2 w-full flex flex-col justify-center px-6 py-8 h-full min-h-full"
                >
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#F8F4E3" }}
                  >
                    {t("blogPage.supremeCourt.title")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                    <div>
                      <ul
                        className="list-disc list-inside space-y-3"
                        style={{ color: "#F8F4E3" }}
                      >
                        <li>{t("blogPage.supremeCourt.fact1")}</li>
                        <li>{t("blogPage.supremeCourt.fact2")}</li>
                      </ul>
                    </div>
                    <div>
                      <ul
                        className="list-disc list-inside space-y-3"
                        style={{ color: "#F8F4E3" }}
                      >
                        <li>{t("blogPage.supremeCourt.fact3")}</li>
                        <li>{t("blogPage.supremeCourt.fact4")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </section>

        {/* Quiz Section */}
        <section
          className="w-full py-16 px-4"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="text-3xl font-bold mb-12"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              {t("blogPage.quizTitle")}
            </h2>
            <LawQuiz />
          </div>
        </section>

        {/* Footer */}
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default Blog;
