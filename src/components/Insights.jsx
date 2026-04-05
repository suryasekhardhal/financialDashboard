import React from "react";
import { useSelector } from "react-redux";
import { TrendingUp } from "lucide-react";

function Insights() {
  const transactions = useSelector((state) => state.finance.transactions);

  const categoryTotals = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;
  for (const cat in categoryTotals) {
    if (categoryTotals[cat] > maxAmount) {
      maxAmount = categoryTotals[cat];
      maxCategory = cat;
    }
  }

  const totalExpense = Object.values(categoryTotals).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        Insights
      </h2>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Expense Breakdown</h3>

        {Object.keys(categoryTotals).length === 0 ? (
          <p className="text-center text-gray-400 text-lg py-4">No expenses recorded.</p>
        ) : (
          <div className="space-y-3">
            {Object.entries(categoryTotals)
              .sort((a, b) => b[1] - a[1])
              .map(([category, total]) => {
                const pct = totalExpense > 0 ? (total / totalExpense) * 100 : 0;
                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg text-gray-700 font-medium">{category}</span>
                      <span className="text-lg font-semibold text-gray-800">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {maxCategory && (
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-5 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <TrendingUp size={14} className="opacity-70" />
              <p className="text-lg font-semibold opacity-70 uppercase tracking-wider">
                Highest Expense
              </p>
            </div>
            <p className="text-lg font-bold">{maxCategory}</p>
          </div>
          <p className="text-2xl font-bold">₹{maxAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Insights;