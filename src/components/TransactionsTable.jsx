import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, setSearchTerm } from "../features/financeSlice";
import { ROLES } from "../constants/roles";
import { Trash2, Search } from "lucide-react";

function TransactionsTable() {
  const transactions = useSelector((state) => state.finance.transactions);
  const searchTerm = useSelector((state) => state.finance.searchTerm);
  const role = useSelector((state) => state.finance.role);
  const dispatch = useDispatch();

  const filteredTransactions = transactions.filter(
    (t) =>
      t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.amount.toString().includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-4 border-b border-gray-100 gap-3">
        <h2 className="text-base font-bold text-gray-900 tracking-tight">
          Transactions
        </h2>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-2.5 text-gray-300" size={15} />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <th className="py-3 px-5 text-left">Date</th>
              <th className="py-3 px-5 text-left">Amount</th>
              <th className="py-3 px-5 text-left">Category</th>
              <th className="py-3 px-5 text-left">Type</th>
              {role === ROLES.ADMIN && (
                <th className="py-3 px-5 text-right">Action</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredTransactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50/60 transition">
                <td className="py-3 px-5 text-gray-500 text-xs">
                  {new Date(t.date).toLocaleDateString("en-IN")}
                </td>
                <td className="py-3 px-5 font-semibold text-gray-800">
                  ₹{t.amount.toFixed(2)}
                </td>
                <td className="py-3 px-5 text-gray-600">{t.category}</td>
                <td className="py-3 px-5">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      t.type === "income"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-500"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
                {role === ROLES.ADMIN && (
                  <td className="py-3 px-5 text-right">
                    <button
                      onClick={() => dispatch(deleteTransaction(t.id))}
                      className="p-1.5 rounded-lg hover:bg-rose-50 transition"
                    >
                      <Trash2 size={14} className="text-rose-400" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTransactions.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">
          No transactions found
        </p>
      )}
    </div>
  );
}

export default TransactionsTable;