import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, setSearchTerm } from "../features/financeSlice";
import { ROLES } from "../constants/roles";
import { Trash2 } from "lucide-react";

function TransactionsTable() {
  const transactions = useSelector((state) => state.finance.transactions);
  const searchTerm = useSelector((state) => state.finance.searchTerm);
  const role = useSelector((state) => state.finance.role);
  const dispatch = useDispatch();

  const filteredTransactions = transactions.filter((t) =>
    t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.amount.toString().includes(searchTerm)
  );

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="bg-white text-black p-5 rounded-xl shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <h2 className="text-lg font-semibold text-gray-800 ">
          Transactions
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by category, type, amount..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="px-3 py-2 border rounded-lg w-full md:w-72 
          bg-gray-100 
          text-blue-800 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          <thead>
            <tr className="text-gray-800  border-b">
              <th className="py-3 px-2">Date</th>
              <th className="py-3 px-2">Amount</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">Type</th>
              <th className="py-3 px-2 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-2 text-gray-700 ">
                  {new Date(t.date).toLocaleDateString("en-IN")}
                </td>

                <td className="py-3 px-2 font-medium text-gray-900">
                  ₹{t.amount.toFixed(2)}
                </td>

                <td className="py-3 px-2 text-gray-700 ">
                  {t.category}
                </td>

                {/* Type Badge */}
                <td className="py-3 px-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>

                {/* Delete */}
                <td className="py-3 px-2 text-right">
                  {role === ROLES.ADMIN && (
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900 transition"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Empty state */}
      {filteredTransactions.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No transactions found
        </p>
      )}
    </div>
  );
}

export default TransactionsTable;