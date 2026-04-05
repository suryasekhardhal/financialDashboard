import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/financeSlice";
import { Calendar, IndianRupee, Tag } from "lucide-react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter a valid positive number for amount.");
      return;
    }
    if (!type) {
      alert("Please select a transaction type (Income or Expense).");
      return;
    }
    if (!category.trim()) {
      alert("Please enter a category for the transaction.");
      return;
    }
    dispatch(addTransaction({ date, amount, category, type }));
    setDate("");
    setAmount("");
    setCategory("");
    setType("");
  };

  const inputClass =
    "w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white outline-none transition";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
        New Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4"
      >
        {/* Date */}
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-300" size={17} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Amount */}
        <div className="relative">
          <IndianRupee className="absolute left-3 top-3 text-gray-300" size={17} />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className={inputClass}
          />
        </div>

        {/* Category */}
        <div className="relative">
          <Tag className="absolute left-3 top-3 text-gray-300" size={17} />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (Food, Travel...)"
            className={inputClass}
          />
        </div>

        {/* Type Toggle */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Type
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setType("income")}
              className={`py-2.5 rounded-xl border text-sm font-semibold transition ${
                type === "income"
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setType("expense")}
              className={`py-2.5 rounded-xl border text-sm font-semibold transition ${
                type === "expense"
                  ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;