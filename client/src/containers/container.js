import React from "react";
import DoughnutChart from "../components/chart_component";
import { useState } from "react";
import MetersForm from "../components/MetersForm";
import Suggestions from "../components/Suggestions";

function Container() {
  
  const [carbonTrackerCollection, setCarbonTrackerCollection] = useState(null)
  
  // const [newInstance, setNewInstance] = useState(null);
  console.log(carbonTrackerCollection)

  const addTrackingData = (data) => {
    setCarbonTrackerCollection(data)
  }

  return (
    <>
      <h1>Hello guys</h1>
      <MetersForm addTrackingData = {addTrackingData}/>
      {carbonTrackerCollection ? <DoughnutChart carbonTrackerCollection={carbonTrackerCollection}/>: null}
      {carbonTrackerCollection ? <Suggestions carbonTrackerCollection={carbonTrackerCollection}/>: null}
    </>
  );
}

export default Container;