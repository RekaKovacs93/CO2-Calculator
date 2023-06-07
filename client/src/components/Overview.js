import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import LineChart from "./LineChart";
import BarChartComp from "./BarChart_component";
import EmissionsCard from "./EmissionsCard";
import EmissionsGrid from "./EmissionsGrid";
import AppFooter from "./AppFooter";
import BarOverview from "./BarOverview";
import Suggestions from "./Suggestions";
import {View, ScrollView} from 'react-native'
import { Select } from "antd";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Overview = ({carbonTrackerCollection, EmissionValues, carbonInfo, years}) => {
    console.log(carbonInfo)
    const [yearToDisplay, setYearToDisplay] = useState(years[0])
    const [yearsEmissions, setYearsEmissions]= useState([])

    useEffect(() =>{
        console.log(yearsEmissions)
        findYearsEmissions(`${years[0]}`)
        console.log(yearsEmissions)
    },[])
    const findYearsEmissions = (year)=>{
        const allYearsEmissions = carbonTrackerCollection.filter((footprint) => footprint.date.year === year)
        console.log("allyears emissions", allYearsEmissions)
        setYearsEmissions([...allYearsEmissions])
    }
    const handleChangeOfYear = (value) =>{
        setYearToDisplay(value)
        findYearsEmissions(value)
    }
    return (
        <div>
        {yearsEmissions ? (<div>
            <h1>Your Yearly Overview</h1>

            <Select  title="Choose a Year" onChange={handleChangeOfYear} defaultValue={years[0]} style = {{width: 100}} options={years.map((year) =>(
            {
                label: year,
                value: `${year}`
            }
            ))}/>
            <div className="linechart">
            <LineChart carbonTrackerCollection={yearsEmissions}/>
            </div>
            <div className="linechart">
            <h1>Your Score vs Uk Average</h1>
            <BarOverview carbonTrackerCollection={yearsEmissions}/>
            </div>
            <div className="linechart">
            <View>
            <h1>Your monthly emissions</h1>
                <ScrollView horizontal = {true}>
                    <EmissionsGrid EmissionValues={yearsEmissions} carbonTrackerCollection={yearsEmissions} />
                </ScrollView>
            </View>
            
            {/* <Suggestions carbonInfo={carbonInfo}/> */}
            </div>
            <AppFooter/>
        </div>): null }
        </div>
    )
}

export default Overview