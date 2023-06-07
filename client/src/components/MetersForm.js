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
            setDate(tempdate)
        }else{
            delete allValues.year
            delete allValues.month
            setSubmitedData(allValues)
        }
       
    }

    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (event) =>{
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
        const newTotalEmissions = Object.values(newCarbonData).reduce((total,next) => total+next,0)
        const newData = {
            date: date,
            entries: submitedData, 
            emissions: newCarbonData, 
            totalEmissions: newTotalEmissions
        }
        postTracker(newData)
        .then((data) => {handleData(data)})
        form.resetFields()
       
    }

    const handleData = (data)=>{
        addTrackingData(data)
        navigate("/display/" + data._id)
        
    }
    const handleYearChange = (value)=>{
        const findYear = monthsOfTheYear.filter((year) => Object.keys(year)[0] === value)
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



