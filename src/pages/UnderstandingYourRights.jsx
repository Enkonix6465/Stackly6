import React from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import rights from "../assets/rights.png";

const UnderstandingYourRights = ({ user, onLogout }) => {
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
            src={rights}
            alt="Understanding Your Rights"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4">{t("rights.title")}</h1>
          <p className="mb-1 font-semibold">{t("rights.author")}</p>
          <p className="mb-6 text-sm">{t("rights.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("rights.intro1")}</p>
            <p>{t("rights.intro2")}</p>
            <h2>{t("rights.silentTitle")}</h2>
            <p>{t("rights.silentText")}</p>
            <h2>{t("rights.counselTitle")}</h2>
            <p>{t("rights.counselText")}</p>
            <h2>{t("rights.searchTitle")}</h2>
            <p>{t("rights.searchText")}</p>
            <h2>{t("rights.otherTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("rights.other1")}</li>
              <li>{t("rights.other2")}</li>
              <li>{t("rights.other3")}</li>
            </ul>
            <p>{t("rights.outro")}</p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3   rounded shadow  transition"
          >
            &#8592; {t("rights.back")}
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default UnderstandingYourRights;
