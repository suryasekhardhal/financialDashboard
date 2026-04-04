import React from "react";
function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-800 p-4">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        💰 Finance Tracker
      </h2>

      <ul className="space-y-2">
        <li>
          <a
            href="#dashboard"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#transcation"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Transactions
          </a>
        </li>
        <li>
          <a
            href="#insights"
            className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Insights
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;