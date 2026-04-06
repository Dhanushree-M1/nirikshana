"use client";
import { motion } from "framer-motion";
import { CheckCircle, Leaf } from "lucide-react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const emissionData = [
  { name: "Transport", value: 42, color: "#10b981" },
  { name: "Energy", value: 31, color: "#059669" },
  { name: "Diet", value: 18, color: "#34d399" },
  { name: "Waste", value: 9, color: "#a3e4c5" },
];

const monthlyData = [
  { month: "Nov", co2: 220 },
  { month: "Dec", co2: 180 },
  { month: "Jan", co2: 150 },
  { month: "Feb", co2: 120 },
  { month: "Mar", co2: 90 },
  { month: "Apr", co2: 65 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 pt-6">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-10">
          <Leaf className="w-8 h-8 text-emerald-600" />
          <span className="font-bold text-2xl text-emerald-700">NiRikshana</span>
        </div>
        <nav className="space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-2xl font-medium">📊 Dashboard</a>
          <a href="/calculator" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl">🧮 Calculator</a>
          <a href="/impact" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl">🌍 Live Impact</a>
          <a href="/community" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl">👥 Community</a>
          <a href="/resources" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl">📚 Resources</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Welcome back, Dhanushree</h1>
            <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-3xl shadow-sm">
              <div className="w-9 h-9 bg-emerald-100 rounded-2xl flex items-center justify-center">🌱</div>
              <div>
                <p className="font-medium">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Impact Score Gauge */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Your Impact Score</h2>
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="14" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#10b981" strokeWidth="14" strokeDasharray="327" strokeDashoffset="65" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-7xl font-bold text-emerald-600">78</span>
                    <span className="text-sm text-gray-500 mt-1">/ 100 — Excellent!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly CO₂ Chart */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Monthly CO₂ Reduction (Last 6 Months)</h2>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="co2" stroke="#10b981" strokeWidth={5} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Emission Breakdown Pie */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Your Emission Breakdown</h2>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie data={emissionData} dataKey="value" cx="50%" cy="50%" outerRadius={110}>
                    {emissionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Actions & Challenges */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Actions</h2>
              <div className="space-y-4 mb-10">
                {[1,2,3].map((i) => (
                  <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                      <span>Planted {i+2} trees via local NGO</span>
                    </div>
                    <span className="text-emerald-600 font-medium">+50 pts</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-6">This Week’s Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 p-6 rounded-3xl text-center hover:bg-emerald-100 cursor-pointer">🥗 Go meat-free for 3 days</div>
                <div className="bg-emerald-50 p-6 rounded-3xl text-center hover:bg-emerald-100 cursor-pointer">🚲 Cycle to work 2 days</div>
                <div className="bg-emerald-50 p-6 rounded-3xl text-center hover:bg-emerald-100 cursor-pointer">♻️ Zero waste day</div>
              </div>
            </div>
          </div>

          {/* Impact Report Button */}
          <div className="mt-10 text-center">
            <button 
              onClick={() => alert("📄 Your beautiful Impact Report PDF is ready to download! (Full implementation available next)")}
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-3xl shadow-lg shadow-emerald-500/30 transition-all"
            >
              Download Full Impact Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}