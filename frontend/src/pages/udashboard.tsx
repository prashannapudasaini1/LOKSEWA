// src/pages/Dashboard.tsx
import React from 'react';
import Sidebar from '../components/sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to the Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Cards */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-gray-600 text-sm">1,230 active users</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">To Add</h2>
            <p className="text-gray-600 text-sm">To Add</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">New Signups</h2>
            <p className="text-gray-600 text-sm">85 new users</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
