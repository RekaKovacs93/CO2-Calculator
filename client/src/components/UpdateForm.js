import { useState } from "react";
import { updateTracker } from "../service/TrackerSevice";
import {InputNumber, Button, Switch, Form, DatePicker} from 'antd'
import { CheckOutlined, CloseOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'

const UpdateForm = ({updateLocalData, carbonInfo}) => {
    console.log(carbonInfo.entries)
    const [form] = Form.useForm()
    const [formData, setFormData] = useState(carbonInfo.entries)
    console.log(formData)
    const initDate = `${carbonInfo.entries.monthsSubmition}`
    
    const handleValuesChange = (changedValues, allValues) => {
        setFormData(allValues)
        // const newSubmitedData = Object.assign({}, formData);
        // if( parseFloat(Object.values(changedValues)) && parseFloat(Object.values(changedValues)) > 0){
        //     newSubmitedData[Object.keys(changedValues)] = parseFloat(Object.values(changedValues));
        //     setFormData(newSubmitedData)
        // }
    };

    // const handleSwitchPaper = (evt) =>{
    //     const newSubmitedData = Object.assign({}, formData);
    //         newSubmitedData.recyclePaper = evt;
    //         setFormData(newSubmitedData)

    // }
    // const handleSwitchAluminium = (evt) =>{
    //     const newSubmitedData = Object.assign({}, formData);
    //     newSubmitedData.recycleAluminium = evt;
    //     setFormData(newSubmitedData)
    // }

    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (values) =>{
        // event.preventDefault()
        console.log({values})
        const newCarbonData = {
            electricBill: formData.electricBill * 105,
            gasBill: formData.gasBill * 105,
            oilBill: formData.carMileage * 113,
            carMileage: formData.carMileage * 0.79,
            flightUnder: formData.flightUnder * 1100,
            flightOver: formData.flightOver * 4400,
            recyclePaper: (formData.recyclePaper? 0 : 184),
            recycleAluminium: (formData.recycleAluminium? 0 : 166)
        }
        const newTotalEmissions = Object.values(newCarbonData).reduce((total,next) => total+next,0)
        const newData = {
            _id: carbonInfo._id,
            entries: values, 
            emissions: newCarbonData, 
            totalEmissions: newTotalEmissions
        }

        updateTracker(newData)
        .then(() => {
            
            updateLocalData(newData)
        })
        
        form.resetFields()

    }

    return (
        <Form initialValues={formData} form={form} onFinish={handleSubmit} onValuesChange={handleValuesChange}>
            <Form.Item name = "monthsSubmitions" label = "Choose The Month">
                <DatePicker picker="month" format="YYYY-MM"/>
            </Form.Item>
            <Form.Item label="Electric Bill" name="electricBill">
                <InputNumber addonAfter="£" min={0} max={9999999}/>
            </Form.Item>
            <Form.Item label="Gas Bill" name="gasBill">
                <InputNumber addonAfter = "£" min={0} max={9999999}/>
            </Form.Item>
            <Form.Item label="Oil Bill" name="oilBill">
                <InputNumber addonAfter = "£" min={0} max={9999999}/>
            </Form.Item>
            <Form.Item label="Mileage of Your Car" name="carMileage">
                <InputNumber addonAfter = "mi" min={0} max={9999999} />
            </Form.Item>
            <Form.Item label="Number of Flights(less than 4 hours)"  name="flightUnder">
                <InputNumber min={0}  max={9999999}/>
            </Form.Item>
            <Form.Item label="Number of Flights(more than 4 hours)"  name="flightOver">
                <InputNumber min={0}  max={9999999} />
            </Form.Item>
            <Form.Item label="Recycle Newspaper" valuePropName="checked" name="recyclePaper"  >
                <Switch  checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined />} />
            </Form.Item>
            <Form.Item label="Recycle Aluminum and Tin" valuePropName="checked"  name="recycleAluminium"  >
                <Switch checkedChildren={<CheckOutlined/>}  unCheckedChildren={<CloseOutlined />}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Update</Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateForm;
