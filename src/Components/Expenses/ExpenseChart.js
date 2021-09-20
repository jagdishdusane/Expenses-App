import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartItems = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Aep", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expData of props.chartData) {
    const expMonth = expData.date.getMonth();
    chartItems[expMonth].value += expData.price;
  }
  console.log(chartItems);
  return (
    <div>
      <Chart monthVal={chartItems} />
    </div>
  );
};

export default ExpenseChart;
