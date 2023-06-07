import { useState, useEffect } from "react";
import { updateTracker } from "../service/TrackerSevice";
import {InputNumber, Button, Switch, Form, Statistic, Space} from 'antd'
import { CheckOutlined, CloseOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'
import { useParams, useNavigate} from 'react-router-dom'
import { getOneTracker } from "../service/TrackerSevice";

const UpdateForm = ({updateTrackingData}) => {
    const initialObj = {
        "electricBill": 0,
        "gasBill": 0,
        "oilBill": 0,
        "carMileage": 0,
        "flightUnder": 0,
        "flightOver": 0,
        "recyclePaper": false,
        "recycleAluminium": false
     }
    
    const {id} = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [carbonInfo, setCarbonInfo] = useState(null)
    const [formData, setFormData] = useState(null)
    // const initDate = `${carbonInfo.entries.monthsSubmition}`

    useEffect(() =>{
        getInfoFormDB()
    },[]) 
    // useEffect(() =>{
    //     console.log("heyyyyyy", {carbonInfo})
    //     setInitialValues()
    // },[formData]) 

  

    const getInfoFormDB = () =>{
        
        getOneTracker(id)
        .then(data=>{
            setCarbonInfo(data)
            setFormData(data.entries)
            const formFeildsObj = {...data.date, ...data.entries}
            form.setFieldsValue(formFeildsObj)

            
        })

        // .then(data =>{setFormData(data)} )
        // console.log(carbonInfo)
        // setFormData(carbonInfo.entries)
    }
    // const setInitialValues = () =>{
    //     console.log({carbonInfo})
    //     const formFieldsObj = {...carbonInfo.date, ...formData}
    //     form.setFieldsValue(formFieldsObj)
    // }
    
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
        // event.preventDefault()
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
            <div className="formflex">
            <Form.Item label="Electric Bill" name="electricBill">
                <InputNumber addonAfter="£" min={0} max={9999999}/>
            </Form.Item>
            <Form.Item label="Gas Bill" name="gasBill">
                <InputNumber addonAfter = "£" min={0} max={9999999}/>
            </Form.Item>
            <Form.Item label="Oil Bill" name="oilBill">
                <InputNumber addonAfter = "£" min={0} max={9999999}/>
            </Form.Item>
            </div>
            <div className="formflex">
            <Form.Item label="Mileage of Your Car" name="carMileage">
                <InputNumber addonAfter = "mi" min={0} max={9999999} />
            </Form.Item>
            <Form.Item label="Number of Flights(less than 4 hours)"  name="flightUnder">
                <InputNumber min={0}  max={9999999}/>
            </Form.Item>
            <Form.Item label="Number of Flights(more than 4 hours)"  name="flightOver">
                <InputNumber min={0}  max={9999999} />
            </Form.Item>
            </div>
            <div className="formflex">
            <Form.Item label="Recycle Newspaper" valuePropName="checked" name="recyclePaper"  >
                <Switch  checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined />} />
            </Form.Item>
            <Form.Item label="Recycle Aluminum and Tin" valuePropName="checked"  name="recycleAluminium"  >
                <Switch checkedChildren={<CheckOutlined/>}  unCheckedChildren={<CloseOutlined />}/>
            </Form.Item>
            </div>
            <Form.Item>
                <Button className = "button" htmlType="submit">Update</Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateForm;
