import { useState } from "react";
import { postTracker } from "../service/TrackerSevice";
import {InputNumber, Button, Switch, Form, DatePicker, Select, Option} from 'antd';
import { CheckOutlined, CloseOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom'


const MetersForm = ({addTrackingData, monthsOfTheYear}) => {
    const initialObj = {     
        electricBill: 0,
        gasBill: 0,
        oilBill: 0,
        carMileage: 0,
        flightUnder: 0,
        flightOver: 0,
        recyclePaper: false,
        recycleAluminium: false
    }
    const navigate = useNavigate()
    const   [form] = Form.useForm()
    let object1 ={}
    const [choosenYear, setChoosenYear] = useState ([])
    const [date, setDate] = useState(null) 
    const [submitedData, setSubmitedData] = useState(initialObj)

    const handleOnChange = (changedValue, allValues) => { 
        if (Object.keys(changedValue)[0] === 'year' || Object.keys(changedValue)[0] === 'month'){
            const tempdate = Object.assign({},date)
            tempdate[Object.keys(changedValue)[0]] = Object.values(changedValue)[0] 
            console.log(tempdate)
            setDate(tempdate)
        }else{
            delete allValues.year
            delete allValues.month
            console.log({allValues})
            setSubmitedData(allValues)
        }
       
    }

    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (event) =>{
        // event.preventDefault()
         console.log(submitedData)
        const newCarbonData = {
            electricBill: parseFloat(submitedData.electricBill) * 105,
            gasBill: parseFloat(submitedData.gasBill) * 105,
            oilBill: parseFloat(submitedData.oilBill) * 113,
            carMileage: parseFloat(submitedData.carMileage) * 0.79,
            flightUnder: parseFloat(submitedData.flightUnder) * 1100,
            flightOver: parseFloat(submitedData.flightOver) * 4400,
            recyclePaper: (submitedData.recyclePaper? 0 : 184),
            recycleAluminium: (submitedData.recycleAluminium? 0 : 166)
        }
        console.log("emision data", newCarbonData)
        const newTotalEmissions = Object.values(newCarbonData).reduce((total,next) => total+next,0)
        const newData = {
            date: date,
            entries: submitedData, 
            emissions: newCarbonData, 
            totalEmissions: newTotalEmissions
        }
        // postTracker(submitedData)
        // .then((data) => {addTrackingData(data)})
        // setSubmitedData(initialObj)
        postTracker(newData)
        .then((data) => {handleData(data)
        console.log(data)} )
        // setSubmitedData(initialObj)
        form.resetFields()
       
    }

    const handleData = (data)=>{
        addTrackingData(data)
        navigate("/display/" + data._id)
        
    }
    const handleYearChange = (value)=>{
        console.log(value)
        const findYear = monthsOfTheYear.filter((year) => Object.keys(year)[0] === value)
        console.log(Object.values(findYear[0]))
        setChoosenYear(Object.values(findYear[0])[0])
    }

    return (
        <Form initialValues={submitedData} form={form} onFinish={handleSubmit} onValuesChange={handleOnChange}>
                <div className="formflex">

                <Form.Item name = "year" className = "select" label = "Choose The Year">
                    <Select onChange={handleYearChange} options={monthsOfTheYear.map((yearObj) =>(
                        {
                            label: Object.keys(yearObj)[0],
                            value: Object.keys(yearObj)[0]
                        }
                    ))}/>
                </Form.Item>
                <Form.Item name = "month" className = "select" label = "Choose The Month">
                    <Select  options={choosenYear.map((monthString) => (
                        {
                            label: monthString,
                            value: monthString
                        }
                    ))}/>
                </Form.Item>
                </div><hr></hr>
                <div className="formflex">
                <Form.Item label="Electric Bill" name = "electricBill" >
                    <InputNumber className = "input" value = {submitedData.electricBill} addonAfter = "£" min={0} />
                </Form.Item>
                <Form.Item label="Gas Bill" name="gasBill"  >
                    <InputNumber className = "input" value = {submitedData.gasBill} addonAfter = "£" min={0} />
                </Form.Item>
                <Form.Item label="Oil Bill" name="oilBill"  >
                    <InputNumber className = "input" value = {submitedData.oilBill} addonAfter = "£" min={0} />
                </Form.Item>
                </div>
                <div className="formflex">
                <Form.Item label="Mileage of Your Car" name="carMileage" >
                    <InputNumber className = "input" value = {submitedData.carMileage} addonAfter = "mi" min={0} />
                </Form.Item>
                <Form.Item label="Number of Short Flights ( < 4 hours )"  name="flightUnder"   >
                    <InputNumber className = "inputsmall" value = {submitedData.flightUnder} min={0}  />
                </Form.Item>
                <Form.Item label="Number of Long Flights ( > 4 hours )"  name="flightOver" >
                    <InputNumber className = "inputsmall" value = {submitedData.flightOver} min={0} />
                </Form.Item>
                </div>
                <div className="formflex">
                <Form.Item label="Recycle Newspaper" valuePropName="checked" name="recyclePaper"  >
                    <Switch className="switch" style = {{background: "rgb(100, 165, 108)"}} value = {submitedData.recyclePaper} checked = {submitedData.recyclePaper} checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined />}  defaultChecked = {submitedData.recyclePaper}/>
                </Form.Item>
                <Form.Item label="Recycle Aluminum and Tin" valuePropName="checked"  name="recycleAluminium"  >
                    <Switch className="switch" style = {{background: "rgb(100, 165, 108)"}} value = "recycleAluminium" checked = {submitedData.recycleAluminium} checkedChildren={<CheckOutlined/>}  unCheckedChildren={<CloseOutlined />} />
                </Form.Item>
                </div>
                <Form.Item>
                    <Button className = "button" type = 'primary' htmlType="submit" style = {{background: "rgb(100, 165, 108)"}}>Submit</Button>
                </Form.Item>
 
        </Form>
    );
};

export default MetersForm




{/* <div>
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
<label htmlFor = "flightUnder" >Number of Flights(less than 4 hours)</label>
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
<input type = "submit" value = "Submit" /> */}
