import { useState } from "react"
import { deleteTracker } from "../service/TrackerSevice"

const EmissionsCard = ({emission, removeEmission})=> { 

    

    const handleDelete = () => {
        deleteTracker(emission._id).then(()=>{
            removeEmission(emission._id)
        })
    }

    

    return (
        <>
            <p>{EmissionValues.electricBill}</p>  
            <p>{EmissionValues.gasBill}</p>  
            <p>{EmissionValues.oilBill}</p>  
            <p>{EmissionValues.carMileage}</p>  
            <p>{EmissionValues.flightUnder}</p>  
            <p>{EmissionValues.flightOver}</p>  
            <p>{EmissionValues.recyclePaper}</p>  
            <p>{EmissionValues.recycleAluminium}</p>  
            <p> Total emissions: </p>
            <p>{EmissionValues.totalEmissions} </p>
             
             
            
            <label>Delete Emission </label>
            
            <button onClick={handleDelete} value={emission._id}>Delete Emission</button>
        </>
    )
}

export default EmissionsCard