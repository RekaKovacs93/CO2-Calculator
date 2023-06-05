import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = () => {

// const labels = carbonTrackerCollection.emissions.map(())


const data = {
  labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets: [{
    label: 'My First Dataset',
    // data: lastTwelveItems.map(item => item.value),
    data: [ 1000, 8272, 8256, 2297,1000, 8272, 8256, 2297,1000, 8272, 8256, 2297,],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
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
            <Line data = {config.data}/>
        </>
    )
}

export default LineChart