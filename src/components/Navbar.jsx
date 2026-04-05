import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { Sun,Moon } from "lucide-react";

function Navbar() {
  const role = useSelector((state) => state.finance.role);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleRoleChange = (e) => {
    dispatch({ type: "finance/setRole", payload: e.target.value });
  };
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm rounded-lg mb-6 dark:bg-gray-800 dark:text-white">
      <div className="flex items-center gap-2">
        <span className="text-xl">💰</span>
        <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Finance Tracker
        </h2>
      </div>
      <div className="flex ml-auto mr-4">
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition "
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>

      <div className="flex items-center gap-2">

        <label className="text-lg font-semibold uppercase tracking-widest text-gray-800 dark:text-white">
          Role
        </label>
        <select
          value={role}
          onChange={handleRoleChange}
          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl text-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     hover:border-gray-300 transition cursor-pointer"
        >
          <option value="">Select Role</option>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;