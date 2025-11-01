import React from "react";
import Asidebar from "../components/aside";
import {
  UsersIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const AdminDashboard: React.FC = () => {
  // --- Dummy Analytics Data ---
  const stats = [
    { label: "Total Users", value: 482, icon: UsersIcon, color: "bg-blue-500" },
    { label: "Total Applications", value: 173, icon: ClipboardDocumentCheckIcon, color: "bg-cyan-500" },
    { label: "Scheduled Exams", value: 12, icon: AcademicCapIcon, color: "bg-yellow-400" },
    { label: "Completed Exams", value: 7, icon: CheckBadgeIcon, color: "bg-green-500" },
  ];

  const stageSummary = [
    { stage: "Stage I — Preliminary", applicants: 150, avgScore: "76%", status: "Completed" },
    { stage: "Stage II — Main", applicants: 98, avgScore: "–", status: "Ongoing" },
    { stage: "Final Stage", applicants: 40, avgScore: "–", status: "Pending" },
  ];

  const recentActivities = [
    { id: 1, user: "ram.sharma", action: "Submitted Main Exam Application", date: "2025-10-28" },
    { id: 2, user: "sita.kc", action: "Profile verified", date: "2025-10-29" },
    { id: 3, user: "bishal.thapa", action: "Stage I result published", date: "2025-10-30" },
    { id: 4, user: "nabin.lama", action: "Interview schedule updated", date: "2025-10-31" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "Ongoing":
        return "bg-yellow-400 text-black";
      case "Pending":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Asidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-8">
            <AcademicCapIcon className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
          </div>

          {/* --- Top Analytics Cards --- */}
          <section className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition"
                >
                  <div>
                    <p className="text-sm text-gray-500">{s.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  </div>
                  <div className={`${s.color} p-3 rounded-lg`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- Stage Summary Table --- */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
              Examination Stage Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-cyan-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Stage</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold">Applicants</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold">Average Score</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stageSummary.map((s, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 text-sm font-medium text-gray-800">{s.stage}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{s.applicants}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{s.avgScore}</td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(
                            s.status
                          )}`}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* --- Recent Activities --- */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ClockIcon className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-yellow-400 text-black">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold">#</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">User</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Action</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivities.map((a, index) => (
                    <tr key={a.id} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-gray-800">{a.user}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{a.action}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{a.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
