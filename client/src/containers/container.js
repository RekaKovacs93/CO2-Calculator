import { useState } from "react";
import MetersForm from "../components/MetersForm";

function Container() {
  const [newInstance, setNewInstance] = useState(null);

  //console.log(newInstance)

  // create a new object and store it in the newInstance var
  const creatInstance = (electricValue, gasValue, oilValue, carValue, flightUnderValue, flightOverValue, flightValue, newspaperValue, tinValue) => {
    const obj = {
      electric: electricValue ,
      gas: gasValue,
      oil: oilValue,
      car: carValue,
      flightUnder: flightUnderValue,
      flightOver: flightOverValue,
      flightOverall: flightValue,
      newspaperRecycle: newspaperValue,
      tinRecycle: tinValue
    }
    setNewInstance(obj)
  }

  return (
    <>
      <h1>Hello guys</h1>
      <MetersForm creatInstance = {creatInstance}/>
    </>
  );
}

export default Container;