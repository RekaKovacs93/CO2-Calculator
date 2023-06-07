import { useState } from "react"
import { deleteTracker } from "../service/TrackerSevice"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch} from 'antd';
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./chart_component";
import {useNavigate, Link} from 'react-router-dom'


const EmissionsCard = ({emission, removeEmission, EmissionValues, TotalEmission, id})=> { 
  const navigate = useNavigate()

    if (!emission) {
        return
    }


    const handleDelete = () => {
        deleteTracker(emission._id).then(()=>{
            removeEmission(emission._id)
        })
    }
    const handleClick = () => {
      navigate(`/update/${id}`)
    }

    return (
        
        <Card
        style={{
        width: 300,
        marginTop: 16,
        }}
        actions={
        [<EditOutlined key="edit" onClick={handleClick} />]
        }>
            <Link to={`/display/${id}`} style={{textDecoration: 'none'}}>
                <h3>{emission.date.month}  {emission.date.year}</h3>
                <DoughnutChart EmissionValues={EmissionValues}  TotalEmission = {TotalEmission}/>
            </Link>
            
            {/* <button onClick={handleDelete} value={emission._id}>Delete Emission</button> */}
        </Card>
            
       
    )
}

export default EmissionsCard