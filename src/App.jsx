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
     <div className='text-2xl font-bold text-center mt-10'>
      this is a financial dashboard
     </div>
      <Dashboard />
    </>
  )
}

export default App
