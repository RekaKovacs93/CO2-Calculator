import { useState } from "react"
import { deleteTracker } from "../service/TrackerSevice"

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
            <p>Electric Bill:{EmissionValues.electricBill}</p>  
            <p>Gas Bill:{EmissionValues.gasBill}</p>  
            <p>Oil Bill:{EmissionValues.oilBill}</p>  
            <p>Car Mileage:{EmissionValues.carMileage}</p>  
            <p>Flight Under 4 Hours:{EmissionValues.flightUnder + EmissionValues.flightOver}</p>  
            <p>Flight Over 4 Hours:{EmissionValues.flightOver}</p>  
            <p>Recycle Paper:{EmissionValues.recyclePaper}</p>  
            <p>Recycle Aluminium:{EmissionValues.recycleAluminium}</p>  
            <p> Total emissions: </p>
            <p>{emission.totalEmissions} </p>
             
             
            
            <label>Delete Emission </label>
            
            <button onClick={handleDelete} value={emission._id}>Delete Emission</button>
        </>
    )
}

export default EmissionsCard