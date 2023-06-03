import React from "react";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  const options ={
    cutout: "80%",
    radius: "70%",
    animation: {
        animateRotate: true
      },
  }

  const config = {
    type: "doughnut",
    data: data,
    options: options
  };



  return (
    <div>
      <p>This is a chart</p>
      <Doughnut data={config.data} options={config.options}/>
    </div>
  );
};

export default DoughnutChart;
