import FlightForm from "components/form/flight/FlightForm"
import FlightResults from "components/results/FlightResults"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <FlightForm />
      <FlightResults />
    </Fragment>
  )
}

export default Home
