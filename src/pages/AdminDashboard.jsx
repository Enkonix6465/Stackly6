import React, { useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import {
  FileText,
  Users,
  Calendar,
  TrendingUp,
  FolderOpen,
  ArrowRight,
  Upload,
  PlusCircle,
  BarChart2,
  PieChart,
  DollarSign,
  Briefcase,
  UserCheck,
} from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useTranslation } from "react-i18next";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

// New Color Palette
const DARK_BG = "#1A1A2E"; // A deep, rich blue/purple for dark mode
const DARK_TEXT = "#EAEAEA"; // Light grey for text in dark mode
const DARK_CARD = "#2C2C4A"; // A slightly lighter shade for cards in dark mode
const DARK_ACCENT = "#FFD700"; // A bright gold for accents

const LIGHT_BG = "#F5F7FA"; // A soft off-white for light mode
const LIGHT_TEXT = "#2D3748"; // A dark charcoal for text in light mode
const LIGHT_CARD = "#FFFFFF"; // Pure white for cards in light mode
const LIGHT_ACCENT = "#004080"; // A professional deep blue for accents

const getColors = (darkMode) => {
  return {
    bg: darkMode ? DARK_BG : LIGHT_BG,
    text: darkMode ? DARK_TEXT : LIGHT_TEXT,
    card: darkMode ? DARK_CARD : LIGHT_CARD,
    accent: darkMode ? DARK_ACCENT : LIGHT_ACCENT,
    secondary: darkMode ? "#4A4A6F" : "#E2E8F0",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  };
};

