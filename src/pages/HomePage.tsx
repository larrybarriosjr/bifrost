import FlightForm from "components/form/search/FlightForm"
import FlightResults from "components/results/flight/FlightResults"
import { Fragment } from "react"

const HomePage = () => {
  return (
    <Fragment>
      <FlightForm />
      <FlightResults />
    </Fragment>
  )
}

export default HomePage
