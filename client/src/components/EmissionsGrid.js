import EmissionsCard from "./EmissionsCard"
const EmissionsGrid = ({emissions})=> {

    const allEmissions = emissions.map((emission)=>{
     return <EmissionsCard key={emission._id} EmissionValues={emission.emissions} TotalEmission= {emission.totalEmissions} />
    })

    return (
        <>
        <h2>List of all emissions</h2>
            {allEmissions}
        </>
    )
}

export default EmissionsGrid;