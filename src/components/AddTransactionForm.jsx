import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTransaction } from "../features/financeSlice";
function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  //const role = useSelector((state) => state.finance.role);

  // if (role !== "admin") {
  //   return <p>You do not have permission to add transactions.</p>;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter a valid positive number for amount.");
      return;
    }
    dispatch(addTransaction({ date, amount, category, type }));
    setDate("");
    setAmount("");
    setCategory("");
    setType("");
  };

  return (
    <>
    <h2>Add Transaction Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Type:</label>
        <select name="type" id="" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
    </>
  );
}
export default AddTransactionForm;