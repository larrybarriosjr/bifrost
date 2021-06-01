import { FlightType } from "defaults/flight"
import { Fragment } from "react"
import { Carrier, Quote } from "types/skyscanner"
import { isOneWay } from "utils/boolean"

type FlightCarrierProps = {
  item: Quote
  carrier?: Carrier
}

const FlightCarrier = ({ item, carrier }: FlightCarrierProps) => {
  if (!carrier) return null

  return (
    <Fragment>
      <p className="text-xs">{"Thru".toUpperCase()}</p>
      <p className="font-bold md:text-lg print:text-lg">{carrier.Name}</p>
      <p className="text-xs">
        {isOneWay(item)
          ? FlightType.ONE_WAY.toUpperCase()
          : FlightType.ROUND_TRIP.toUpperCase()}
      </p>
    </Fragment>
  )
}

export default FlightCarrier
