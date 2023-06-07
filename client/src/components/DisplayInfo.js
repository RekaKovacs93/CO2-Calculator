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
          // <SettingOutlined key="setting" />,
          <EditOutlined key="edit" 
        //   onClick={handleClick} 

          />
        ]}>
            <p><b>Electric:</b>{carbonInfo.emissions.electricBill}</p>  
            <p><b>Gas:</b> {carbonInfo.emissions.gasBill}</p>  
            <p><b>Oil:</b>{carbonInfo.emissions.oilBill}</p>  
            <p><b>Flight Under 4 Hours:</b>{carbonInfo.emissions.flightUnder}</p>  
            <p><b>Flight Over 4 Hours:</b>{carbonInfo.emissions.flightOver}</p>  
            <p><b>Recycle Paper:</b>{carbonInfo.emissions.recyclePaper}</p>  
            <p><b>Recycle Aluminium:</b>{carbonInfo.emissions.recycleAluminium}</p>
            {/* <hr></hr>
            <h3>Total emissions:</h3><h1>{carbonInfo.totalEmissions}</h1> */}
            </Card>
        </div>
            <BarChartComp carbonTrackerCollection={carbonInfo}/>
            <Suggestions carbonInfo={carbonInfo}/>
            </div>: null} 
        </>

    )
}
export default DisplayInfo