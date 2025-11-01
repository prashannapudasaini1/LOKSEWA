import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const pastQuestions = [
  {
    title: "Nayab Subba Old Question Collection PDF",
    url: "https://loksewaaspirants.com/nayab-subba-old-question-collection-pdf/",
    description: "A complete collection of old Nayab Subba questions for Lok Sewa preparation.",
  },
  {
    title: "Lok Sewa Aayog Officer Level Questions",
    url: "https://questionbanknepal.com/lok-sewa-aayog-officer-level-questions/",
    description: "Officer-level question sets for Lok Sewa exams from Question Bank Nepal.",
  },
  {
    title: "Loksewa NaSu Old Question Second Paper 2079 (Scribd)",
    url: "https://www.scribd.com/document/661779475/Loksewa-NaSu-Old-Question-Second-Paper-2079",
    description: "Scribd resource: NaSu second paper old question from the 2079 exam.",
  },
];

const PastQuestions: React.FC = () => {
  return (
    <section id="past-questions" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          📘 Past Questions Collection
        </h2>
        <p className="text-gray-600 mb-10">
          Access old Lok Sewa Aayog question sets for different positions and levels.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastQuestions.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white shadow-md rounded-xl border border-gray-200 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#00BFFF] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00BFFF] font-medium hover:text-[#008CBA] transition"
              >
                View Resource
                <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastQuestions;
