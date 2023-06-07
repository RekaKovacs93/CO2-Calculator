import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = ({carbonTrackerCollection}) => {
  
  const lineData = carbonTrackerCollection.map((document) => {
    return document.totalEmissions
  })
  const labelData = carbonTrackerCollection.map((date) => {
    return date.month
  })

// const labels = carbonTrackerCollection.emissions.map(())


const data = {
  labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets: [{
    label: 'Yearly Overview',
    data: lineData,
    fill: false,
    borderColor: "rgb(100, 165, 108)",
    backgroundColor: "transparent",
    tension: 0.1
  }]
};

    const config = {
        type: 'line',
        data: data,
      };

    console.log(config.data)
    return (
        <>
            <Line classNamae = "line" data = {config.data}/>
        </>
    )
}

export default LineChart