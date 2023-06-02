import { useState } from "react";
import MetersForm from "../components/MetersForm";

function Container() {
  
  const [carbonTrackeColection, setCarbonTrackerColection] = useState([])
  
  // const [newInstance, setNewInstance] = useState(null);
  //console.log(newInstance)

  // create a new object and store it in the newInstance var
  // const creatInstance = (electricValue, gasValue, oilValue, carValue, flightUnderValue, flightOverValue, newspaperValue, tinValue) => {
  //   const obj = {
  //     electricBill: electricValue,
  //     gasBill: gasValue,
  //     oilBill: oilValue,
  //     carMileage: carValue,
  //     flightUnder: flightUnderValue,
  //     flightOver: flightOverValue,
  //     recyclePaper: newspaperValue,
  //     recycleAluminium: tinValue
  //   }
  //   setNewInstance(obj)
  // }

  const addTrackingData = (data) => {
    setCarbonTrackerColection([...carbonTrackeColection, data])
  }

  return (
    <>
      <h1>Hello guys</h1>
      <MetersForm addTrackingData = {addTrackingData}/>
    </>
  );
}

export default Container;