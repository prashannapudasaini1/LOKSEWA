import React from "react";
import Sidebar from "../components/sidebar";
import { UserIcon, ClipboardDocumentCheckIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const Dashboard: React.FC = () => {
  // --- Dummy data (pulled or passed from Profile, Application, Exams) ---
  const user = {
    username: "john_doe",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    phoneNumber: "9800000000",
  };

  const applicationStages = [
    { id: 1, stage: "Stage I — Preliminary", status: "Approved", examDate: "2025-03-20", examTime: "10:00 AM" },
    { id: 2, stage: "Stage II — Main", status: "Pending", examDate: "2025-05-10", examTime: "10:00 AM" },
    { id: 3, stage: "Final Stage", status: "Pending", examDate: "2025-07-05", examTime: "9:00 AM" },
  ];

  const exams = [
    { id: 1, subject: "General Knowledge", status: "Completed", score: "82%" },
    { id: 2, subject: "English Language", status: "Current" },
    { id: 3, subject: "Aptitude Test", status: "Pending" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
      case "Completed":
        return "bg-green-500 text-white";
      case "Current":
        return "bg-yellow-400 text-black";
      case "Pending":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          {/* Dashboard Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-8">
            <AcademicCapIcon className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          </div>

          {/* 1️⃣ Profile Summary */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <UserIcon className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800">Profile Summary</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard label="Full Name" value={`${user.firstName} ${user.lastName}`} />
              <DashboardCard label="Username" value={user.username} />
              <DashboardCard label="Gender" value={user.gender} />
              <DashboardCard label="Email" value={user.email} />
              <DashboardCard label="Phone" value={user.phoneNumber} />
            </div>
          </section>

          {/* 2️⃣ Application Status */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <ClipboardDocumentCheckIcon className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800">Application Stages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applicationStages.map((stage) => (
                <div
                  key={stage.id}
                  className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{stage.stage}</h4>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-medium">Exam Date:</span> {stage.examDate}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-medium">Time:</span> {stage.examTime}
                  </p>
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(stage.status)}`}
                  >
                    {stage.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 3️⃣ Exam Progress */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AcademicCapIcon className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800">Exam Progress</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{exam.subject}</h4>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      exam.status
                    )}`}
                  >
                    {exam.status}
                  </span>
                  {exam.status === "Completed" && (
                    <p className="mt-3 text-gray-800 font-semibold">
                      Score: <span className="text-green-600">{exam.score}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// --- Reusable Dashboard Card ---
const DashboardCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-300 shadow-sm">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "-"}</p>
  </div>
);

export default Dashboard;
