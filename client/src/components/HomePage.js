import EmissionsGrid from "../components/EmissionsGrid";
import EmissionsCard from "./EmissionsCard"
import { Link } from 'react-router-dom'



const HomePage = ({emission, removeEmission, EmissionValues}) => {

  const limitedEmissionValues = EmissionValues.slice(0, 3);

  return (
    <>
    <div className="hero">
    <h1>Welcome to Our CO2 Calculator</h1>
    <p>
      We believe that understanding and reducing our carbon footprint is essential for a sustainable future. By raising awareness and making informed choices, we can mitigate climate change, take individual accountability, conserve the environment, improve our health, and inspire others to join us. Calculate your carbon footprint today and be a part of the journey towards a greener world!
    </p>
    </div>
    <div>
    <h2 className="recents">Most Recent</h2>
    <EmissionsGrid EmissionValues={limitedEmissionValues}/>
    <EmissionsCard EmissionValues={EmissionValues} emission={emission} removeEmission={removeEmission}/>
    </div>
    <Link to='/overview'>
      <button>See more information</button>
    </Link>
    </>
  )
}

export default HomePage