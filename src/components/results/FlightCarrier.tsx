import Col from "containers/Col"
import { FlightType } from "defaults/flight"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { Carrier, Quote } from "types/skyscanner"

type FlightCarrierProps = {
  item: Quote
}

const FlightCarrier = ({ item }: FlightCarrierProps) => {
  const { carriers } = useResults()

  const [carrier, setCarrier] = useState<Carrier | undefined>(undefined)

  useEffect(() => {
    if (!carriers) return
    const c = carriers.find(c => c.CarrierId === item.OutboundLeg.CarrierIds[0])
    setCarrier(c)
  }, [carriers, setCarrier, item.OutboundLeg.CarrierIds])

  return (
    <Col w="2/12">
      <p className="text-xs">{"Thru".toUpperCase()}</p>
      <p className="text-lg font-bold">{carrier?.Name}</p>
      <p className="text-xs">
        {item.InboundLeg
          ? FlightType.ROUND_TRIP.toUpperCase()
          : FlightType.ONE_WAY.toUpperCase()}
      </p>
    </Col>
  )
}

export default FlightCarrier
