import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const BailApplicationProcess = ({ darkMode, setDarkMode, user, onLogout }) => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'The Bail Application Process: What to Expect | Verdict Law';
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#002346] text-[#002346] dark:text-white flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-28 md:pt-40">
        <article>
          <h1 className="text-4xl font-bold mb-4 mt-4 md:mt-0">The Bail Application Process: What to Expect</h1>
          <p className="mb-1 font-semibold">Adv. Rahul Mohanty</p>
          <p className="mb-6 text-sm">July 24, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              Navigating the bail application process can be stressful and confusing. Understanding each step, your rights, and what to expect can help you secure the best possible outcome.
            </p>
            <h2>What is Bail?</h2>
            <p>
              Bail is a legal mechanism allowing a detained individual to be released from custody, usually under certain conditions, until their trial date. Bail amounts and conditions vary based on the offense and other factors.
            </p>
            <h2>The Bail Hearing</h2>
            <p>
              Soon after arrest, a bail hearing is conducted where the court decides whether to grant bail and under what conditions. Your legal representative will advocate for your release by presenting arguments and evidence.
            </p>
            <h2>Factors Courts Consider</h2>
            <ul className="list-disc list-inside">
              <li>Severity and nature of the offense</li>
              <li>Likelihood of fleeing or tampering with evidence</li>
              <li>Criminal history and community ties</li>
              <li>Risk to public safety</li>
            </ul>
            <h2>Bail Conditions</h2>
            <p>
              If granted, bail may include conditions like regular check-ins, travel restrictions, or surrendering passports. Non-compliance can lead to revocation of bail and re-arrest.
            </p>
            <h2>Tips for a Successful Bail Application</h2>
            <ul className="list-disc list-inside">
              <li>Engage experienced legal counsel immediately</li>
              <li>Prepare strong arguments highlighting your ties to the community</li>
              <li>Provide character references and proof of stable residence or employment</li>
              <li>Be honest and cooperative during hearings</li>
            </ul>
            <p>
              Our skilled legal team is ready to guide you through the bail process with effective strategies and dedicated representation. Contact us promptly to discuss your case.
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

export default BailApplicationProcess;
