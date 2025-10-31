import React, { useState } from "react";
import Sidebar from "../components/sidebar";

const Profile: React.FC = () => {
  const [showInfoForm, setShowInfoForm] = useState(false);

  // Basic account data
  const userData = {
    username: "john_doe",
    email: "john@example.com",
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Personal info submitted!");
    setShowInfoForm(false);
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10">
          {/* Header */}
          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Profile Overview</h2>
            <p className="text-gray-600">Your personal and account information</p>
          </div>

          {/* Account Details (Now only Username + Email) */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Account Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoItem label="Username" value={userData.username} />
              <InfoItem label="Email" value={userData.email} />
            </div>
          </section>

          {/* Personal Information */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>

            {!showInfoForm ? (
              <div className="text-center">
                <button
                  onClick={() => setShowInfoForm(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Add Info
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleInfoSubmit}>
                {/* Full Name (English) */}
                <div>
                  <label className="block mb-3 text-sm font-medium text-black">
                    Full Name (English)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input w-full"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Middle Name"
                      className="input w-full"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input w-full"
                      required
                    />
                  </div>
                </div>


                {/* Date of Birth */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="input"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input"
                    required
                  />
                </div>

                {/* Citizenship Number */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Citizenship Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter citizenship number"
                    className="input"
                    required
                  />
                </div>

                {/* Issuing District */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Issuing District
                  </label>
                  <input
                    type="text"
                    placeholder="Enter issuing district"
                    className="input"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Gender
                  </label>
                  <select className="input" required>
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Marital Status
                  </label>
                  <select className="input" required>
                    <option value="">Select marital status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    placeholder="Province, District, Municipality, Ward"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Temporary Address
                  </label>
                  <input
                    type="text"
                    placeholder="Province, District, Municipality, Ward"
                    className="input"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="input"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="input"
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => setShowInfoForm(false)}
                    className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 font-bold transition-colors"
                  >
                    Save Info
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

// Reusable info display component
const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "-"}</p>
  </div>
);

export default Profile;
