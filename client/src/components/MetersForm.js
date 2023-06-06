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
    const [submitedData, setSubmitedData] = useState(initialObj)

    const handleOnChange = (changedValue, allValues) => { 
        
        console.log(dayjs(`${allValues["monthsSubmition"]}`))
        console.log(submitedData)
        setSubmitedData(allValues)
    }

    // const handleSwitchPaper = (evt) =>{
    //     const newSubmitedData = Object.assign({}, submitedData);
    //         newSubmitedData.recyclePaper = evt;
    //         setSubmitedData(newSubmitedData)

    // }
    // const handleSwitchAluminium = (evt) =>{
    //     const newSubmitedData = Object.assign({}, submitedData);
    //     newSubmitedData.recycleAluminium = evt;
    //     setSubmitedData(newSubmitedData)
    // }

    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (event) =>{
        // event.preventDefault()
         console.log(submitedData)
        const newCarbonData = {
            electricBill: submitedData.electricBill * 105,
            gasBill: submitedData.gasBill * 105,
            oilBill: submitedData.carMileage * 113,
            carMileage: submitedData.carMileage * 0.79,
            flightUnder: submitedData.flightUnder * 1100,
            flightOver: submitedData.flightOver * 4400,
            recyclePaper: (submitedData.recyclePaper? 0 : 184),
            recycleAluminium: (submitedData.recycleAluminium? 0 : 166)
        }
        const newTotalEmissions = Object.values(newCarbonData).reduce((total,next) => total+next,0)
        const newData = {
            entries: submitedData, 
            emissions: newCarbonData, 
            totalEmissions: newTotalEmissions
        }
        // postTracker(submitedData)
        // .then((data) => {addTrackingData(data)})
        // setSubmitedData(initialObj)
        postTracker(newData)
        .then((data) => {handleData(data)} )
        setSubmitedData(initialObj)
        form.resetFields()
       
    }

    const handleData = (data)=>{
        addTrackingData(data)
        object1= data
        navigate("/submit-form/" + object1._id)
        
    }

    return (
        <Form initialValues={submitedData} form={form} onFinish={handleSubmit} onValuesChange={handleOnChange}>
                <Form.Item name = "yearofSubmition" label = "Choose The Month">
                    <Select>

                    </Select>
                </Form.Item>
                <Form.Item name = "monthOfSubmition" label = "Choose The Month">
                    <Select>
                       
                    </Select>
                </Form.Item>
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
                    <Switch className="switch" value = {submitedData.recyclePaper} checked = {submitedData.recyclePaper} checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined />}  defaultChecked = {submitedData.recyclePaper}/>
                </Form.Item>
                <Form.Item label="Recycle Aluminum and Tin" valuePropName="checked"  name="recycleAluminium"  >
                    <Switch className="switch" value = "recycleAluminium" checked = {submitedData.recycleAluminium} checkedChildren={<CheckOutlined/>}  unCheckedChildren={<CloseOutlined />}/>
                </Form.Item>
                </div>
                <Form.Item>
                    <Button className = "button" type = 'primary' htmlType="submit">Submit</Button>
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
