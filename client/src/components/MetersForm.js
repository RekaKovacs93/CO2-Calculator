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


    // const [electric,setElectric] = useState(0)
    // const [gas,setGas] = useState(0)
    // const [oil,setOil] = useState(0)
    // const [mileage,setMileage] = useState(0)
    // const [flightUnder,setFlightUnder] = useState(0)
    // const [flightOver, setFlightOver] = useState(0)
    // const [newspaperRecycle, setNewspaperRecycle] = useState(false)
    // const [tinRecycle, setTinRecycle] = useState(false)

    // // all those handle  the change events of tthe form inputs
    // const handleGasChange = (event) =>{
    //     setGas(event.target.value)
    // }
    // const handleElectricChange = (event) =>{
    //     setElectric(event.target.value)
    // }
    // const handleOilChange = (event) =>{
    //     setOil(event.target.value)
    // }
    // const handleMileageChange = (event) =>{
    //     setMileage(event.target.value)
    // }
    // const handleFlightUnderChange = (event) =>{
    //     setFlightUnder(event.target.value)
    // }
    // const handleFlightOverChange = (event) =>{
    //     setFlightOver(event.target.value)
    // }
    // const handleNewspaperChange = (event) =>{
    //     setNewspaperRecycle(event.target.checked)
    // }
    // const handleTinChange = (event) =>{
    //     setTinRecycle(event.target.checked)
    // }

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
        // creatInstance(electric, gas, oil, mileage, flightUnder, flightOver, newspaperRecycle, tinRecycle)
        // creatInstance(electric * 105, gas  * 105, oil * 113, mileage * 0.79, flightUnder * 1100, flightOver * 4400, flightOver * 1100 + flightUnder * 4400, newspaperRecycle * 184, tinRecycle * 166)
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


// Multiply your monthly electric bill by 105
// Multiply your monthly gas bill by 105
// Multiply your monthly oil bill by 113
// Multiply your total yearly mileage on your car by .79
// Multiply the number of flights you’ve taken in the past year (4 hours or less) by 1,100
// Multiply the number of flights you’ve taken in the past year (4 hours or more) by 4,400
// Add 184 if you do NOT recycle newspaper
// Add 166 if you do NOT recycle aluminum and tin
// Add 1-8 together for your total carbon footprint