import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AOS from 'aos';

import blog from '../assets/blogHero.mp4';
import priyaSinha from '../assets/priyaSinha.jpg';
import rahulMohanty from '../assets/rahulMohanty.jpg';
import snehaNair from '../assets/snehaNair.jpg';

const blogPosts = [
  {
    title: "Understanding Your Rights When Arrested",
    date: "August 1, 2025",
    excerpt:
      "Being arrested can be overwhelming. Learn the crucial rights every citizen should know and how to protect yourself legally...",
    slug: "understanding-your-rights",
    author: "Adv. Priya Sinha",
  },
  {
    title: "The Bail Application Process: What to Expect",
    date: "July 24, 2025",
    excerpt:
      "Need help with bail? We break down the step-by-step process and offer tips for best outcomes at your first hearing...",
    slug: "bail-application-process",
    author: "Adv. Rahul Mohanty",
  },
  {
    title: "White-Collar Crime: Common Defenses Explained",
    date: "July 15, 2025",
    excerpt:
      "White-collar charges are complex. Explore the most effective legal defenses for fraud, embezzlement, and regulatory offences.",
    slug: "white-collar-crime-defenses",
    author: "Adv. Sneha Nair",
  },
];

const attorneys = [
  {
    name: "Adv. Priya Sinha",
    area: "Criminal Defence, Civil Rights",
    description: "15+ years protecting client rights and liberties with compassion and strength.",
    img: priyaSinha,
  },
  {
    name: "Adv. Rahul Mohanty",
    area: "Bail & Remand, High Court Practice",
    description: "Dedicated to securing swift bail and effective trial defence for our clients.",
    img: rahulMohanty,
  },
  {
    name: "Adv. Sneha Nair",
    area: "Financial Crime, White-collar Defence",
    description: "Expert in high-stakes fraud and regulatory litigation.",
    img: snehaNair,
  },
];

const topics = [
  "Criminal Law",
  "Bail",
  "Trial Strategy",
  "White-Collar Crime",
  "Rights & Duties",
  "Juvenile Law",
  "Appeals",
  "Legal Process",
];

const faqs = [
  {
    question: "What should I do if I am arrested?",
    answer: "Stay calm, do not resist, and request to speak to a lawyer immediately. Avoid answering questions without your attorney present.",
  },
  {
    question: "Can I get bail for any offence?",
    answer: "Bail depends on the nature and seriousness of the offence, the facts of your case, and the discretion of the court.",
  },
  {
    question: "How quickly can I get legal advice?",
    answer: "Our team offers an emergency helpline—call us anytime for prompt and expert legal guidance.",
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "We provide an initial risk-free case assessment to understand your needs and explain your options.",
  },
];

const Blog = ({ darkMode, setDarkMode, user, onLogout }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
      style={{ overflowX: "hidden" }}
    >
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
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
        style={{ minHeight: "100vh", maxWidth: "100vw", paddingTop: "64px" }} // offset for fixed header height
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={blog} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
          <h1
            className="font-bold text-5xl mb-6 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            Legal Insights & Updates
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg"
            data-aos="fade-up"
          >
            News, legal guides, and expert tips from our attorneys—helping you stay informed and empowered.
          </p>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section
        className="w-full py-16 px-4 mx-auto"
        style={{ background: darkMode ? "#002346" : "#B57560" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="block p-8 min-h-[300px] rounded-2xl shadow-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: index % 2 === 0 ? "#AABF91" : "#fff",
                color: index % 2 === 0 ? "#002346" : "#B57560",
                border: `2px solid ${index % 2 === 0 ? "#002346" : "#AABF91"}`,
                textDecoration: "none",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-base mb-3" style={{ color: "#002346" }}>
                  {post.excerpt}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                  <span className="text-sm" style={{ color: "#B57560" }}>
                    {post.author}
                  </span>
                  <span className="text-xs mt-2 sm:mt-0" style={{ color: "#002346" }}>
                    {post.date}
                  </span>
                </div>
                <button
                  className="mt-6 py-2 px-6 font-semibold rounded-full"
                  style={{
                    background: "#002346",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Attorneys Section */}
      <section
        className="w-full mx-auto px-6 py-16"
        style={{ background: darkMode ? "#002346" : "#f3f4f6" }}
      >
        <h2
          className="text-4xl text-center font-bold mb-12"
          style={{ color: darkMode ? "#AABF91" : "#002346" }}
          data-aos="fade-up"
        >
          Meet Our Attorneys
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {attorneys.map(({ name, area, description, img }, index) => (
            <div
              key={name}
              className="relative rounded-2xl shadow-lg flex-1 flex flex-col justify-end items-center overflow-hidden bg-white dark:bg-[#1e293b]"
              style={{
                minWidth: 280,
                maxWidth: 320,
                height: 340,
                margin: "0 auto",
                color: "#fff",
                border: `3px solid ${["#AABF91", "#B57560", "#002346"][index % 3]}`,
              }}
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              <div
                className="absolute inset-0 transition-transform duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
                aria-label={name}
              />
              <div className="relative z-10 p-6 w-full flex flex-col items-center text-center">
                <h3
                  className="text-2xl font-bold mb-2 drop-shadow-lg"
                  style={{ color: "#fff" }}
                >
                  {name}
                </h3>
                <p
                  className="text-base font-semibold mb-1 drop-shadow-lg"
                  style={{ color: "#002346" }}
                >
                  {area}
                </p>
                <p className="text-base drop-shadow-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trending Legal Topics */}
      <section
        className="w-full py-12 px-4"
        style={{ background: "#B57560" }}
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#002346" }}>
            Trending Legal Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {topics.map((topic, idx) => (
              <span
                key={topic}
                className="px-6 py-3 rounded-full text-lg font-semibold shadow-md transition transform hover:scale-110 cursor-pointer"
                style={{
                  background: idx % 2 === 0 ? "#002346" : "#fff",
                  color: idx % 2 === 0 ? "#fff" : "#B57560",
                  border: `2px solid #002346`,
                }}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section
        className="w-full py-16 px-4"
        style={{ background: "#AABF91" }}
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#002346" }}>
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6 text-left">
            {faqs.map((fq, i) => (
              <div
                key={fq.question}
                className="p-6 rounded-xl shadow-lg cursor-pointer"
                style={{ background: "#fff", color: "#002346", border: "2px solid #B57560" }}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: "#B57560" }}>
                  {fq.question}
                </h3>
                <p className="text-base">{fq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Blog;
