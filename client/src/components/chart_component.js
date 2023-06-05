import React from "react";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";


const DoughnutChart = ({carbonTrackerCollection}) => {
  const data = {
    labels: ["Electricity", "Gas", "Petrol", "Car", "Flights", "Recycling"],
    datasets: [
      {
        label: "CO2 emmissions",
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
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataset = context.dataset;
            const value = dataset.data[context.dataIndex];
            return `${dataset.label}: ${value} lbs`;
          },
          footer: (context) => {
            return `Total: ${carbonTrackerCollection.totalEmissions}`;
          }
        }
      }
    },
    cutout: "80%",
    radius: "40%",
    animation: {
        animateRotate: true
      },
  }
  

  const plugins = [{
    beforeDraw: function(chart) {
     const width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         const fontSize = (height / 360).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         ctx.fillStyle = "lightgrey";
         const text = `${carbonTrackerCollection.totalEmissions} lbs`,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  const config = {
    type: "doughnut",
    data: data,
    options: options,
    plugins: plugins
  };


  const averageData = {
    labels: ["Electricity", "Gas", "Petrol", "Car", "Flights", "Recycling"],
    datasets: [
      {
        label: "Average CO2 emmissions in the UK",
        data: [105, 105, 113, 79, 550, 50],
        backgroundColor: ["rgba(163, 255, 255, 1)","rgba(135, 247, 252, 1)","rgba(107, 220, 225, 1)","rgba(79, 194, 199, 1)","rgba(46, 168, 174, 1)","rgba(0, 144, 149, 1)"],
        hoverOffset: 4,
      },
    ],
  };

  const averagePlugins = [{
    beforeDraw: function(chart) {
     const width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         const fontSize = (height / 360).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         ctx.fillStyle = "lightgrey";
         const text = "13800.94 lbs",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 1.85;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]


  const averageOptions ={
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataset = context.dataset;
            const value = dataset.data[context.dataIndex];
            return `${dataset.label}: ${value} lbs`;
          },
          footer: (context) => {
            return `Total: ${carbonTrackerCollection.totalEmissions}`;
          }
        }
      }
    },
    cutout: "80%",
    radius: "0%",
    animation: {
        animateRotate: true
      },
  }






  return (
    <div>
      <div className="charts">
      <div className="chart-container">
      <h3>Your CO2 Footprint</h3>
      <Doughnut className="ch" data={config.data} options={config.options} plugins={config.plugins}/>
      </div>
      <div className="chart-container">
      {/* <h3>Average CO2 Footprint</h3>
      <Doughnut className="ch" data={averageData} options={averageOptions} plugins={averagePlugins}/> */}
      </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
