import EmissionsCard from "./EmissionsCard"
const EmissionsGrid = ({EmissionValues})=> {


    const allEmissions = EmissionValues.map((emission, index)=>{
     return <EmissionsCard key={emission._id} EmissionValues={emission.emissions} TotalEmission= {emission.totalEmissions} emission={emission} id={emission._id}/>
    })

    return (
        <div className="cards">
            {allEmissions}
        </div>
    )
}

export default EmissionsGrid;