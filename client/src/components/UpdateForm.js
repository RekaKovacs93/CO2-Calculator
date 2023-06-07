import { useState, useEffect } from "react";
import { updateTracker } from "../service/TrackerSevice";
import {InputNumber, Button, Switch, Form, Statistic, Space} from 'antd'
import { CheckOutlined, CloseOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'
import { useParams, useNavigate} from 'react-router-dom'
import { getOneTracker } from "../service/TrackerSevice";

const UpdateForm = ({updateTrackingData}) => {

    
    const {id} = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [carbonInfo, setCarbonInfo] = useState(null)
    const [formData, setFormData] = useState(null)
   

    useEffect(() =>{
        getInfoFormDB()
    },[]) 

    const getInfoFormDB = () =>{
        
        getOneTracker(id)
        .then(data=>{
            setCarbonInfo(data)
            setFormData(data.entries)
            const formFeildsObj = {...data.date, ...data.entries}
            form.setFieldsValue(formFeildsObj)   
        })
    }

    if (!formData && !carbonInfo) {
        return
    }
    
    const handleValuesChange = (changedValues, allValues) => {
        delete allValues.year
        delete allValues.month
        setFormData(allValues)

    };



    //handle the submit event, it sends all values to container to create an object
    const handleSubmit = (values) =>{
        
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
            date: carbonInfo.date,
            entries: formData, 
            emissions: newCarbonData, 
            totalEmissions: newTotalEmissions
        }

        updateTracker(newData)
        .then(() => {
            
            updateTrackingData(newData, carbonInfo)
        })
        navigate(`/display/${id}`)
        form.resetFields()

    }
    return (
        
        <Form  form={form} onFinish={handleSubmit} onValuesChange={handleValuesChange}>
        
            <Space direction="horizontal">
            <Form.Item name = 'year'>
            <Statistic   groupSeparator=""/>
            </Form.Item>
            <Form.Item name = 'month'>
                <Statistic  />
            </Form.Item>
            </Space>
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
