import { createSlice ,nanoid} from "@reduxjs/toolkit";
import { ROLES } from "../constants/roles";

const initialState = {
 
  transactions: [{ id: nanoid(), date:Date.now(), amount: 1000000, category: "salary", type: "income" },
    { id: nanoid(), date:Date.now(), amount: 500000, category: "rent", type: "expense" }],
  role:ROLES.VIEWER,
  searchTerm:""
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const amount =Number(action.payload.amount);
      if (isNaN(amount) || amount <= 0) {
        return;
      }
     const newTransaction = {
        id: nanoid(),
        date: action.payload.date || Date.now(),
        amount,
        category: action.payload.category,
        type: action.payload.type,
       }
      state.transactions.push(newTransaction);
    },
    deleteTransaction: (state, action) => {     
        state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
  },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, setRole, setSearchTerm } = financeSlice.actions;

export default financeSlice.reducer;