import { useEffect, useState } from "react";
import { Collapse, Card, Space, List, Typography, AutoComplete } from "antd";
import { CheckCircleFilled, CloseCircleFilled, PlusCircleFilled } from '@ant-design/icons'

const Suggestions = ({carbonInfo}) => {

    const threshold = {
        electricBill: 7350,
        gasBill: 4725,
        oilBill: 8475,
        carMileage: 2370,
        flightUnder: 3300,
        flightOver: 8800,
        recyclePaper: 5,
        recycleAluminium: 5 

    };
    const emissionsUKAvg = 0
    
    const congratsSentence = {
        max: "You aren't doing proper job! Reducing CO2 mitigates the effects of global climate change, improves public health, boosts the global economy, and maintains biodiversity. There are some guidelines at the next card which can help you to reduce your CO2 emissions. Have a look.",
        aboveAVG: "YOU ARE ALMOST THERE!!!! You are about to reach the UK average. This means, you are doing well. At the next card you can find some tips. GOOD JOB",
        underAVG: "Congratulations for your hard work!  Your CO2 emissions are  less than the UK average, but you have to keep working hard. Recycling, eco-friendly transportation, mass transportation and renewable energy sources can further reduce your CO2 emissions. ",
        low: "OH MY GOD!!! I have never seen a person with that low emissions. YOUR KARMA IS CLEAN."
    }

    const recommendationsForEmisions = {
        electricBill: "Buy electric appliances with better energy efficiency and install solar panels",
        gasBill: "Solar panels and home insulation will reduce your gas consumption",
        oilBill: "You can replace oil with gas or other eco friendly energy source. Home insulation helps to reduce energy consumption, as well",
        carMileage: "You can cycle for short distance and use bus or train for the long once",
        flightUnder: "You can travel by bus or train  instead of airplain because the distance is't great.",
        flightOver: "For long distance travels airplain  is the best solution, but you can try avoid meanningless travels",
        recyclePaper: "You can start recycling paper.",
        recycleAluminium: "You can start recycling aluminiun and tin packages"
    }
    useEffect (() =>{
        highLowEmissions()
    },[])

    const [lowEmissions, setLowEmissions] = useState([])
    const [highEmissions, setHighEmissions] = useState([])

    const highLowEmissions = () =>{
        const highValues = Object.entries(carbonInfo.emissions).filter((emi) => {
            return parseInt(emi[1])  > threshold[emi[0]]
        })
        const lowValues = Object.entries(carbonInfo.emissions).filter((emi) => {
            return parseInt(emi[1])  <= threshold[emi[0]]
        })

        setHighEmissions(highValues.map((element) => element[0]))
        setLowEmissions(lowValues.map((element) => element[0]))

    }

    const lowEmissionsDisplay  = lowEmissions.map((name, index) => <List.Item key = {index} > <CheckCircleFilled style={{color: 'green'}}/> {name} </List.Item>) 
    const highEmissionsDisplay  = highEmissions.map((name, index) => <List.Item key = {index} > <CloseCircleFilled style={{color: 'red'}} /> {name} </List.Item>) 

    const highEmissionSolutions = highEmissions.map((name, index) => <List.Item key={index}> <PlusCircleFilled style={{color: 'red'}} /> {recommendationsForEmisions[name]} </List.Item>)
    const lowEmissionMsg = (carbonInfo.totalEmissions > emissionsUKAvg && lowEmissions.length<=2) ? congratsSentence.max : 
        (carbonInfo.totalEmissions > emissionsUKAvg && lowEmissions.length<=7)? congratsSentence.aboveAVG:
        (carbonInfo.totalEmissions <= emissionsUKAvg && lowEmissions.length<=7)? congratsSentence.underAVG : congratsSentence.low

    return (
        <Space>
            {/* <Collapse style={{width: 500, height: 'auto', backgroundColor: "rgb(75, 130, 83)"}}>
                <Collapse.Panel header= {<Card     title="Lower Than the  Average" bordered={false} style={{width: 300}}> <List> {lowEmissionsDisplay}</List> </Card>}>
                    <p>{lowEmissionMsg}</p>
                </Collapse.Panel>
            </Collapse> */}
            <Collapse style={{width: 385, height: 'auto', backgroundColor: "rgb(75, 130, 83)"}}>
                <Collapse.Panel header= {<Card     title="Higher Than the  Average" bordered={false} style={{width: 300}}><List>{highEmissionsDisplay}</List> </Card>}>
                    <List>
                        {highEmissionSolutions}
                    </List>  
                </Collapse.Panel>
            </Collapse>
        
        </Space>

    );
}

export default Suggestions