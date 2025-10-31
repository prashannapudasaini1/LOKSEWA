import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Exams", path: "/dashboard/exams", icon: BookOpenIcon },
  { name: "Profile", path: "/dashboard/profile", icon: UserCircleIcon }, // ✅ FIXED HERE
  { name: "Settings", path: "/dashboard/settings", icon: Cog6ToothIcon },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-64 h-screen bg-[#F5EFE6] text-gray-800 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 border-b border-gray-300">
        <h1 className="text-xl font-bold tracking-wide text-black">
          My<span className="text-cyan-500">Dashboard</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-gray-700 hover:bg-cyan-100 hover:text-gray-900"
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-gray-300">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-red-100 hover:text-red-500 transition-colors duration-200">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
