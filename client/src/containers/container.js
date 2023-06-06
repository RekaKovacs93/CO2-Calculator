import React from "react";
import DoughnutChart from "../components/chart_component";
import { useState, useEffect } from "react";
// import { getTwelve } from "../service/TrackerSevice";
import MetersForm from "../components/MetersForm";
import Navbar from "../components/NavBar";

import Suggestions from "../components/Suggestions";
import UpdateForm from "../components/UpdateForm";
import BarChartComp from "../components/BarChart_component";
import LineChart from "../components/LineChart";
import EmissionsCard from "../components/EmissionsCard";
import EmissionsGrid from "../components/EmissionsGrid";

function Container() {
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState([])
  // const [lastTwelveItems, setLastTwelveItems] = useState([])
  
  const addTrackingData = (data) => {
    setCarbonTrackerCollection([...carbonTrackerCollection, data])
  }

  // useEffect (() => {
  //   getTwelve().then((data) => {
  //     setLastTwelveItems(data)
  //   })
  // }, [])

  return (
    <>
      {/* <h1>Hello guys</h1> */}
      
      
      <Navbar/>
      
      <MetersForm addTrackingData = {addTrackingData}/>

      {/* {carbonTrackerCollection ? <DoughnutChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      
      {/* {carbonTrackerCollection ? <Suggestions carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <LineChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <EmissionsCard carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {carbonTrackerCollection ? <EmissionsGrid EmissionValues={carbonTrackerCollection}/>: null} 
      {/* <EmissionsGrid emissions={emissions} removeBooking={removeBooking} checkIn={checkIn}/> */}
    </>
  );
}

export default Container;