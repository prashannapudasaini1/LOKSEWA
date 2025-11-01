import React from "react";
import Asidebar from "../components/aside";
import { UserIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const AdminProfile: React.FC = () => {
  // --- Dummy Admin Data ---
  const admin = {
    username: "admin_master",
    email: "admin@loksewa.gov.np",
    firstName: "Sita",
    lastName: "Sharma",
    role: "System Administrator",
    contact: "9801234567",
    gender: "Female",
  };

  return (
    <div className="flex h-screen bg-[#E8DFCA]">
      {/* Sidebar */}
      <Asidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-[#F5EFE6] rounded-2xl shadow-md p-8 md:p-10 border border-gray-300">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-4 mb-8">
            <ShieldCheckIcon className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">Admin Profile</h2>
          </div>

          {/* Admin Details Section */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <UserIcon className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800">Profile Details</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProfileCard label="Full Name" value={`${admin.firstName} ${admin.lastName}`} />
              <ProfileCard label="Username" value={admin.username} />
              <ProfileCard label="Role" value={admin.role} />
              <ProfileCard label="Email" value={admin.email} />
              <ProfileCard label="Phone" value={admin.contact} />
              <ProfileCard label="Gender" value={admin.gender} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// --- Reusable Profile Card ---
const ProfileCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-300 shadow-sm hover:shadow-md transition">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "-"}</p>
  </div>
);

export default AdminProfile;
