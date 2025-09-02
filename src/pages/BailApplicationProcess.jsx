import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import bail from "../assets/bail.png";

const BailApplicationProcess = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("bail.pageTitle");
  }, [t]);

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
            src={bail}
            alt="Bail Application Process"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4 mt-4 md:mt-0">
            {t("bail.title")}
          </h1>
          <p className="mb-1 font-semibold">{t("bail.author")}</p>
          <p className="mb-6 text-sm">{t("bail.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("bail.intro")}</p>
            <h2>{t("bail.whatIsTitle")}</h2>
            <p>{t("bail.whatIsText")}</p>
            <h2>{t("bail.hearingTitle")}</h2>
            <p>{t("bail.hearingText")}</p>
            <h2>{t("bail.factorsTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("bail.factors.0")}</li>
              <li>{t("bail.factors.1")}</li>
              <li>{t("bail.factors.2")}</li>
              <li>{t("bail.factors.3")}</li>
            </ul>
            <h2>{t("bail.conditionsTitle")}</h2>
            <p>{t("bail.conditionsText")}</p>
            <h2>{t("bail.tipsTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("bail.tips.0")}</li>
              <li>{t("bail.tips.1")}</li>
              <li>{t("bail.tips.2")}</li>
              <li>{t("bail.tips.3")}</li>
            </ul>
            <p>{t("bail.outro")}</p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3 bg-[#B57560] text-white rounded shadow hover:bg-[#8c5448] transition"
          >
            &#8592; {t("bail.back")}
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default BailApplicationProcess;
