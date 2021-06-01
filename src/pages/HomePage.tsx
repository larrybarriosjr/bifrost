import FlightForm from "components/form/search/FlightForm"
import FlightResults from "components/results/flight/FlightResults"
import { Fragment } from "react"

const HomePage = () => {
  return (
    <Fragment>
      <p className="text-xs italic font-bold text-blue-900 uppercase">
        (For testing purposes only)
      </p>
      <FlightForm />
      <FlightResults />
    </Fragment>
  )
}

export default HomePage
