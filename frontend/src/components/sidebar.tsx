import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Analytics", path: "/analytics", icon: ChartBarIcon },
  { name: "Profile", path: "/profile", icon: UserCircleIcon },
  { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-64 h-screen bg-[#F5EFE6] text-gray-200 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16">
        <h1 className="text-xl font-bold tracking-wide text-white">
          My<span className="text-blue-500">Dashboard</span>
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
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-gray-800">
        <button className="flex items-center w-full px-3 py-2 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
