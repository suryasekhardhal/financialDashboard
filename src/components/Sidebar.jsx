import React from "react";
import { LayoutDashboard, ArrowLeftRight, Lightbulb } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "#transaction", icon: ArrowLeftRight },
  { label: "Insights", href: "#insights", icon: Lightbulb },
];

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-gray-50 border-r border-gray-100 p-5 flex flex-col gap-8">
      <div className="flex items-center gap-2 pt-1">
        <span className="text-lg">💰</span>
        <h2 className="text-base font-bold tracking-tight text-gray-900">Finance</h2>
      </div>

      <ul className="space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600
                         hover:bg-white hover:text-gray-900 hover:shadow-sm transition"
            >
              <Icon size={16} className="text-gray-400" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;