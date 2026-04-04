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
    <>
    <h2>Insights</h2>
    <div>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <p key={category}>
          {category}: ${total.toFixed(2)}
        </p>
      ))}
    </div>
    <div>
      <h3>Category with Highest Expense:</h3>
      {maxCategory ? (
        <p>{maxCategory} with ${maxAmount.toFixed(2)}</p>
      ) : (
        <p>No expenses recorded.</p>
      )}
    </div>
    </>
  );
}
export default Insights;