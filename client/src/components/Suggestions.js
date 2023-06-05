import { useEffect, useState } from "react";
import { Collapse, Card, Space, List, Typography } from "antd";
import { CheckCircleFilled, CloseCircleFilled, PlusCircleFilled } from '@ant-design/icons'

const Suggestions = ({carbonTrackerCollection}) => {

    const threshold = {
        electricBill: 0,
        gasBill: 0,
        oilBill: 0,
        carMileage: 0,
        flightUnder: 0,
        flightOver: 0,
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
        const highValues = Object.entries(carbonTrackerCollection.emissions).filter((emi) => {
            return parseInt(emi[1])  > threshold[emi[0]]
        })
        const lowValues = Object.entries(carbonTrackerCollection.emissions).filter((emi) => {
            return parseInt(emi[1])  <= threshold[emi[0]]
        })

        setHighEmissions(highValues.map((element) => element[0]))
        setLowEmissions(lowValues.map((element) => element[0]))
        // console.log(hihgValues)
        // Object.entries(carbonTrackerCollection.emissions).forEach((key) => {
        //     console.log(key)
        //     console.log(hihgValues.includes(key))
        //     if(hihgValues){
        //         highEmissions.push(key[0])
        //     }else{
        //         lowEmissions.push(key[0])
        //     }
        // })

    }

    const lowEmissionsDisplay  = lowEmissions.map((name, index) => <List.Item key = {index} > <CheckCircleFilled style={{color: 'green'}}/> {name} </List.Item>) 
    const highEmissionsDisplay  = highEmissions.map((name, index) => <List.Item key = {index} > <CloseCircleFilled style={{color: 'red'}} /> {name} </List.Item>) 

    const highEmissionSolutions = highEmissions.map((name, index) => <List.Item key={index}> <PlusCircleFilled style={{color: 'red'}} /> {recommendationsForEmisions[name]} </List.Item>)
    const lowEmissionMsg = (carbonTrackerCollection.totalEmissions > emissionsUKAvg && lowEmissions.length<=2) ? congratsSentence.max : 
        (carbonTrackerCollection.totalEmissions > emissionsUKAvg && lowEmissions.length<=7)? congratsSentence.aboveAVG:
        (carbonTrackerCollection.totalEmissions <= emissionsUKAvg && lowEmissions.length<=7)? congratsSentence.underAVG : congratsSentence.low

    return (
        <Space>
            
            <Collapse style={{ height: '100%', backgroundColor: 'green'}}>
                <Collapse.Panel header= {<Card     title="Lower Than the  Average" bordered={false} style={{width: 300, height: 300}}> <List> {lowEmissionsDisplay}</List> </Card>}>
                    <p>{lowEmissionMsg}</p>
                </Collapse.Panel>
            </Collapse>
            <Collapse style={{ backgroundColor: 'red'}}>
                <Collapse.Panel header= {<Card     title="Higher Than the  Average" bordered={false} style={{width: 300, height: 300}}><List>{highEmissionsDisplay}</List> </Card>}>
                    <List>
                        {highEmissionSolutions}
                    </List>  
                </Collapse.Panel>
            </Collapse>
        
        </Space>

    );
}

export default Suggestions