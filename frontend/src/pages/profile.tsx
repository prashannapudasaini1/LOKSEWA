import React, { useState } from "react";
import Sidebar from "../components/sidebar";

const Profile: React.FC = () => {
  const [showInfoForm, setShowInfoForm] = useState(false);

  // Basic account data
  const userData = {
    username: "john_doe",
    email: "john@example.com",
  };

  // Store personal info data
  const [personalInfo, setPersonalInfo] = useState<any>(null);

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dobAC: "",
    dobBS: "",
    gender: "",
    fatherName: "",
    motherName: "",
    grandfatherName: "",
    spouseName: "",
    citizenNumber: "",
    issueDistrict: "",
    issueDate: "",
    email: "",
    phoneNumber: "",
    caste: "",
    religion: "",
    maritalStatus: "",
    language: "",
    occupation: "",
    physicalDisorder: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPersonalInfo(formData);
    setShowInfoForm(false);
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          {/* Header */}
          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Profile Overview</h2>
            <p className="text-gray-600">Your personal and account information</p>
          </div>

          {/* Account Details */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
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

            {!showInfoForm && !personalInfo && (
              <div className="text-center">
                <button
                  onClick={() => setShowInfoForm(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Add Info
                </button>
              </div>
            )}

            {/* Display Info */}
            {!showInfoForm && personalInfo && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InfoItem
                    label="Full Name"
                    value={`${personalInfo.firstName} ${personalInfo.middleName} ${personalInfo.lastName}`}
                  />
                  <InfoItem label="DOB (A.D.)" value={personalInfo.dobAC} />
                  <InfoItem label="DOB (B.S.)" value={personalInfo.dobBS} />
                  <InfoItem label="Gender" value={personalInfo.gender} />
                  <InfoItem label="Father's Name" value={personalInfo.fatherName} />
                  <InfoItem label="Mother's Name" value={personalInfo.motherName} />
                  <InfoItem label="Grandfather's Name" value={personalInfo.grandfatherName} />
                  <InfoItem label="Husband/Wife Name" value={personalInfo.spouseName} />
                  <InfoItem label="Citizen Number" value={personalInfo.citizenNumber} />
                  <InfoItem label="Issue District" value={personalInfo.issueDistrict} />
                  <InfoItem label="Issue Date" value={personalInfo.issueDate} />
                  <InfoItem label="Email" value={personalInfo.email} />
                  <InfoItem label="Phone Number" value={personalInfo.phoneNumber} />
                  <InfoItem label="Caste" value={personalInfo.caste} />
                  <InfoItem label="Religion" value={personalInfo.religion} />
                  <InfoItem label="Marital Status" value={personalInfo.maritalStatus} />
                  <InfoItem label="Language" value={personalInfo.language} />
                  <InfoItem label="Occupation" value={personalInfo.occupation} />
                  <InfoItem label="Physical Disorder" value={personalInfo.physicalDisorder} />
                </div>

                <div className="text-right mt-6">
                  <button
                    onClick={() => setShowInfoForm(true)}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg transition"
                  >
                    Edit Info
                  </button>
                </div>
              </div>
            )}

            {/* Form Section */}
            {showInfoForm && (
              <form className="space-y-8" onSubmit={handleInfoSubmit}>
                {/* Section: Name */}
                <FormSection title="Basic Information">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Middle Name"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <Input
                      label="Date of Birth (A.D.)"
                      name="dobAC"
                      type="date"
                      value={formData.dobAC}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Date of Birth (B.S.)"
                      name="dobBS"
                      value={formData.dobBS}
                      onChange={handleChange}
                    />
                    <Select
                      label="Gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      options={["Male", "Female", "Other"]}
                    />
                  </div>
                </FormSection>

                {/* Section: Family */}
                <FormSection title="Family Details">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Father's Name"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Mother's Name"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Grandfather's Name"
                      name="grandfatherName"
                      value={formData.grandfatherName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Husband/Wife Name (Optional)"
                      name="spouseName"
                      value={formData.spouseName}
                      onChange={handleChange}
                    />
                  </div>
                </FormSection>

                {/* Section: Citizenship */}
                <FormSection title="Citizenship Information">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input
                      label="Citizen Number"
                      name="citizenNumber"
                      value={formData.citizenNumber}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Issue District"
                      name="issueDistrict"
                      value={formData.issueDistrict}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Issue Date"
                      name="issueDate"
                      type="date"
                      value={formData.issueDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </FormSection>

                {/* Section: Contact */}
                <FormSection title="Contact Information">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </FormSection>

                {/* Section: Additional Info */}
                <FormSection title="Additional Information">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input
                      label="Caste (Optional)"
                      name="caste"
                      value={formData.caste}
                      onChange={handleChange}
                    />
                    <Input
                      label="Religion (Optional)"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                    />
                    <Select
                      label="Marital Status"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      required
                      options={["Single", "Married", "Divorced", "Widowed"]}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                    <Input
                      label="Language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Input
                    label="Physical Disorder"
                    name="physicalDisorder"
                    value={formData.physicalDisorder}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-300">
                  <button
                    type="button"
                    onClick={() => setShowInfoForm(false)}
                    className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 font-semibold transition-colors"
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

// --- Reusable Components ---

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "-"}</p>
  </div>
);

const Input: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}> = ({ label, name, value, onChange, type = "text", required }) => (
  <div className="mb-4">
    <label className="block mb-3 text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
    />
  </div>
);

const Select: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}> = ({ label, name, value, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block mb-3 text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
    <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
      {title}
    </h4>
    {children}
  </div>
);

export default Profile;
