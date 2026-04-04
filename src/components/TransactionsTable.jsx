import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteTransaction } from "../features/financeSlice";
import { setSearchTerm } from "../features/financeSlice";
import { ROLES } from "../constants/roles";

function TransactionsTable() {
    const transactions = useSelector((state) => state.finance.transactions);
    const searchTerm = useSelector((state) => state.finance.searchTerm);
    const role = useSelector((state) => state.finance.role);
    const filteredTransactions = transactions.filter(transaction =>
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm)
    );
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    };
  return (
    <>
    <h2>Transactions Table</h2>
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
      <table className="transactions-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredTransactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.type}</td>
                    <td>
                        {role === ROLES.ADMIN && (
                            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>
  );
}
export default TransactionsTable;