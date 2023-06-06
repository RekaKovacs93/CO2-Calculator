import { Button, Result } from 'antd';
import {useNavigate , useParams} from 'react-router-dom'

const SuccessfulSubmition = (() =>{
    const  navigate  =  useNavigate();
    const {id} = useParams ()
    const subTitleString = `Submition ID: ${id} Cloud server configuration takes 1-5 minutes, please wait.`

    const handleOnClick= (event)=>{
        console.log(event)
        if(event.target.outerText === "Go Home"){
            navigate("/")
        }else{
            navigate('/submit-form')
        }
    }

    return (
        <Result
            status="success"
            title="Successfully Submited Your Meters"
            subTitle= {subTitleString}
            extra={[
            <Button type="primary" key="console" onClick={handleOnClick} name='home'>
                Go Home
            </Button>,
            <Button key="buy" onClick={handleOnClick}>Submit New Meters</Button>,
            ]}
        />
    )
});

export default SuccessfulSubmition;