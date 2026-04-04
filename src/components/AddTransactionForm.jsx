import React,{useState} from "react";
import { useDispatch} from "react-redux";
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
    if(!type) {
      alert("Please select a transaction type (Income or Expense).");
      return;
    }
    if(!category.trim()) {
      alert("Please enter a category for the transaction.");
      return;
    }
    dispatch(addTransaction({ date, amount, category, type }));
    setDate("");
    setAmount("");
    setCategory("");
    setType("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-2xl space-y-5 border border-gray-100"
      >

        {/* Date */}
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Amount */}
        <div className="relative">
          <IndianRupee className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <Tag className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (Food, Travel...)"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Type Toggle */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Type</p>
          <div className="grid grid-cols-2 gap-2">
            
            <button
              type="button"
              onClick={() => setType("income")}
              className={`py-2 rounded-lg border font-medium transition ${
                type === "income"
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              Income
            </button>

            <button
              type="button"
              onClick={() => setType("expense")}
              className={`py-2 rounded-lg border font-medium transition ${
                type === "expense"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              Expense
            </button>

          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
        >
          Add Transaction
        </button>

      </form>
    </div>
  );
}

export default AddTransactionForm;