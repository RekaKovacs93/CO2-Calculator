import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";
import BarChartComp from "./BarChart_component";

const Overview = ({carbonTrackerCollection}) => {
    return (
        <>
        <h1>HEllo Overview</h1>
        <LineChart carbonTrackerCollection={carbonTrackerCollection}/>
        {/* <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/> */}
        </>
        
    )
}

export default Overview