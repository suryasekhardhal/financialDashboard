import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionsTable from "../components/TransactionsTable";
import Insights from "../components/Insights";
import AddTransactionForm from "../components/AddTransactionForm";
import Chart from "../components/chart";
import Sidebar from "../components/Sidebar";
function Dashboard(){
    const role = useSelector((state) => state.finance.role);
    return(
        <>
       
       <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
  
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="flex-1 p-4 space-y-6">
    <Navbar />
    <div id="dashboard">
        <SummaryCards />
    </div>
    <Chart />
    <div id="transcation">
        <TransactionsTable />
    </div>
    <div id="insights">
        <Insights />
    </div>
    {role === "admin" && <AddTransactionForm />}
  </div>

</div>
        </>
    )
}

export default Dashboard;