// eslint-disable-next-line no-empty-pattern
export default function AdminDashboard({ }) {
  const { t } = useTranslation();
  const [userLogins, setUserLogins] = React.useState([]);
  const [registeredUsers, setRegisteredUsers] = React.useState([]);
  const { darkMode, setDarkMode } = useDarkMode();
  const colors = getColors(darkMode);

  useEffect(() => {
    const fetchUserData = () => {
      let logins = JSON.parse(localStorage.getItem("userLogins") || "[]");
      logins = logins.map((l) => ({
        ...l,
        role:
          l.email === "admin@enkonix.in" || l.name === "Admin"
            ? "Admin"
            : "User",
      }));
      const uniqueLogins = [];
      const seen = new Set();
      for (const entry of logins) {
        const key = `${entry.email}-${entry.event}-${entry.loginDate}-${entry.loginTime}`;
        if (!seen.has(key)) {
          uniqueLogins.push(entry);
          seen.add(key);
        }
      }
      setUserLogins(uniqueLogins);
      setRegisteredUsers(
        JSON.parse(localStorage.getItem("registeredUsers") || "[]"),
      );
    };
    fetchUserData();
    window.addEventListener("storage", fetchUserData);
    window.addEventListener("focus", fetchUserData);
    return () => {
      window.removeEventListener("storage", fetchUserData);
      window.removeEventListener("focus", fetchUserData);
    };
  }, []);

  const firmOverviewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: t("adminDashboard.billable"),
        data: [27, 51, 72, 38, 94, 102],
        backgroundColor: colors.accent,
        borderRadius: 5,
      },
      {
        label: t("adminDashboard.nonBillable"),
        data: [13, 26, 38, 16, 29, 42],
        backgroundColor: colors.secondary,
        borderRadius: 5,
      },
    ],
  };

  const financialCardData = [
    {
      label: t("adminDashboard.financial.draftBills"),
      value: 16,
      icon: Briefcase,
      color: colors.accent,
    },
    {
      label: t("adminDashboard.financial.totalInDraft"),
      value: 4,
      icon: DollarSign,
      color: colors.success,
    },
    {
      label: t("adminDashboard.financial.unpaidBills"),
      value: 0,
      icon: FileText,
      color: colors.danger,
    },
    {
      label: t("adminDashboard.financial.overdueBills"),
      value: 2,
      icon: Calendar,
      color: colors.warning,
    },
    {
      label: t("adminDashboard.financial.totalInOverdue"),
      value: 0,
      icon: TrendingUp,
      color: colors.danger,
    },
  ];

  const statsByCountry = {
    labels: ["UK", "CANADA", "USA", "AUS", "BD"],
    datasets: [
      {
        label: t("adminDashboard.billableDiscounted"),
        data: [182, 240, 320, 210, 78],
        backgroundColor: colors.accent,
        borderRadius: 8,
      },
    ],
  };

  const recentInvoices = [
    { client: "Courtney Henry", status: "Paid" },
    { client: "Courtney Henry", status: "Pending" },
    { client: "Courtney Henry", status: "Paid" },
    { client: "Courtney Henry", status: "Unpaid" },
  ];
   // Strict palette
  const COLOR_1 = "#002346"; // Deep Blue
  const COLOR_2 = "#F8F4E3"; // Soft Ivory
  const COLOR_3 = "#333333"; // Charcoal Black

  // Conditional text color
  const textPrimary = darkMode ? COLOR_2 : COLOR_3;
  const cardBg = darkMode ? COLOR_3 : COLOR_2;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <div
        className="sticky top-0 z-10 w-full shadow-lg"
        style={{
          backgroundColor: colors.card,
        }}
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        {/* Header and User Activity */}
        <section className="mb-10">
          <div
            className="rounded-3xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
            style={{ backgroundColor: colors.card }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {t("adminDashboard.userLoginActivity")}
              </h2>
              <div
                className="rounded-full px-4 py-1 text-sm font-semibold"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.text,
                }}
              >
                {t("adminDashboard.totalRegisteredUsers")}:
                <span className="ml-2 font-bold">
                  {registeredUsers.length}
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead
                  className="whitespace-nowrap rounded-lg"
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.text,
                  }}
                >
                  <tr className="[&>*]:px-3 [&>*]:py-3">
                    <th>{t("adminDashboard.table.email")}</th>
                    <th>{t("adminDashboard.table.name")}</th>
                    <th>{t("adminDashboard.table.role")}</th>
                    <th>{t("adminDashboard.table.time")}</th>
                    <th>{t("adminDashboard.table.date")}</th>
                    <th>{t("adminDashboard.table.event")}</th>
                  </tr>
                </thead>
                <tbody>
                  {userLogins.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-8 text-center">
                        {t("adminDashboard.noUserLogins")}
                      </td>
                    </tr>
                  ) : (
                    userLogins
                      .slice()
                      .reverse()
                      .map((login, idx) => (
                        <tr
                          key={idx}
                          className="border-b transition-colors duration-200 last:border-b-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                          style={{ borderColor: colors.secondary }}
                        >
                          <td className="whitespace-nowrap px-3 py-3">
                            {login.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {login.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {login.role}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {login.loginTime}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {login.loginDate}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            <span
                              className="rounded-full px-2 py-1 text-xs font-semibold"
                              style={{
                                color: colors.card,
                                backgroundColor:
                                  login.event === "signup"
                                    ? colors.accent
                                    : colors.accent,
                              }}
                            >
                              {login.event === "signup"
                                ? t("adminDashboard.signup")
                                : t("adminDashboard.login")}
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Financial Overview Cards */}
        <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {financialCardData.map((card, idx) => (
            <div
              key={idx}
              className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl p-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: colors.card,
                borderBottom: `4px solid ${card.color}`,
              }}
            >
              <card.icon
                size={36}
                className="text-gray-500 transition-colors duration-300 group-hover:text-black"
                style={{ color: card.color }}
              />
              <span className="mt-3 text-3xl font-extrabold">{card.value}</span>
              <span
                className="mt-1 text-sm font-semibold opacity-85"
                style={{ color: colors.text }}
              >
                {card.label}
              </span>
            </div>
          ))}
        </section>

        {/* Firm Overview and Client Map */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Firm Overview Bar Chart */}
          <div
            className="rounded-3xl p-6 shadow-xl md:col-span-2"
            style={{ backgroundColor: colors.card }}
          >
            <div className="mb-4 flex flex-col justify-between md:flex-row">
              <h3 className="text-lg font-bold">
                {t("adminDashboard.firmOverview")}
              </h3>
              <span className="text-sm font-semibold opacity-75">
                {t("adminDashboard.currentTime", { percent: "13.6%" })}
              </span>
            </div>
            <div className="h-[250px]">
              <Bar
                data={firmOverviewData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      labels: { color: colors.text },
                    },
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { color: colors.text },
                    },
                    y: {
                      ticks: { color: colors.text },
                      grid: { color: colors.secondary },
                    },
                  },
                }}
              />
            </div>
            <div className="mt-4 text-right text-sm font-semibold opacity-75">
              {t("adminDashboard.firmOverviewTotal", {
                total: "$54,129.546",
                billable: 235,
              })}
            </div>
          </div>

          {/* Client Locations Map Placeholder */}
          <div
            className="rounded-2xl shadow-md p-4 flex flex-col items-center"
            style={{
              background: cardBg,
              minHeight: "220px",
              justifyContent: "center",
            }}
          >
            <span
              className="font-bold text-lg mb-2"
              style={{ color: textPrimary }}
            >
              {t("adminDashboard.clientsLocations")}
            </span>
            {/* insert world map component or static svg here */}
            <div className="w-full flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/300px-World_map_-_low_resolution.svg.png"
                alt="Clients Map"
                style={{ maxWidth: 180, opacity: 0.7, borderRadius: 10 }}
              />
            </div>
            <div className="flex gap-5 mt-3">
              <span className="flex items-center text-xs">
                <span
                  className="w-2 h-2 mr-1 rounded-full"
                  style={{ background: COLOR_1 }}
                />{" "}
                {t("adminDashboard.active")}
              </span>
              <span
                className="flex items-center text-xs"
                style={{ color: darkMode ? COLOR_2 : COLOR_1, opacity: 0.7 }}
              >
                <span
                  className="w-2 h-2 mr-1 rounded-full"
                  style={{
                    background: COLOR_2,
                    border: `1.5px solid ${COLOR_3}`,
                  }}
                />{" "}
                {t("adminDashboard.nonActive")}
              </span>
            </div>
            </div>
        </section>

        {/* Country Stats and Recent Invoices */}
        <section className="mb-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* By Country Bar Chart */}
          <div
            className="rounded-3xl p-6 shadow-xl"
            style={{ backgroundColor: colors.card }}
          >
            <h3 className="mb-4 text-lg font-bold">
              {t("adminDashboard.billableByCountry")}
            </h3>
            <div className="h-[250px]">
              <Bar
                data={statsByCountry}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { color: colors.text },
                    },
                    y: {
                      ticks: { color: colors.text },
                      grid: { color: colors.secondary },
                    },
                  },
                }}
              />
            </div>
            <div className="mt-4 text-right text-sm font-semibold opacity-75">
              {t("adminDashboard.billableDiscounted", {
                amount: "$1,129.546",
              })}
            </div>
          </div>

          {/* Recent Invoice Table */}
          <div
            className="rounded-3xl p-6 shadow-xl"
            style={{ backgroundColor: colors.card }}
          >
            <h3 className="mb-4 text-lg font-bold">
              {t("adminDashboard.recentInvoices")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead
                  className="rounded-lg"
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.text,
                  }}
                >
                  <tr className="[&>*]:px-3 [&>*]:py-3">
                    <th className="text-left">
                      {t("adminDashboard.invoiceTable.clientName")}
                    </th>
                    <th className="text-left">
                      {t("adminDashboard.invoiceTable.status")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentInvoices.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b transition-colors duration-200 last:border-b-0  dark: ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                      style={{ borderColor: colors.secondary }}
                    >
                      <td className="py-3 font-medium">{row.client}</td>
                      <td className="py-3">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            color: "white",
                            backgroundColor:
                              row.status === "Paid"
                                ? colors.success
                                : row.status === "Pending"
                                  ? colors.warning
                                  : colors.danger,
                          }}
                        >
                          {row.status === "Paid"
                            ? t("adminDashboard.invoiceTable.paid")
                            : row.status === "Pending"
                              ? t("adminDashboard.invoiceTable.pending")
                              : t("adminDashboard.invoiceTable.unpaid")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Matters Overview Cards */}
        <section className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            className="flex transform cursor-pointer flex-col items-center justify-center rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.card }}
          >
            <Briefcase size={48} style={{ color: colors.accent }} />
            <div className="mt-3 text-3xl font-bold">13,183</div>
            <div className="mt-1 text-sm font-semibold uppercase opacity-85">
              {t("adminDashboard.stats.totalMatters")}
            </div>
          </div>
          <div
            className="flex transform cursor-pointer flex-col items-center justify-center rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.card }}
          >
            <FolderOpen size={48} style={{ color: colors.accent }} />
            <div className="mt-3 text-3xl font-bold">3,410</div>
            <div className="mt-1 text-sm font-semibold uppercase opacity-85">
              {t("adminDashboard.stats.closedMatters")}
            </div>
          </div>
          <div
            className="flex transform cursor-pointer flex-col items-center justify-center rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.card }}
          >
            <Users size={48} style={{ color: colors.accent }} />
            <div className="mt-3 text-3xl font-bold">921</div>
            <div className="mt-1 text-sm font-semibold uppercase opacity-85">
              {t("adminDashboard.stats.clientsInvolved")}
            </div>
          </div>
        </section>
      </main>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}