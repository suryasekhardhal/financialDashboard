import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionsTable from "../components/TransactionsTable";
import Insights from "../components/Insights";
import AddTransactionForm from "../components/AddTransactionForm";
import Chart from "../components/chart";

function Dashboard(){
    const role = useSelector((state) => state.finance.role);
    return(
        <>
       
       <div className="p-4 space-y-6 min-h-screen bg-white ">
         <h2 className="text-center">Dashboard</h2>
        <Navbar />
        <SummaryCards />
        <Chart />
        <TransactionsTable />
        <Insights />
        {role === "admin" && <AddTransactionForm />}
       </div>
        </>
    )
}

export default Dashboard;