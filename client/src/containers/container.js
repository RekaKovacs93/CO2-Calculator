import React from "react";
import DoughnutChart from "../components/chart_component";
import { useState } from "react";
import MetersForm from "../components/MetersForm";

function Container() {
  
  const [carbonTrackerColection, setCarbonTrackerColection] = useState([])
  
  // const [newInstance, setNewInstance] = useState(null);
  console.log(carbonTrackerColection)

  const addTrackingData = (data) => {
    setCarbonTrackerColection([...carbonTrackerColection, data])
  }

  return (
    <>
      <h1>Hello guys</h1>
      <MetersForm addTrackingData = {addTrackingData}/>
      <DoughnutChart/>
    </>
  );
}

export default Container;