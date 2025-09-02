import React from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import whiteCollarCrime from "../assets/whiteCollarCrime.png";

const WhiteCollarCrimeDefenses = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-[#002346] text-white" : "bg-white text-[#002346]"} flex flex-col transition-colors duration-300`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
        />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img
            src={whiteCollarCrime}
            alt="White Collar Crime Defences"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4">{t("whiteCollar.title")}</h1>
          <p className="mb-1 font-semibold">{t("whiteCollar.author")}</p>
          <p className="mb-6 text-sm">{t("whiteCollar.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("whiteCollar.intro")}</p>
            <h2>{t("whiteCollar.understandingTitle")}</h2>
            <p>{t("whiteCollar.understandingText")}</p>
            <h2>{t("whiteCollar.defensesTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>{t("whiteCollar.defenses.0.title")}</strong>{" "}
                {t("whiteCollar.defenses.0.text")}
              </li>
              <li>
                <strong>{t("whiteCollar.defenses.1.title")}</strong>{" "}
                {t("whiteCollar.defenses.1.text")}
              </li>
              <li>
                <strong>{t("whiteCollar.defenses.2.title")}</strong>{" "}
                {t("whiteCollar.defenses.2.text")}
              </li>
              <li>
                <strong>{t("whiteCollar.defenses.3.title")}</strong>{" "}
                {t("whiteCollar.defenses.3.text")}
              </li>
              <li>
                <strong>{t("whiteCollar.defenses.4.title")}</strong>{" "}
                {t("whiteCollar.defenses.4.text")}
              </li>
            </ul>
            <h2>{t("whiteCollar.importanceTitle")}</h2>
            <p>{t("whiteCollar.importanceText")}</p>
            <p>{t("whiteCollar.outro")}</p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3 bg-[#B57560] text-white rounded shadow hover:bg-[#8c5448] transition"
          >
            &#8592; {t("whiteCollar.back")}
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default WhiteCollarCrimeDefenses;
