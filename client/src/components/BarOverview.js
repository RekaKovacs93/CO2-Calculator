import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarOverview = ({carbonTrackerCollection}) => {
    
    const totalsdata = carbonTrackerCollection.map((data) => {
        return data.totalEmissions
    })
    const data = {

        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [{
            axis: 'y',
            label: 'Your Score',
            data: totalsdata,
            backgroundColor: "rgb(145, 215, 155)"
            },
            {
                label: "Average Score",
                data: [2973, 3091, 2422, 1222, 1472, 1087, 990, 1002, 1130, 1607, 2001, 2500],
                backgroundColor: "rgb(75, 130, 83)"
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
            <Bar data={data} options={config.options}/>
        </>
    )
    }

export default BarOverview