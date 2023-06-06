import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";
import BarChartComp from "./BarChart_component";
import EmissionsCard from "./EmissionsCard";
import EmissionsGrid from "./EmissionsGrid";

const Overview = ({carbonTrackerCollection, EmissionValues}) => {
    return (
        <>
        <h1>HEllo Overview</h1>
        <LineChart carbonTrackerCollection={carbonTrackerCollection}/>
        <EmissionsGrid EmissionValues={EmissionValues} carbonTrackerCollection={carbonTrackerCollection} />
        {/* <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/> */}
        </>
        
    )
}

export default Overview