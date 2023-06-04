import React from "react";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({carbonTrackerCollection}) => {
  console.log(carbonTrackerCollection.emissions)
  const data = {
    labels: ["Electricity", "Gas", "Petrol", "Car", "Flights", "Recycling"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          carbonTrackerCollection.emissions.electricBill,
          carbonTrackerCollection.emissions.gasBill,
          carbonTrackerCollection.emissions.oilBill,
          carbonTrackerCollection.emissions.carMileage,
          carbonTrackerCollection.emissions.flightUnder + carbonTrackerCollection.emissions.flightOver,
          carbonTrackerCollection.emissions.recyclePaper + carbonTrackerCollection.emissions.recycleAluminium
        ],
        backgroundColor: ["rgba(163, 255, 255, 1)","rgba(135, 247, 252, 1)","rgba(107, 220, 225, 1)","rgba(79, 194, 199, 1)","rgba(46, 168, 174, 1)","rgba(0, 144, 149, 1)"],
        hoverOffset: 4,
      },
    ],
  };

  const options ={
    cutout: "70%",
    radius: "20%",
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
