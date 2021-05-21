import { FlightType } from "defaults/flight"
import { Fragment } from "react"
import { Carrier, Quote } from "types/skyscanner"

type FlightCarrierProps = {
  item: Quote
  carrier?: Carrier
}

const FlightCarrier = ({ item, carrier }: FlightCarrierProps) => {
  if (!carrier) return null

  return (
    <Fragment>
      <p className="text-xs">{"Thru".toUpperCase()}</p>
      <p className="text-lg font-bold">{carrier.Name}</p>
      <p className="text-xs">
        {item.InboundLeg
          ? FlightType.ROUND_TRIP.toUpperCase()
          : FlightType.ONE_WAY.toUpperCase()}
      </p>
    </Fragment>
  )
}

export default FlightCarrier
