import React from "react";
import { useSelector } from "react-redux";
function SummaryCards() {
    //i have to read this
    const transactions = useSelector((state)=> state.finance.transactions)
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else if (transaction.type === "expense") {
            totalExpense += transaction.amount;
        }
    });
    let balance= totalIncome - totalExpense;
  return (
    <>
    <h2>Summary Cards</h2>
    <div className="summary-cards grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card income-card p-4 rounded-lg shadow bg-white ">
            <h3>Total Income</h3>
            <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div className="card expense-card p-4 rounded-lg shadow bg-white ">
            <h3>Total Expense</h3>
            <p>${totalExpense.toFixed(2)}</p>
        </div>
        <div className="card balance-card p-4 rounded-lg shadow bg-white">
            <h3>Balance</h3>
            <p>${balance.toFixed(2)}</p>
        </div>
    </div>
    </>
  );
}
export default SummaryCards;