import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

const Profile: React.FC = () => {
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Basic account data (replace this with real user info later)
  const userData = {
    username: "john_doe",
    email: "john@example.com",
  };

  // Form data state
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob_ad: "",
    gender: "",
    phone_number: "",
    citizen_number: "",
    issue_district: "",
    marriage_status: "",
    permanent_address: "",
    temporary_address: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch user’s exam form (if exists)
  useEffect(() => {
    const fetchMyExamForm = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const res = await fetch("http://localhost:8000/examform/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          setFormData({
            ...formData,
            ...data,
          });
        }
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };

    fetchMyExamForm();
  }, []);

  // Submit handler
  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("You must be logged in to submit the form.");
        return;
      }

      const response = await fetch("http://localhost:8000/examform/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to submit form");
      }

      const data = await response.json();
      alert("✅ Exam form created successfully!");
      console.log("Form submitted successfully:", data);
      setShowInfoForm(false);
    } catch (error: any) {
      console.error(error);
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
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

          {/* Account Details */}
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
                  {formData.first_name ? "Edit Info" : "Add Info"}
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleInfoSubmit}>
                {/* Full Name */}
                <div>
                  <label className="block mb-3 text-sm font-medium text-black">
                    Full Name (English)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="input w-full"
                      required
                    />
                    <input
                      type="text"
                      name="middle_name"
                      value={formData.middle_name}
                      onChange={handleChange}
                      placeholder="Middle Name"
                      className="input w-full"
                    />
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
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
                    name="dob_ad"
                    value={formData.dob_ad}
                    onChange={handleChange}
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
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
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
                    name="citizen_number"
                    value={formData.citizen_number}
                    onChange={handleChange}
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
                    name="issue_district"
                    value={formData.issue_district}
                    onChange={handleChange}
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
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="input"
                    required
                  >
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
                  <select
                    name="marriage_status"
                    value={formData.marriage_status}
                    onChange={handleChange}
                    className="input"
                    required
                  >
                    <option value="">Select marital status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                  </select>
                </div>

                {/* Addresses */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    name="permanent_address"
                    value={formData.permanent_address}
                    onChange={handleChange}
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
                    name="temporary_address"
                    value={formData.temporary_address}
                    onChange={handleChange}
                    placeholder="Province, District, Municipality, Ward"
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    disabled={loading}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 font-bold transition-colors"
                  >
                    {loading ? "Saving..." : "Save Info"}
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

// Reusable Info Display Component
const InfoItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "-"}</p>
  </div>
);

export default Profile;
