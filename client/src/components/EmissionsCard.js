import { useState } from "react"
import { deleteTracker } from "../service/TrackerSevice"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./chart_component";
import {useNavigate} from 'react-router-dom'


const EmissionsCard = ({emission, removeEmission, EmissionValues, TotalEmission, id})=> { 
  const navigate = useNavigate()

    if (!emission) {
        return
    }


    const handleDelete = () => {
        deleteTracker(emission._id).then(()=>{
            removeEmission(emission._id)
        })
    }
    const handleClick = () => {
      navigate(`/update/${id.$oid}`)
      console.log(emission._id)
    }

    return (
        <>
        <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={handleClick} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        {/* <p>Electric:{EmissionValues.electricBill}</p>  
            <p>Gas:{EmissionValues.gasBill}</p>  
            <p>Oil:{EmissionValues.oilBill}</p>  
            <p>Car Mileage:{EmissionValues.carMileage}</p>  
            <p>Flight Under 4 Hours:{EmissionValues.flightUnder}</p>  
            <p>Flight Over 4 Hours:{EmissionValues.flightOver}</p>  
            <p>Recycle Paper:{EmissionValues.recyclePaper}</p>  
            <p>Recycle Aluminium:{EmissionValues.recycleAluminium}</p>  
            <p> Total emissions: </p>
            <p>{emission.totalEmissions} </p> */}
             
             
            
            {/* <label>Delete Emission </label> */}
            <h3>This month</h3>
            <DoughnutChart EmissionValues={EmissionValues}  TotalEmission = {TotalEmission}/>
            
            {/* <button onClick={handleDelete} value={emission._id}>Delete Emission</button> */}
      </Card>
            
        </>
    )
}

export default EmissionsCard