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
import HomePage from "../components/HomePage";
import AppFooter from "../components/AppFooter";
// import Resources from "../components/Resources";


function Container() {
  const months = [  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState([
  {
    "_id": "647f1eb0a4d27a4c3c69e705",
    "entries": {
    "electricBill": 0,
    "gasBill": 0,
    "oilBill": 0,
    "carMileage": 0,
    "flightUnder": 560,
    "flightOver": 10,
    "recyclePaper": true,
    "recycleAluminium": true
    },
    "emissions": {
    "electricBill": 0,
    "gasBill": 0,
    "oilBill": 0,
    "carMileage": 0,
    "flightUnder": 616000,
    "flightOver": 44000,
    "recyclePaper": 0,
    "recycleAluminium": 0
    },
    "totalEmissions": 660000
  },
  {
    "_id": "647f1e40a4d27a4c3c69e704",
    "entries": {
    "electricBill": 0,
    "gasBill": 0,
    "oilBill": 0,
    "carMileage": 0,
    "flightUnder": 0,
    "flightOver": 0,
    "recyclePaper": false,
    "recycleAluminium": false
    },
    "emissions": {
    "electricBill": 0,
    "gasBill": 0,
    "oilBill": 0,
    "carMileage": 0,
    "flightUnder": 0,
    "flightOver": 0,
    "recyclePaper": 184,
    "recycleAluminium": 166
    },
    "totalEmissions": 350
    }

  ])
  const [monthsOfTheYear, setMonthsOfTheYear] = useState([])
  // const [lastTwelveItems, setLastTwelveItems] = useState([])
  
  console.log(carbonTrackerCollection)
  const addTrackingData = (data) => {
    setCarbonTrackerCollection([...carbonTrackerCollection, data])
    updateMonthsAndYears(data.date)
  }

  const updateMonthsAndYears = (date) =>{
    const copyOfMonths =[...monthsOfTheYear]
    const yearkeys = copyOfMonths.map((year) => Object.keys(year)[0])
    const yearIndex = yearkeys.indexOf(date.year)
    const monthIndex = copyOfMonths[yearIndex][date.year].indexOf(date.month)
    if (monthIndex >-1){
      const spliceListOfMonths =  [... copyOfMonths[yearIndex][date.year]]
      spliceListOfMonths.splice(monthIndex, 1)
      copyOfMonths[yearIndex][date.year] = spliceListOfMonths
    }
    setMonthsOfTheYear(copyOfMonths)
  }


  useEffect (() => {
    // getTwelve().then((data) => {
    //   setLastTwelveItems(data)
    // })
    getMonthsAndYears()
  }, [])
  const getMonthsAndYears = () =>{
    const allMonthsAndYears = years.map((year) => {
      const yearObj = {}
      yearObj[year] = months
      return yearObj
      // return yearObj[`${year}`] = months
    })
    setMonthsOfTheYear(allMonthsAndYears)
   
  }
  
  

  const updateTrackingData = (data, oldData) =>{
  
    const index = carbonTrackerCollection.map(elm => elm._id).indexOf(oldData._id)
    const collectionLocal = carbonTrackerCollection
    collectionLocal[index] = data
    setCarbonTrackerCollection(collectionLocal)
  }


  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage EmissionValues={carbonTrackerCollection }/>}/>
        <Route path="/submit-form" element ={<MetersForm addTrackingData = {addTrackingData} monthsOfTheYear={monthsOfTheYear}/>}/>
        <Route path="/submit-form/:id" element={<SuccessfulSubmition/>}/>
        <Route path="/overview" element={<Overview carbonTrackerCollection = {carbonTrackerCollection} EmissionValues={carbonTrackerCollection}/>}/>
        <Route path="/display/:id" element={<DisplayInfo EmissionValues={carbonTrackerCollection }/>}/>
        <Route path="/update/:id" element={<UpdateForm updateTrackingData={updateTrackingData}/>}/>
        {/* <Route path="/resources" element={<Resources/>}/> */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
      
      {/* <Navbar/> */}
      
      {/* <MetersForm addTrackingData = {addTrackingData}/> */}

      {/* {carbonTrackerCollection ? <DoughnutChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      
      {/* {carbonTrackerCollection ? <Suggestions carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <LineChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <EmissionsCard carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <EmissionsGrid EmissionValues={carbonTrackerCollection}/>: null}  */}
      {/* <EmissionsGrid emissions={emissions} removeBooking={removeBooking} checkIn={checkIn}/> */}
      
      
      {/* <Navbar/> */}
      
      {/* <MetersForm addTrackingData = {addTrackingData}/> */}

      {/* {carbonTrackerCollection ? <DoughnutChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      
      {/* {carbonTrackerCollection ? <Suggestions carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <LineChart carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <BarChartComp carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <EmissionsCard carbonTrackerCollection={carbonTrackerCollection}/>: null} */}
      {/* {carbonTrackerCollection ? <EmissionsGrid EmissionValues={carbonTrackerCollection}/>: null}  */}
      {/* <EmissionsGrid emissions={emissions} removeBooking={removeBooking} checkIn={checkIn}/> */}
      
    </Router>

  )
}

export default Container;