import { useState, useEffect } from "react";
import { updateTracker } from "../service/TrackerSevice";
import {InputNumber, Button, Switch, Form, DatePicker} from 'antd'
import { CheckOutlined, CloseOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'
import { useParams, useNavigate} from 'react-router-dom'
import { getOneTracker } from "../service/TrackerSevice";

const UpdateForm = ({updateTrackingData}) => {
    // const initialObj = {
    //     "electricBill": 0,
    //     "gasBill": 0,
    //     "oilBill": 0,
    //     "carMileage": 0,
    //     "flightUnder": 0,
    //     "flightOver": 0,
    //     "recyclePaper": false,
    //     "recycleAluminium": false
    // }
    
    const {id} = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [carbonInfo, setCarbonInfo] = useState(null)
    const [formData, setFormData] = useState(null)
    //console.log(formData)
    // const initDate = `${carbonInfo.entries.monthsSubmition}`

    useEffect(() =>{
        getInfoFormDB()
    },[]) 
    useEffect(() =>{
        form.setFieldsValue(formData)
    },[formData]) 

  

    const getInfoFormDB = () =>{
        
        getOneTracker(id)
        .then(data=>{
            setCarbonInfo(data)
            setFormData(data.entries)
        })

        // .then(data =>{setFormData(data)} )
        // console.log(carbonInfo)
        // setFormData(carbonInfo.entries)
    }

    // if (!formData && !carbonInfo) {
    //     return
    // }
   
    const handleValuesChange = (changedValues, allValues) => {
        setFormData(allValues)

    };



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
            
            updateTrackingData(newData, carbonInfo)
        })
        navigate(`/display/${id}`)
        form.resetFields()

    }
    return (
        
        <Form  form={form} onFinish={handleSubmit} onValuesChange={handleValuesChange}>
            {/* <Form.Item name = "monthsSubmitions" label = "Choose The Month">
                <DatePicker picker="month" format="YYYY-MM"/>
            </Form.Item> */}
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
