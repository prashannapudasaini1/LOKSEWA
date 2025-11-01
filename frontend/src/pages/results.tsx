import React from "react";
import Sidebar from "../components/sidebar";
import { ChartBarIcon } from "@heroicons/react/24/outline";

interface StageResult {
  id: number;
  stage: string;
  fullMarks: number;
  obtainedMarks: number;
  subjects: {
    name: string;
    marks: number;
    total: number;
  }[];
}

const Results: React.FC = () => {
  const stageResults: StageResult[] = [
    {
      id: 1,
      stage: "Stage I — Preliminary Examination",
      fullMarks: 100,
      obtainedMarks: 82,
      subjects: [
        { name: "General Awareness", marks: 41, total: 50 },
        { name: "Aptitude Test", marks: 25, total: 30 },
        { name: "English Language Competence", marks: 16, total: 20 },
      ],
    },
    {
      id: 2,
      stage: "Stage II — Main Examination",
      fullMarks: 300,
      obtainedMarks: 246,
      subjects: [
        { name: "Governance Systems", marks: 86, total: 100 },
        { name: "Contemporary Issues", marks: 78, total: 100 },
        { name: "Service-related Subject", marks: 82, total: 100 },
      ],
    },
    {
      id: 3,
      stage: "Final Stage Examination",
      fullMarks: 60,
      obtainedMarks: 51,
      subjects: [
        { name: "Information Technology Skill Test", marks: 9, total: 10 },
        { name: "Group Test", marks: 8, total: 10 },
        { name: "Interview (Oral)", marks: 34, total: 40 },
      ],
    },
  ];

  // Functions for grading
  const getGrade = (score: number): string => {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B+";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    return "F";
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case "A+": return "bg-green-600 text-white";
      case "A": return "bg-green-500 text-white";
      case "B+": return "bg-blue-500 text-white";
      case "B": return "bg-yellow-400 text-black";
      case "C": return "bg-orange-400 text-white";
      default: return "bg-red-500 text-white";
    }
  };

  // Final overall computation
  const totalMarks = stageResults.reduce((acc, s) => acc + s.fullMarks, 0);
  const totalObtained = stageResults.reduce((acc, s) => acc + s.obtainedMarks, 0);
  const totalPercentage = ((totalObtained / totalMarks) * 100).toFixed(2);
  const overallGrade = getGrade(Number(totalPercentage));

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-6">
            <ChartBarIcon className="w-7 h-7 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">Examination Results</h2>
          </div>

          {/* Overall Summary */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 mb-10 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Overall Performance</h3>
            <p className="text-gray-700">
              Total Marks:{" "}
              <span className="font-bold text-gray-900">
                {totalObtained} / {totalMarks}
              </span>
            </p>
            <p className="text-gray-700">
              Average Percentage:{" "}
              <span className="font-bold text-green-600">{totalPercentage}%</span>
            </p>
            <p className="text-gray-700">
              Overall Grade:{" "}
              <span
                className={`px-3 py-1 rounded-lg font-semibold text-sm ml-1 ${getGradeColor(overallGrade)}`}
              >
                {overallGrade}
              </span>
            </p>
          </div>

          {/* Stage Results */}
          {stageResults.map((stage) => {
            const stagePercent = ((stage.obtainedMarks / stage.fullMarks) * 100).toFixed(2);
            const stageGrade = getGrade(Number(stagePercent));

            return (
              <div
                key={stage.id}
                className="bg-white border border-gray-300 rounded-xl p-6 mb-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{stage.stage}</h3>

                {/* Summary for stage */}
                <div className="mb-4">
                  <p className="text-gray-700">
                    Marks Obtained:{" "}
                    <span className="font-bold text-gray-900">
                      {stage.obtainedMarks} / {stage.fullMarks}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Percentage:{" "}
                    <span className="font-bold text-green-600">{stagePercent}%</span>
                  </p>
                  <p className="text-gray-700">
                    Grade:{" "}
                    <span
                      className={`px-3 py-1 rounded-lg font-semibold text-sm ml-1 ${getGradeColor(
                        stageGrade
                      )}`}
                    >
                      {stageGrade}
                    </span>
                  </p>
                </div>

                {/* Table of subjects */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-cyan-500 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold">#</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold">Subject</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold">Marks</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold">Percentage</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stage.subjects.map((sub, index) => {
                        const percent = (sub.marks / sub.total) * 100;
                        const grade = getGrade(percent);
                        return (
                          <tr key={index} className="hover:bg-gray-50 transition">
                            <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                            <td className="py-3 px-4 text-sm text-gray-800 font-medium">
                              {sub.name}
                            </td>
                            <td className="py-3 px-4 text-center text-gray-800 font-semibold">
                              {sub.marks} / {sub.total}
                            </td>
                            <td className="py-3 px-4 text-center text-gray-800 font-semibold">
                              {percent.toFixed(2)}%
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span
                                className={`px-3 py-1 rounded-lg text-sm font-semibold ${getGradeColor(
                                  grade
                                )}`}
                              >
                                {grade}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          {/* Final Result Summary */}
          <div className="bg-[#DCFCE7] border border-green-400 rounded-xl p-6 mt-10 shadow-md">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Final Result</h3>
            <p className="text-gray-800 mb-1">
              Total Combined Marks:{" "}
              <span className="font-semibold">{totalObtained} / {totalMarks}</span>
            </p>
            <p className="text-gray-800 mb-1">
              Final Percentage:{" "}
              <span className="font-semibold text-green-700">{totalPercentage}%</span>
            </p>
            <p className="text-gray-800 mb-1">
              Final Grade:{" "}
              <span className={`px-3 py-1 rounded-lg font-semibold text-sm ${getGradeColor(overallGrade)}`}>
                {overallGrade}
              </span>
            </p>
            <p className="text-gray-700 mt-2 italic">
              *Based on combined marks from Stage II and Final Stage (Stage I is qualifying only).*
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
