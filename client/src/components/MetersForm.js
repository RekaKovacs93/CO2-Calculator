import { useState } from "react";
import { postTracker } from "../service/TrackerSevice";


const MetersForm = ({addTrackingData}) => {
    const sizeInput =  '60px'
    const initialObj = {       
        electricBill: "",
        gasBill: "",
        oilBill: "",
        carMileage: "",
        flightUnder: "",
        flightOver: "",
        recyclePaper: false,
        recycleAluminium: false
    }

    const [submitedData, setSubmitedData] = useState(initialObj)

    const handleOnChange = (evt) => {
        const newSubmitedData = Object.assign({}, submitedData);
        newSubmitedData[evt.target.name] = evt.target.value;
        setSubmitedData(newSubmitedData)
    }

    const handleOnChangeCheckbox = (evt) =>{
        const newSubmitedData = Object.assign({}, submitedData);
        if (evt.target.checked){
            newSubmitedData[evt.target.name] = true;
            setSubmitedData(newSubmitedData)
        }else {
            newSubmitedData[evt.target.name] = false;
            setSubmitedData(newSubmitedData)
        }
    }

    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (event) =>{
        event.preventDefault()
        postTracker(submitedData)
        .then((data) => {addTrackingData(data)})

        setSubmitedData(initialObj)
       
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "electric" >Electric Bill</label>
                <input onChange = {handleOnChange} type = 'number' value = {submitedData.electricBill}  id = "electric" name = "electricBill" style={{width: sizeInput}}/>
                <label htmlFor = "gas" >Gas Bill</label>
                <input type = "number" value = {submitedData.gasBill} onChange = {handleOnChange} id = "gas" name="gasBill" style={{width: sizeInput}}/>
                <label htmlFor = "oil">Oil Bill</label>
                <input type = "number" value = {submitedData.oilBill} onChange = {handleOnChange} id = "oil" name="oilBill" style={{width: sizeInput}}/>
            </div>
            <div>
                <label htmlFor = "mileage">Mileage of Your Car</label>
                <input type = "number" value = {submitedData.carMileage} onChange = {handleOnChange} id = "mileage" name="carMileage" style={{width: sizeInput}}/>
                <label htmlFor = "flightUnder" >Nuber of Flights(less than 4 hours)</label>
                <input type = "number" value = {submitedData.flightUnder} onChange = {handleOnChange} id = "flightUnder" name="flightUnder" style={{width: sizeInput}}/>
                <label htmlFor = "flightOver" >Number of Flights(more than 4 hours)</label>
                <input type = "number" value = {submitedData.flightOver} onChange = {handleOnChange} id = "flightOver" name="flightOver" style={{width: sizeInput}}/>
            </div>
            <div>
                <label htmlFor = "newspaper">Recycle Newspaper</label>
                <input type = "checkbox" id = "newspaper" onChange = {handleOnChangeCheckbox} value = {submitedData.recyclePaper} checked = {submitedData.recyclePaper} name="recyclePaper" />
                <label htmlFor = "tin" >Recycle Aluminum and Tin</label>
                <input type = "checkbox" id = "tin" onChange = {handleOnChangeCheckbox} value = {submitedData.recycleAluminium} checked = {submitedData.recycleAluminium} name="recycleAluminium" />
            </div>
            <input type = "submit" value = "Submit" />
        </form>
    );
};

export default MetersForm
