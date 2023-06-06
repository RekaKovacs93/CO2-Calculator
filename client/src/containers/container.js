import React from "react";
import DoughnutChart from "../components/chart_component";
import { useState, useEffect } from "react";
// import { getTwelve } from "../service/TrackerSevice";
import MetersForm from "../components/MetersForm";
import Navbar from "../components/NavBar";

import Suggestions from "../components/Suggestions";
import UpdateForm from "../components/UpdateForm";
import BarChartComp from "../components/BarChart_component";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SuccessfulSubmition from "../components/SuccesfullSubmition";
import ErrorPage from "../components/ErrorPage";
import DisplayInfo from "../components/DisplayInfo";
import LineChart from "../components/LineChart";
import EmissionsCard from "../components/EmissionsCard"
import EmissionsGrid from "../components/EmissionsGrid";
import Overview from "../components/Overview";


function Container() {
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState([
    {
      "_id": "647c86c3ec969562398325bf",
      "entries": {
        "electricBill": "455",
        "gasBill": "",
        "oilBill": "",
        "carMileage": "",
        "flightUnder": "",
        "flightOver": "",
        "recyclePaper": false,
        "recycleAluminium": false
      },
      "emissions": {
        "electricBill": 47775,
        "gasBill": 0,
        "oilBill": 0,
        "carMileage": 0,
        "flightUnder": 0,
        "flightOver": 0,
        "recyclePaper": 184,
        "recycleAluminium": 166
      },
      "totalEmissions": 48125
    },
    {
      "_id": "647f28d7a9e96bcd0aaadf96",
      "entries": {
        "monthsSubmition": "2023-02-06T13:38:30.065Z",
        "electricBill": 36,
        "gasBill": 37,
        "oilBill": 0,
        "carMileage": 0,
        "flightUnder": 32,
        "flightOver": 0,
        "recyclePaper": false,
        "recycleAluminium": false
      },
      "emissions": {
        "electricBill": 3780,
        "gasBill": 3885,
        "oilBill": 0,
        "carMileage": 0,
        "flightUnder": 35200,
        "flightOver": 0,
        "recyclePaper": 184,
        "recycleAluminium": 166
      },
      "totalEmissions": 43215
    }
  ])
  // const [lastTwelveItems, setLastTwelveItems] = useState([])
  
  console.log(carbonTrackerCollection)
  const addTrackingData = (data) => {
    setCarbonTrackerCollection([...carbonTrackerCollection, data])
    setCarbonTrackerCollection([...carbonTrackerCollection, data])
  }

  // useEffect (() => {
  //   getTwelve().then((data) => {
  //     setLastTwelveItems(data)
  //   })
  // }, [])

  return (

    <Router>
      <h1>We have to name this APP</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/submit-form" element ={<MetersForm addTrackingData = {addTrackingData}/>}/>
        <Route path="/submit-form/:id" element={<SuccessfulSubmition/>}/>
        <Route path="/overview" element={<Overview carbonTrackerCollection = {carbonTrackerCollection} EmissionValues={carbonTrackerCollection}/>}/>
        <Route path="/display/:id" element={<DisplayInfo/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
      // {/* {carbonTrackerCollection ? <DoughnutChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      
  //     {/* {carbonTrackerCollection ? <Suggestions carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
  //     {/* {carbonTrackerCollection ? <LineChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
  //     {/* {carbonTrackerCollection ? <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
  //     {/* {carbonTrackerCollection ? <EmissionsCard carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
  //     {/* {carbonTrackerCollection ? <EmissionsGrid EmissionValues={carbonTrackerCollection}/>: null}  */}
  //     {/* <EmissionsGrid emissions={emissions} removeBooking={removeBooking} checkIn={checkIn}/> */}
  // );
  )
}

export default Container;