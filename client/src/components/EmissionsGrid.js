import EmissionsCard from "./EmissionsCard"
const EmissionsGrid = ({EmissionValues})=> {
    console.log(EmissionValues)
    const allEmissions = EmissionValues.map((emission, index)=>{
     return <EmissionsCard key={emission._id} EmissionValues={emission.emissions} TotalEmission= {emission.totalEmissions} emission={emission}/>
    })

    return (
        <>
        
            {allEmissions}
        </>
    )
}

export default EmissionsGrid;