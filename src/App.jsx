import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'



function App() {
const transactions = useSelector((state) => state.finance.transactions);
const theme = useSelector((state) => state.theme.theme);


useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}, [transactions]);

 useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
    
      <Dashboard />
    </>
  )
}

export default App
