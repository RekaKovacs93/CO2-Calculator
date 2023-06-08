import EmissionsGrid from "../components/EmissionsGrid";
import EmissionsCard from "./EmissionsCard"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AppFooter from "./AppFooter";
import earth from "../earth.svg" 
import logo from "../Quebab.svg" 
import logogreen from "../Quebabgreen.svg" 
import { Button} from "antd"
import { useState } from "react";



const HomePage = ({emission, removeEmission, EmissionValues}) => {
  const [trackingToDisplay, setTrackingToDisplay] = useState([])
  const navigate = useNavigate()

  const compareValuesFun = (firstValue, secondValue) =>{
    const yearFirstValue = firstValue.date.year
    const yearSecondValue = secondValue.date.year
    if(yearFirstValue < yearSecondValue){
      return 1;
    }else if (yearFirstValue > yearSecondValue){
      return -1;
    }
    return 0;
  }
  const limitedEmissionValues = EmissionValues.sort(compareValuesFun).slice(0, 3);

  const handleBtnClick = () =>{
    navigate('/submit-form')
  }

  return (
    <>
    <div className="hero">
    <h1 className="welcome">Welcome to Our CO2 Calculator</h1>
    <img className="earth" src = {logogreen}/>
    <h1 className="logotype">CARBONATOR</h1>
    <h3>We believe that understanding and reducing our carbon footprint is essential for a sustainable future.</h3>
    
    <p>
       By raising awareness and making informed choices, we can mitigate climate change, take individual accountability, conserve the environment, improve our health, and inspire others to join us. Calculate your carbon footprint today and be a part of the journey towards a greener world!
    </p>
      <Button className = "button" style = {{background: "rgb(100, 165, 108)"}} onClick={handleBtnClick}>Get started</Button>
    
    </div>
    
    
    <div>
    <h2 className="recents">Most Recent</h2>
    <EmissionsGrid EmissionValues={limitedEmissionValues}/> 
    {/* <EmissionsCard EmissionValues={EmissionValues} emission={emission} removeEmission={removeEmission}/> */}
    </div>
    {/* <Link to='/overview'>
      <button>See more information</button>
    </Link> */}
    <AppFooter/>
    </>
  )
}

export default HomePage