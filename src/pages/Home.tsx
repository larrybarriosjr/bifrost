import FlightForm from "components/form/FlightForm"
import Logo from "components/Logo"
import FlightResults from "components/results/FlightResults"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <Logo className="h-10" />
      <FlightForm />
      <FlightResults />
    </Fragment>
  )
}

export default Home
