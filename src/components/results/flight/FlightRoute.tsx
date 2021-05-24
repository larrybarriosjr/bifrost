import { Fragment } from "react"
import { Place } from "types/skyscanner"

type FlightRouteProps = {
  route?: Place
}

const FlightRoute = ({ route }: FlightRouteProps) => {
  if (!route) return null

  return (
    <Fragment>
      <p className="text-4xl">{route.IataCode}</p>
      <p>{route.Name}</p>
    </Fragment>
  )
}

export default FlightRoute
