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


function Container() {
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState(null)
  // const [lastTwelveItems, setLastTwelveItems] = useState([])
  
  console.log(carbonTrackerCollection)
  const addTrackingData = (data) => {
    setCarbonTrackerCollection(data)
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
        <Route path="/overview" element=""/>
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