import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import rights from '../assets/rights.png';

const UnderstandingYourRights = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#002346] text-white' : 'bg-white text-[#002346]'} flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
        
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img src={rights} alt="Understanding Your Rights" className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20" />
          <h1 className="text-4xl font-bold mb-4">Understanding Your Rights When Arrested</h1>
          <p className="mb-1 font-semibold">Adv. Priya Sinha</p>
          <p className="mb-6 text-sm">August 1, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              Being arrested can be overwhelming. It’s crucial to understand the fundamental rights you have to protect yourself legally and ensure fair treatment.
            </p>
            <p>
              Every citizen has the right to remain silent to avoid self-incrimination, the right to legal counsel before any interrogation, and protection from unlawful searches and seizures.
            </p>
            <h2>Right to Remain Silent</h2>
            <p>
              You are not obligated to answer questions from police officers without an attorney present. Anything you say can be used against you in court.
            </p>
            <h2>Right to Legal Counsel</h2>
            <p>
              Ask for a lawyer immediately upon detention or arrest. If you cannot afford one, the court must provide an attorney for you free of cost.
            </p>
            <h2>Protection from Unlawful Searches</h2>
            <p>
              Police generally need a warrant to search your property or person. Be aware that certain exceptions apply, but understanding your rights here can prevent illegal evidence from being used against you.
            </p>
            <h2>Other Important Considerations</h2>
            <ul className="list-disc list-inside">
              <li>Do not resist arrest, even if you believe it is unlawful.</li>
              <li>Memorize or write down the officers’ badge numbers and names.</li>
              <li>Request medical attention if needed without delay.</li>
            </ul>
            <p>
              If you or a loved one is arrested, contact our legal team immediately for trustworthy and expert assistance. Quick action can safeguard your rights and improve outcomes.
            </p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3 bg-[#B57560] text-white rounded shadow hover:bg-[#8c5448] transition"
          >
            &#8592; Back
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default UnderstandingYourRights;
