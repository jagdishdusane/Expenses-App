import React from "react";
import ChartBar from "../Chart/ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const val = props.monthVal.map((exVal) => {
    return exVal.value;
  });

  const maxTotal = Math.max(...val);
  console.log(maxTotal);
  return (
    <div className="chart">
      {props.monthVal.map((progress) => (
        <ChartBar
          key={progress.label}
          value={progress.value}
          maxTotal={maxTotal}
          label={progress.label}
        />
      ))}
    </div>
  );
};

export default Chart;
