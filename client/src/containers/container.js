import React from "react";
import DoughnutChart from "../components/chart_component";
import { useState, useEffect } from "react";
import { getTracker } from "../service/TrackerSevice";
import MetersForm from "../components/MetersForm";
import Navbar from "../components/NavBar";
import UpdateForm from "../components/UpdateForm";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SuccessfulSubmition from "../components/SuccesfullSubmition";
import ErrorPage from "../components/ErrorPage";
import DisplayInfo from "../components/DisplayInfo";
import Overview from "../components/Overview";
import HomePage from "../components/HomePage";
import AppFooter from "../components/AppFooter";
// import Resources from "../components/Resources";


function Container() {
  const months = [  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState([])
  const [monthsOfTheYear, setMonthsOfTheYear] = useState([])
  // const [lastTwelveItems, setLastTwelveItems] = useState([])
  
  console.log(carbonTrackerCollection)
  const addTrackingData = (data) => {
    setCarbonTrackerCollection([...carbonTrackerCollection, data])
    updateMonthsAndYears(data.date)
  }

  const updateMonthsAndYears = (date) =>{
    const copyOfMonths =[...monthsOfTheYear]
    const yearkeys = monthsOfTheYear.map((year) => Object.keys(year)[0])
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
    getDBSeeds()
  }, [])
  const getMonthsAndYears = () =>{

      const allMonthsAndYears = years.map((year) => {
        const yearObj = {}
        yearObj[year] = months
        return yearObj
      })
      setMonthsOfTheYear(allMonthsAndYears)
      console.log(monthsOfTheYear)
   
  }
  const getMonthsAndYearsFromFetch = (data) => {
    const mapDBDates = data.map((element) => element.date)
    mapDBDates.forEach((element) => {
      // updateMonthsAndYears(element)
    })
  }
  const getDBSeeds = ()=> {
    getMonthsAndYears()
    getTracker()
    .then(data => {
      setCarbonTrackerCollection(data)
      getMonthsAndYearsFromFetch(data)
    })
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
        <Route path="/overview" element={<Overview carbonTrackerCollection = {carbonTrackerCollection} EmissionValues={carbonTrackerCollection} years={years}/>}/>
        <Route path="/display/:id" element={<DisplayInfo EmissionValues={carbonTrackerCollection }/>}/>
        <Route path="/update/:id" element={<UpdateForm updateTrackingData={updateTrackingData}/>}/>
        {/* <Route path="/resources" element={<Resources/>}/> */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>  
    </Router>

  )
}

export default Container;