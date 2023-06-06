import EmissionsGrid from "../components/EmissionsGrid";
import EmissionsCard from "./EmissionsCard"


const HomePage = ({emission, removeEmission, EmissionValues}) => {


  return (
    <>
    <h1>Welcome User</h1>
    <EmissionsGrid EmissionValues={EmissionValues}/>
    <EmissionsCard EmissionValues={EmissionValues} emission={emission} removeEmission={removeEmission}/>

    </>
  )
}

export default HomePage