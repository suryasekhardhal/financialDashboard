import React from "react";
import { useSelector } from "react-redux";
import  {LineChart,Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
function Chart() {
    const transactions = useSelector((state) => state.finance.transactions);
    const chartdata = [...transactions]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(transaction => ({
        date: new Date(transaction.date).toLocaleDateString(),
        amount: transaction.type === "income" ? transaction.amount : -transaction.amount,
    }));
    if(chartdata.length === 0) {
        return <p className="text-lg font-bold">No transactions to display.</p>;
    }

  return (
    <>
    <h2>Chart</h2>
    <div className="w-full h-[300px] p-4 bg-white dark:bg-gray-800 rounded-lg">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </>
  );
}
export default Chart;