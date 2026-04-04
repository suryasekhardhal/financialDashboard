import React from "react";
import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionsTable from "../components/TransactionsTable";
import Insights from "../components/Insights";
import AddTransactionForm from "../components/AddTransactionForm";
import Chart from "../components/chart";

function Dashboard(){
    return(
        <>
        <h2 className="text-center">Dashboard</h2>
       <div className="text-blue-500 p-4 space-y-6">
        <Navbar />
        <SummaryCards />
        <Chart />
        <TransactionsTable />
        <Insights />
        <AddTransactionForm />
       </div>
        </>
    )
}

export default Dashboard;