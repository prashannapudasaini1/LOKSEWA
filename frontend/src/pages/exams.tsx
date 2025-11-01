import React, { useState } from "react";
import Sidebar from "../components/sidebar";

interface Exam {
  id: number;
  subject: string;
  date: string;
  time: string;
  status: "Completed" | "Current" | "Pending";
  score?: string;
}

const Exams: React.FC = () => {
  const [exams] = useState<Exam[]>([
    {
      id: 1,
      subject: "General Knowledge (Samanya Gyan)",
      date: "2025-09-15",
      time: "10:00 AM - 12:00 PM",
      status: "Completed",
      score: "82%",
    },
    {
      id: 2,
      subject: "Nepali Language and Grammar",
      date: "2025-09-20",
      time: "9:00 AM - 11:00 AM",
      status: "Completed",
      score: "88%",
    },
    {
      id: 3,
      subject: "English Language and Comprehension",
      date: "2025-11-01",
      time: "11:00 AM - 1:00 PM",
      status: "Current",
    },
    {
      id: 4,
      subject: "Aptitude Test (Tarkik Abhiyog)",
      date: "2025-11-05",
      time: "9:00 AM - 11:00 AM",
      status: "Pending",
    },
    {
      id: 5,
      subject: "Public Administration and Governance",
      date: "2025-11-08",
      time: "1:00 PM - 3:00 PM",
      status: "Pending",
    },
    {
      id: 6,
      subject: "Constitution and Political System of Nepal",
      date: "2025-11-10",
      time: "10:00 AM - 12:00 PM",
      status: "Pending",
    },
    {
      id: 7,
      subject: "Current Affairs and Contemporary Issues",
      date: "2025-11-12",
      time: "2:00 PM - 4:00 PM",
      status: "Pending",
    },
  ]);

  const completedExams = exams.filter((exam) => exam.status === "Completed");
  const currentExams = exams.filter((exam) => exam.status === "Current");
  const pendingExams = exams.filter((exam) => exam.status === "Pending");

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          {/* Header */}
          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Loksewa Exam Overview</h2>
            <p className="text-gray-600">View your current, pending, and completed Loksewa exams</p>
          </div>

          {/* Current Exams */}
          <ExamSection
            title="Current Exams"
            color="border-yellow-400 bg-yellow-100"
            exams={currentExams}
            emptyText="No ongoing exams right now."
          />

          {/* Pending Exams */}
          <ExamSection
            title="Pending Exams"
            color="border-blue-400 bg-blue-100"
            exams={pendingExams}
            emptyText="No upcoming Loksewa exams scheduled."
          />

          {/* Completed Exams */}
          <ExamSection
            title="Completed Exams"
            color="border-green-400 bg-green-100"
            exams={completedExams}
            emptyText="You haven’t completed any Loksewa exams yet."
          />
        </div>
      </main>
    </div>
  );
};

// --- Exam Section Component ---
const ExamSection: React.FC<{
  title: string;
  color: string;
  exams: Exam[];
  emptyText: string;
}> = ({ title, color, exams, emptyText }) => (
  <section className="mb-10">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
      {title}
    </h3>

    {exams.length === 0 ? (
      <p className="text-gray-600 italic">{emptyText}</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className={`rounded-xl p-5 border ${color} shadow-sm hover:shadow-md transition`}
          >
            <h4 className="text-lg font-bold text-gray-800 mb-2">{exam.subject}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Date:</span> {exam.date}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Time:</span> {exam.time}
            </p>

            <p
              className={`inline-block mt-2 text-sm font-semibold px-3 py-1 rounded-full ${
                exam.status === "Completed"
                  ? "bg-green-500 text-white"
                  : exam.status === "Current"
                  ? "bg-yellow-400 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {exam.status}
            </p>

            {exam.status === "Completed" && exam.score && (
              <p className="mt-3 text-gray-800 font-semibold">
                Score: <span className="text-green-600">{exam.score}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    )}
  </section>
);

export default Exams;
