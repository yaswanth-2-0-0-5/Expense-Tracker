// ExpenseChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ data }) => {
  const chartData = {
    labels: data.map(expense => expense.category),
    datasets: [{
      data: data.map(expense => expense.amount),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  return <Pie data={chartData} />;
};

export default ExpenseChart;
