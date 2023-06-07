import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";
import BarChartComp from "./BarChart_component";
import EmissionsCard from "./EmissionsCard";
import EmissionsGrid from "./EmissionsGrid";
import AppFooter from "./AppFooter";
import BarOverview from "./BarOverview";
import Suggestions from "./Suggestions";

const Overview = ({carbonTrackerCollection, EmissionValues, carbonInfo}) => {
    console.log(carbonInfo)
    return (
        <>
        <h1>Your Yearly Overview</h1>
        <div className="linechart">
        <LineChart carbonTrackerCollection={carbonTrackerCollection}/>
        </div>
        <div className="linechart">
        <h1>Your Score vs Uk Average</h1>
        <BarOverview carbonTrackerCollection={carbonTrackerCollection}/>
        </div>
        <div className="linechart">
        <h1>Your monthly emissions</h1>
        <EmissionsGrid  EmissionValues={EmissionValues} carbonTrackerCollection={carbonTrackerCollection} />
        
        {/* <Suggestions carbonInfo={carbonInfo}/> */}
        </div>
        <AppFooter/>
        </>
        
    )
}

export default Overview