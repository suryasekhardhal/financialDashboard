import React from "react";
import { useSelector } from "react-redux";
import { ArrowUpCircle, ArrowDownCircle, Wallet } from "lucide-react";

function SummaryCards() {
  const transactions = useSelector((state) => state.finance.transactions);

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else if (transaction.type === "expense") {
      totalExpense += transaction.amount;
    }
  });

  const balance = totalIncome - totalExpense;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Income */}
        <div className="p-5 rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-green-600 text-white flex items-center justify-between hover:scale-105 transition">
          <div>
            <h3 className="text-sm opacity-80">Total Income</h3>
            <p className="text-2xl font-bold">
              ${totalIncome.toFixed(2)}
            </p>
          </div>
          <ArrowUpCircle size={40} />
        </div>

        {/* Expense */}
        <div className="p-5 rounded-xl shadow-lg bg-gradient-to-r from-red-400 to-red-600 text-white flex items-center justify-between hover:scale-105 transition">
          <div>
            <h3 className="text-sm opacity-80">Total Expense</h3>
            <p className="text-2xl font-bold">
              ${totalExpense.toFixed(2)}
            </p>
          </div>
          <ArrowDownCircle size={40} />
        </div>

        {/* Balance */}
        <div className="p-5 rounded-xl shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-between hover:scale-105 transition">
          <div>
            <h3 className="text-sm opacity-80">Balance</h3>
            <p className="text-2xl font-bold">
              ${balance.toFixed(2)}
            </p>
          </div>
          <Wallet size={40} />
        </div>

      </div>
    </div>
  );
}

export default SummaryCards;