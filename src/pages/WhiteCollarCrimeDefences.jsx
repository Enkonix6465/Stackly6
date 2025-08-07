import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const WhiteCollarCrimeDefenses = ({ darkMode, setDarkMode, user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen bg-white dark:bg-[#002346] text-[#002346] dark:text-white flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-32 md:pt-40">
        <article>
          <h1 className="text-4xl font-bold mb-4">White-Collar Crime: Common Defenses Explained</h1>
          <p className="mb-1 font-semibold">Adv. Sneha Nair</p>
          <p className="mb-6 text-sm">July 15, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              White-collar crime charges are complex and require expert legal defense strategies. Understanding common defenses can help protect your rights and freedom.
            </p>
            <h2>Understanding White-Collar Crimes</h2>
            <p>
              These offenses typically involve non-violent financial crimes such as fraud, embezzlement, money laundering, or regulatory violations. The stakes are often high, with significant penalties.
            </p>
            <h2>Common Defenses</h2>
            <ul className="list-disc list-inside">
              <li><strong>Lack of Intent:</strong> Proving the accused did not knowingly or deliberately commit the offense.</li>
              <li><strong>Insufficient Evidence:</strong> Challenging the prosecution's proof and highlighting reasonable doubt.</li>
              <li><strong>Procedural Errors:</strong> Identifying violations in investigation or arrest that may invalidate evidence.</li>
              <li><strong>Reliance on Expert Advice:</strong> Demonstrating compliance based on advice from legal or financial experts.</li>
              <li><strong>Statute of Limitations:</strong> Arguing the case was filed after the legally allowed time frame.</li>
            </ul>
            <h2>Importance of Skilled Legal Representation</h2>
            <p>
              White-collar crime cases are often technically and legally nuanced. An experienced attorney will conduct a thorough investigation, identify weaknesses in the prosecution’s case, and craft a strategic defense tailored to your situation.
            </p>
            <p>
              If you face allegations of white-collar crime, promptly consult with our legal team to ensure your rights are robustly protected throughout the legal process.
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

export default WhiteCollarCrimeDefenses;
