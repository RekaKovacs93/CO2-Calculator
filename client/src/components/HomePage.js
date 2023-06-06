import EmissionsGrid from "../components/EmissionsGrid";
import EmissionsCard from "./EmissionsCard"
import { Link } from 'react-router-dom'



const HomePage = ({emission, removeEmission, EmissionValues}) => {

  const limitedEmissionValues = EmissionValues.slice(0, 3);

  return (
    <>
    <h1>Welcome</h1>
    <EmissionsGrid EmissionValues={limitedEmissionValues}/>
    <EmissionsCard EmissionValues={EmissionValues} emission={emission} removeEmission={removeEmission}/>
    <p>
      Welcome to Our Carbon Footprint Calculator! We believe that understanding and reducing our carbon footprint is essential for a sustainable future. By raising awareness and making informed choices, we can mitigate climate change, take individual accountability, conserve the environment, improve our health, and inspire others to join us. Calculate your carbon footprint today and be a part of the journey towards a greener world!
    </p>
    <Link to='/overview'>
      <button>See more information</button>
    </Link>
    </>
  )
}

export default HomePage