import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarChartComp = ({carbonTrackerCollection}) => {

    const data = {

        labels: ["Electricity", "Gas", "Petrol", "Car", "Flights", "Recycling"],
        datasets: [{
            axis: 'y',
            label: 'Your Score',
            data: [
                carbonTrackerCollection.emissions.electricBill,
                carbonTrackerCollection.emissions.gasBill,
                carbonTrackerCollection.emissions.oilBill,
                carbonTrackerCollection.emissions.carMileage,
                carbonTrackerCollection.emissions.flightUnder + carbonTrackerCollection.emissions.flightOver,
                carbonTrackerCollection.emissions.recyclePaper + carbonTrackerCollection.emissions.recycleAluminium
              ],
            backgroundColor: "rgba(163, 255, 255, 1)"
            },
            {
                label: "Average Score",
                data: [2973, 3091, 2422, 16222, 4472, 287],
                backgroundColor: "rgba(107, 220, 225, 1)"
        }],
            // borderColor: [
            // 'rgb(255, 99, 132)',
            // 'rgb(255, 159, 64)',
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
            // ],
            // borderWidth: 1
      }
    ;

    const config = {
        type: 'bar',
        data,
        options: {
        indexAxis: 'y',
        }
    };


    return (
        <>
            <Bar data={data} />
        </>
    )
    }

export default BarChartComp