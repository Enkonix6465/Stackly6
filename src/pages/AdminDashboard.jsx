import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import {
  PieChart,
  FileText,
  Calendar,
  UserPlus,
  Upload,
  PlusCircle,
  TrendingUp,
  ArrowRight,
  FolderOpen,
  Users
} from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function AdminDashboard({ setDarkMode, darkMode }) {
  // Conditional colors for dark mode
  const textPrimary = darkMode ? '#F8FAFC' : '#002346';
  const textSecondary = darkMode ? '#CBD5E1' : '#4B5563';
  const gridColor = darkMode ? '#334155' : '#E5E7EB';

  // Chart Data & Options
  const pieDataMarketing = {
    labels: ['Email', 'Google', 'Web', 'Referral'],
    datasets: [
      {
        label: 'Marketing Sources',
        data: [25, 30, 25, 20],
        backgroundColor: ['#B57560', '#AABF91', '#D6C2B2', '#8F9779'],
        borderColor: ['#8c5448', '#7f8c6a', '#b9a894', '#6c735c'],
        borderWidth: 1,
      },
    ],
  };
  const barDataMatters = {
    labels: ['Family', 'Business', 'Estate', 'Others'],
    datasets: [
      {
        label: 'Matters by Practice Area',
        data: [5941, 2662, 3221, 1500],
        backgroundColor: '#B57560',
      },
    ],
  };
  const pieDataReferral = {
    labels: ['Organic', 'Email', 'Referral', 'Web'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#AABF91', '#B57560', '#C4DFAA', '#D4E6C9'],
        borderColor: ['#869B71', '#8c5448', '#9EBB7E', '#ADC98D'],
        borderWidth: 1,
      },
    ],
  };
  const pieOptions = (color) => ({
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color } },
      tooltip: { enabled: true },
    },
  });
  const barOptions = (color, grid) => ({
    responsive: true,
    scales: {
      x: { ticks: { color }, grid: { display: false } },
      y: { ticks: { color }, grid: { color: grid } },
    },
    plugins: { legend: { display: false } },
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#002346] transition duration-300 flex flex-col" style={{overflowX: 'hidden'}}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>

      {/* Dashboard */}
      <div className="flex-1 max-w-7xl mx-auto p-4 w-full space-y-6 pt-28 md:pt-36">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Marketing Sources Pie Chart */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col items-center">
            <PieChart size={28} className="mb-2 text-[#B57560] dark:text-[#AABF91]" />
            <div className="font-bold text-[#002346] dark:text-white mb-2 text-lg">Marketing Sources</div>
            <div className="w-full flex justify-center"><Pie data={pieDataMarketing} options={pieOptions(textPrimary)} /></div>
            <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1 text-left">
              <li>Email, Google, Web, Referral...</li>
            </ul>
          </div>
          
          {/* 2-col Quick Stats */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f3f4f6] dark:bg-[#1e293b] p-4 rounded-lg flex flex-col items-center shadow">
                <span className="text-2xl font-bold text-[#002346] dark:text-white">4.48%</span>
                <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Conversion Rate This Year</span>
              </div>
              <div className="bg-[#f3f4f6] dark:bg-[#1e293b] p-4 rounded-lg flex flex-col items-center shadow">
                <span className="text-2xl font-bold text-[#002346] dark:text-white">19.93%</span>
                <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Conversion Rate This Month</span>
              </div>
            </div>
            <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg flex flex-col items-center shadow py-4">
              <TrendingUp size={24} className="text-[#AABF91] dark:text-[#B57560] mb-2" />
              <div className="text-lg font-bold text-[#002346] dark:text-white">Bonus Earnings</div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">₹4,097</span>
                <span className="text-sm text-gray-500 dark:text-gray-300">this week</span>
              </div>
              <span className="text-xs text-gray-400 mt-1">As of Aug 7, 2025</span>
            </div>
          </div>
          
          {/* Task Activity */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col">
            <span className="font-semibold text-[#002346] dark:text-white mb-1">Tasks (30 days)</span>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Onboard new associate</li>
              <li>Verify documents</li>
              <li>Follow up new leads</li>
              <li>Update client records</li>
            </ul>
            <button className="bg-[#B57560] hover:bg-[#8c5448] text-white mt-3 py-1 px-3 rounded text-xs transition">
              View All Tasks
            </button>
          </div>
        </div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Matters by Practice Area Bar Chart */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col">
            <div className="font-bold text-[#002346] dark:text-white mb-2 flex items-center">
              <FileText className="mr-2" /> Matters by Practice Area
            </div>
            <Bar data={barDataMatters} options={barOptions(textPrimary, gridColor)} />
            <ul className="text-xs mt-2 text-gray-700 dark:text-gray-300">
              <li>Family: 5,941 | Business: 2,662 | Estate: 3,221 | Others: …</li>
            </ul>
          </div>
          {/* Revenue Summary */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] p-4 rounded-lg shadow flex flex-col justify-center">
            <div className="font-bold text-[#002346] dark:text-white mb-2">Estimated vs Actual Value</div>
            <div className="flex flex-col gap-1">
              <span className="text-[#002346] dark:text-white text-lg">
                Estimated: <span className="font-bold">₹7,234,923.40</span>
              </span>
              <span className="text-[#AABF91] dark:text-[#B57560] text-lg">
                Actual: <span className="font-bold">₹78,755,799.62</span>
              </span>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              <span className="font-bold text-[#B57560] dark:text-[#AABF91] mr-1">0</span> Pending Signatures
            </div>
            <span className="text-xs text-gray-400 mt-2">Last updated: Aug 7, 2025</span>
          </div>
          {/* Appointments */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col">
            <div className="font-bold text-[#002346] dark:text-white mb-2 flex items-center">
              <Calendar className="mr-2" /> Appointments (Next 20 days)
            </div>
            <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <li>Initial Consultation – Aug 9, 10:30am</li>
              <li>Settlement Conference – Aug 15, 04:30pm</li>
              <li>Review Call – Aug 21, 11:00am</li>
            </ul>
            <button className="bg-[#AABF91] hover:bg-[#8cba55] text-[#002346] mt-3 py-1 px-3 rounded text-xs transition">
              See Calendar
            </button>
          </div>
        </div>

        {/* LAST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Referral Sources Pie */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col items-center">
            <PieChart size={28} className="mb-2 text-[#AABF91] dark:text-[#B57560]" />
            <span className="font-bold text-[#002346] dark:text-white mb-2 text-lg">Referral Sources</span>
            <Pie data={pieDataReferral} options={pieOptions(textPrimary)} />
            <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">
              Organic, Email, Referral, Web…
            </span>
          </div>

          {/* MATTERS OVERVIEW (RICH CONTENT) */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] rounded-lg p-4 shadow flex flex-col justify-between">
            <div>
              <div className="font-bold text-[#002346] dark:text-white mb-1">Matters Overview</div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <FolderOpen className="text-[#B57560] dark:text-[#AABF91]" size={18} />
                    <span className="text-lg font-bold text-[#B57560] dark:text-[#AABF91]">13,183</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total Matters</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <FileText className="text-[#AABF91] dark:text-[#B57560]" size={18} />
                    <span className="text-lg font-bold text-[#AABF91] dark:text-[#B57560]">3,410</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Matters Closed</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Users className="text-[#002346] dark:text-white" size={18} />
                    <span className="text-lg font-bold text-[#002346] dark:text-white">921</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Clients Involved</div>
                </div>
              </div>
              {/* Progress */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-3 mt-2 mb-1">
                <div
                  className="bg-[#AABF91] dark:bg-[#B57560] h-3 rounded"
                  style={{ width: '78%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>78% matters completed</span>
                <span>Last update: 2 hrs ago</span>
              </div>
            </div>
            <button className="mt-4 flex items-center justify-center w-full bg-[#002346] text-white dark:bg-[#AABF91] dark:text-[#1e293b] py-2 px-3 rounded hover:bg-[#1a3b6f] transition text-xs font-semibold">
              <ArrowRight className="mr-2" size={16} /> View Details
            </button>
          </div>

          {/* ENRICHED QUICK ACTIONS */}
          <div className="bg-[#f3f4f6] dark:bg-[#1e293b] p-4 rounded-lg shadow flex flex-col items-center justify-between">
            <span className="font-bold text-[#002346] dark:text-white mb-2">Quick Actions</span>
            <div className="flex flex-col space-y-2 w-full">
              <button className="flex items-center bg-[#B57560] hover:bg-[#8c5448] text-white py-2 px-4 rounded transition text-xs justify-center">
                <PlusCircle className="mr-2" size={18} /> Add New Case
              </button>
              <button className="flex items-center bg-[#AABF91] hover:bg-[#8cba55] text-[#002346] py-2 px-4 rounded transition text-xs justify-center">
                <Calendar className="mr-2" size={18} /> Schedule Meeting
              </button>
              <button className="flex items-center bg-[#D6C2B2] hover:bg-[#b9a894] text-[#002346] py-2 px-4 rounded transition text-xs justify-center">
                <Upload className="mr-2" size={18} /> Upload Document
              </button>
            </div>
            <button className="mt-4 flex items-center text-white dark:text-[#AABF91] underline text-xs font-medium hover:text-[#002346] dark:hover:text-white">
              See All Actions <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
