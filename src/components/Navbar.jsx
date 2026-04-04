import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const role = useSelector((state) => state.finance.role);
  const dispatch = useDispatch();

  const handleRoleChange = (e) => {
    dispatch({ type: "finance/setRole", payload: e.target.value });
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800">
        💰 Finance Tracker
      </h2>
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-600">
          Role:
        </label>

        <select
          value={role}
          onChange={handleRoleChange}
          className="px-3 py-1.5 border border-gray-300 rounded-md text-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     hover:border-gray-400 transition"
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