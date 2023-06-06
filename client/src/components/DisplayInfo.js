import Suggestions from "./Suggestions"
import BarChartComp from "./BarChart_component"
import DoughnutChart from "./chart_component"
import UpdateForm from "./UpdateForm"
import {useNavigate, useParams} from 'react-router-dom'
import { getOneTracker } from "../service/TrackerSevice"
import { useEffect, useState } from "react"
const DisplayInfo = () =>{
    const {id} = useParams()
    const  navigate = useNavigate()
    const [carbonInfo, setCarbonInfo] = useState(null)
    console.log(id)

    const updateCarbonData = (data) => {
        setCarbonInfo(data)
      }
    
    useEffect(() =>{
        getFormDB()
    },[]) 

    const getFormDB = () =>{
        console.log("hello")
        getOneTracker(id)
        .then(data=>{setCarbonInfo(data)
        console.log({data})})
    }
    console.log(carbonInfo)
   const updateLocalData = (data) =>{
    setCarbonInfo(data);
   }


    return(
        <>
            {carbonInfo? <div>
            {/* <UpdateForm   addTrackingData={updateLocalData} carbonInfo={carbonInfo}/> */}
            <DoughnutChart EmissionValues={carbonInfo.emissions}  TotalEmission = {carbonInfo.totalEmissions}/>
            <BarChartComp carbonTrackerCollection={carbonInfo}/>
            <Suggestions carbonInfo={carbonInfo}/>
            </div>: null} 
        </>

    )
}
export default DisplayInfo