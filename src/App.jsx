import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'



function App() {
const transactions = useSelector((state) => state.finance.transactions);


useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);

  return (
    <>
    
      <Dashboard />
    </>
  )
}

export default App
