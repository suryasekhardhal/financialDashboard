import React from "react";
import { useSelector } from "react-redux";

function Insights() {
  const transactions = useSelector((state) => state.finance.transactions);
  const categoryTotals = {};
  transactions.forEach(transaction => {
    if(transaction.type === "expense"){
      categoryTotals[transaction.category] = (categoryTotals[transaction.category] || 0) + transaction.amount;
    }
  });
  let maxCategory = "";
  let maxAmount = 0;
  for (const category in categoryTotals) {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      maxCategory = category;
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
        Insights
      </h2>

      {/* Category Card */}
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-xl">
        
        <h3 className="text-md font-semibold text-gray-700 mb-4">
          Expense Breakdown
        </h3>

        <div className="space-y-4">
          {Object.entries(categoryTotals).map(([category, total]) => (
            
            <div
              key={category}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-700">
                {category}
              </span>

              <span className="text-sm font-semibold text-gray-800">
                ₹{total.toFixed(2)}
              </span>
            </div>

          ))}
        </div>

        {Object.keys(categoryTotals).length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No expenses recorded.
          </p>
        )}
      </div>

      {/* Highlight Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
        
        <div>
          <h3 className="text-sm opacity-80">
            Category with Highest Expense
          </h3>

          {maxCategory ? (
            <p className="text-lg font-semibold">
              {maxCategory}
            </p>
          ) : (
            <p className="text-sm opacity-80">
              No expenses recorded.
            </p>
          )}
        </div>

        {maxCategory && (
          <p className="text-xl font-bold">
            ₹{maxAmount.toFixed(2)}
          </p>
        )}
      </div>

    </div>
  );
}

export default Insights;