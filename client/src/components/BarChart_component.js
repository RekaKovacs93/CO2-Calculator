import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarChartComp = ({carbonTrackerCollection}) => {

    const recommendationsForEmisions = {
        electricBill: "Buy electric appliances with better energy efficiency and install solar panels",
        gasBill: "Solar panels and home insulation will reduce your gas consumption",
        oilBill: "You can replace oil with gas or other eco friendly energy source. Home insulation helps to reduce energy consumption, as well",
        carMileage: "You can cycle for short distance and use bus or train for the long once",
        flightUnder: "You can travel by bus or train  instead of airplain because the distance is't great.",
        flightOver: "For long distance travels airplain  is the best solution, but you can try avoid meanningless travels",
        recyclePaper: "You can start recycling paper.",
        recycleAluminium: "You can start recycling aluminiun and tin packages"
    }

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
        plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const labelIndex = context.dataIndex;
                  const datasetIndex = context.datasetIndex;
                  const value = context.parsed.y;
                  if (datasetIndex === 0) {
                    // Custom label for "Your Score" dataset
                    const recommendationKey = data.labels[labelIndex];
                    const recommendation = recommendationsForEmisions[recommendationKey];
                    return `Your Score: ${value} lbs\nRecommendation: ${recommendation}`;
                  } else if (datasetIndex === 1) {
                    // Custom label for "Average Score" dataset
                    return `Average Score: ${value} lbs`;
                  }
                  return '';
                },
              },
            },
          },
        }
    };


    return (
        <>
            <Bar data={data} options={config.options}/>
        </>
    )
    }

export default BarChartComp