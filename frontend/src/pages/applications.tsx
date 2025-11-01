import React from "react";
import Sidebar from "../components/sidebar";
import { ClipboardDocumentCheckIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

interface ExamStage {
  id: number;
  stage: string;
  description: string;
  fullMarks: string;
  paperCount: string;
  applyDate: string;
  approvalStatus: "Approved" | "Pending" | "Rejected";
  examDate: string;
  examTime: string;
}

const Application: React.FC = () => {
  const stages: ExamStage[] = [
    {
      id: 1,
      stage: "Stage I — Preliminary Examination",
      description: "Objective Multiple Choice Questions (MCQs).",
      fullMarks: "100 marks",
      paperCount: "1 paper",
      applyDate: "2025-02-15",
      approvalStatus: "Approved",
      examDate: "2025-03-20",
      examTime: "10:00 AM – 11:30 AM",
    },
    {
      id: 2,
      stage: "Stage II — Main Examination",
      description: "Two or more subjective written papers.",
      fullMarks: "200 marks (2 papers × 100 marks each)",
      paperCount: "2 papers",
      applyDate: "2025-04-05",
      approvalStatus: "Approved",
      examDate: "2025-05-10",
      examTime: "10:00 AM – 4:00 PM",
    },
    {
      id: 3,
      stage: "Final Stage Examination",
      description: "Includes skill test, group test/discussion, and interview.",
      fullMarks: "Varies by category",
      paperCount: "Skill test + Interview",
      applyDate: "2025-06-15",
      approvalStatus: "Pending",
      examDate: "2025-07-05",
      examTime: "Starts at 9:00 AM",
    },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Approved": return "bg-green-500 text-white";
      case "Pending": return "bg-yellow-400 text-black";
      case "Rejected": return "bg-red-500 text-white";
      default: return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">

          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
            <ClipboardDocumentCheckIcon className="w-7 h-7 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">Application & Exam Schedule</h2>
          </div>

          {/* Info Intro */}
          <p className="text-gray-700 mb-8">
            Below is your application and examination schedule for the{" "}
            <span className="font-semibold text-gray-900">Kharidar (Non-Gazetted Second Class)</span> post.
          </p>

          {/* Table of Stages */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-cyan-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold">#</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Exam Stage</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Description</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold">Full Marks</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold">Apply Date</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold">Approval</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold">Exam Date</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold">Exam Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stages.map((stage, index) => (
                  <tr key={stage.id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {stage.stage}
                      <div className="text-xs text-gray-500">{stage.paperCount}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{stage.description}</td>
                    <td className="py-3 px-4 text-center text-gray-800 font-semibold">
                      {stage.fullMarks}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      <div className="flex items-center justify-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4 text-cyan-600" />
                        {stage.applyDate}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(
                          stage.approvalStatus
                        )}`}
                      >
                        {stage.approvalStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {stage.examDate}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      <div className="flex items-center justify-center gap-1">
                        <ClockIcon className="w-4 h-4 text-cyan-600" />
                        {stage.examTime}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-8 bg-yellow-100 border border-yellow-300 rounded-xl p-4 text-gray-800">
            <h4 className="font-semibold mb-1">Note:</h4>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Stage I is qualifying; only those who pass move to Stage II.</li>
              <li>Stage II includes multiple written papers.</li>
              <li>Final Stage includes practical and oral components.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Application;
