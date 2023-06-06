import { useState } from "react"
import { deleteTracker } from "../service/TrackerSevice"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';

const EmissionsCard = ({emission, removeEmission, EmissionValues})=> { 

    if (!emission) {
        return
    }


    const handleDelete = () => {
        deleteTracker(emission._id).then(()=>{
            removeEmission(emission._id)
        })
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
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <p>Electric:{EmissionValues.electricBill}</p>  
            <p>Gas:{EmissionValues.gasBill}</p>  
            <p>Oil:{EmissionValues.oilBill}</p>  
            <p>Car Mileage:{EmissionValues.carMileage}</p>  
            <p>Flight Under 4 Hours:{EmissionValues.flightUnder + EmissionValues.flightOver}</p>  
            <p>Flight Over 4 Hours:{EmissionValues.flightOver}</p>  
            <p>Recycle Paper:{EmissionValues.recyclePaper}</p>  
            <p>Recycle Aluminium:{EmissionValues.recycleAluminium}</p>  
            <p> Total emissions: </p>
            <p>{emission.totalEmissions} </p>
             
             
            
            <label>Delete Emission </label>
            
            <button onClick={handleDelete} value={emission._id}>Delete Emission</button>
      </Card>
            
        </>
    )
}

export default EmissionsCard