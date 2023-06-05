import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = () => {



const data = {
  labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

    const config = {
        type: 'line',
        data: data,
      };
    return (
        <>
            <Line data = {config.data}/>
        </>
    )
}

export default LineChart