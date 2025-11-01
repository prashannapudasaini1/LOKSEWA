import React, { useState } from "react";
import Sidebar from "../components/aside";

interface Subject {
  name: string;
  date: string;
  time: string;
  status: string;
}

const AdminExam: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "English Language and Comprehension", date: "", time: "", status: "Upcoming" },
    { name: "Aptitude Test (Tarkik Abhiyog)", date: "", time: "", status: "Upcoming" },
    { name: "Public Administration and Governance", date: "", time: "", status: "Upcoming" },
    { name: "Constitution and Political System of Nepal", date: "", time: "", status: "Upcoming" },
    { name: "Current Affairs and Contemporary Issues", date: "", time: "", status: "Upcoming" },
    { name: "General Knowledge (Samanya Gyan)", date: "", time: "", status: "Upcoming" },
    { name: "Nepali Language and Grammar", date: "", time: "", status: "Upcoming" },
  ]);

  const handleChange = (
    index: number,
    field: keyof Subject,
    value: string
  ) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Exam schedule submitted:", subjects);
    alert("Exam schedule saved successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-10 overflow-x-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Manage Exam Schedule
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-full">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Set Exam Date, Time & Status for Each Subject
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-cyan-500 text-white text-left text-lg">
                    <th className="px-6 py-3 border-b w-16">S.N.</th>
                    <th className="px-6 py-3 border-b w-1/2">Subject Name</th>
                    <th className="px-6 py-3 border-b w-1/6">Exam Date</th>
                    <th className="px-6 py-3 border-b w-1/6">Exam Time</th>
                    <th className="px-6 py-3 border-b w-1/6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-cyan-50 transition-colors`}
                    >
                      <td className="px-6 py-3 border-b text-gray-700 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-3 border-b text-gray-800 font-semibold">
                        {subject.name}
                      </td>

                      {/* Date */}
                      <td className="px-6 py-3 border-b">
                        <input
                          type="date"
                          value={subject.date}
                          onChange={(e) =>
                            handleChange(index, "date", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                      </td>

                      {/* Time */}
                      <td className="px-6 py-3 border-b">
                        <input
                          type="time"
                          value={subject.time}
                          onChange={(e) =>
                            handleChange(index, "time", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                      </td>

                      {/* Status */}
                      <td className="px-6 py-3 border-b">
                        <select
                          value={subject.status}
                          onChange={(e) =>
                            handleChange(index, "status", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          <option value="Upcoming">Pending</option>
                          <option value="Ongoing">Current</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Submit button */}
            <div className="pt-8 text-right">
              <button
                type="submit"
                className="bg-cyan-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Save Schedule
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminExam;
