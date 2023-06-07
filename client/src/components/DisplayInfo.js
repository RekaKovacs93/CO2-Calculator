import Suggestions from "./Suggestions"
import BarChartComp from "./BarChart_component"
import DoughnutChart from "./chart_component"
import UpdateForm from "./UpdateForm"
import {useNavigate, useParams} from 'react-router-dom'
import { getOneTracker } from "../service/TrackerSevice"
import { useEffect, useState } from "react"
import { Avatar, Card, Skeleton, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const DisplayInfo = () =>{
    const {id} = useParams()
    const  navigate = useNavigate()
    const [carbonInfo, setCarbonInfo] = useState(null)
  

    const updateCarbonData = (data) => {
        setCarbonInfo(data)
      }
    
    useEffect(() =>{
        getFormDB()
    },[]) 

    const getFormDB = () =>{
        
        getOneTracker(id)
            .then(data=>{setCarbonInfo(data)})
        
    }
   const updateLocalData = (data) =>{
    setCarbonInfo(data);
   }

   const plugins = [{
    beforeDraw: function(chart) {
     const width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         const fontSize = (height / 200).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         ctx.fillStyle = "lightgrey";
         const text = `${carbonInfo.totalEmissions} lbs`,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2.2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]


    return(
        <>
            <h1>Your monthly CO2 Footprint</h1>

            {carbonInfo? <div>
            {/* <UpdateForm   addTrackingData={updateLocalData} carbonInfo={carbonInfo}/> */}
            <div className = "displaycont">
            <div className="doughcont">
            <DoughnutChart EmissionValues={carbonInfo.emissions}  TotalEmission = {carbonInfo.totalEmissions}/>
            </div>
            <Card
            style={{
            width: 350,
            marginTop: 16,
            }}
            actions={[
          <EditOutlined key="edit" />
        ]}>
        <div className="displaycard"><h2>{carbonInfo.date.month} {carbonInfo.date.year}</h2>
        <hr></hr>
            <p><b>Electric:</b> {carbonInfo.entries.electricBill}</p>  
            <p><b>Gas:</b> {carbonInfo.entries.gasBill}</p>  
            <p><b>Oil:</b> {carbonInfo.entries.oilBill}</p>  
            <p><b>Car:</b> {carbonInfo.entries.carMileage}</p>
            <p><b>Flight Under 4 Hours:</b> {carbonInfo.entries.flightUnder}</p>  
            <p><b>Flight Over 4 Hours:</b> {carbonInfo.entries.flightOver}</p>  
            <p><b>Recycle Paper:</b> {carbonInfo.entries.recyclePaper}</p>  
            <p><b>Recycle Aluminium:</b> {(carbonInfo.entries.recycleAluminium)? true : false}</p>
            </div>
            {/* <hr></hr>
            <h3>Total emissions:</h3><h1>{carbonInfo.totalEmissions}</h1> */}
            </Card>
        </div>
        <h1>Your score vs UK average</h1>
            <BarChartComp carbonTrackerCollection={carbonInfo}/>
            <div className = "suggestions">
            <Suggestions carbonInfo={carbonInfo}/>
            </div>
            </div>: null} 
        </>

    )
}
export default DisplayInfo