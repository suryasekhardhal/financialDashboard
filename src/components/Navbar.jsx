import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const role = useSelector((state) => state.finance.role);
  const dispatch = useDispatch();

  const handleRoleChange = (e) => {
    dispatch({ type: "finance/setRole", payload: e.target.value });
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl">💰</span>
        <h2 className="text-lg font-bold tracking-tight text-gray-900">
          Finance Tracker
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Role
        </label>
        <select
          value={role}
          onChange={handleRoleChange}
          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm 
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