import Col from "containers/Col"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { FlightData } from "types/app"
import { Carrier, Currency, Place, Quote } from "types/skyscanner"
import BookNowButton from "./BookNowButton"
import FlightCarrier from "./FlightCarrier"
import FlightPrice from "./FlightPrice"
import FlightRoute from "./FlightRoute"

type RouteItemProps = {
  item: Quote
}

const RouteItem = ({ item }: RouteItemProps) => {
  const { carriers, currencies, places } = useResults()

  const [carrier, setCarrier] = useState<Carrier | undefined>(undefined)
  const [currency, setCurrency] = useState<Currency | undefined>(undefined)
  const [origin, setOrigin] = useState<Place | undefined>(undefined)
  const [destination, setDestination] = useState<Place | undefined>(undefined)
  const [flightData, setFlightData] =
    useState<FlightData | undefined>(undefined)

  useEffect(() => {
    if (!carriers) return
    const c = carriers.find(c => c.CarrierId === item.OutboundLeg.CarrierIds[0])
    setCarrier(c)
  }, [carriers, setCarrier, item.OutboundLeg.CarrierIds])

  useEffect(() => {
    if (!currencies) return
    const c = currencies[0]
    setCurrency(c)
  }, [currencies, setCurrency, item.OutboundLeg.CarrierIds])

  useEffect(() => {
    if (!places) return
    const o = places.find(p => p.PlaceId === item.OutboundLeg.OriginId)
    const d = places.find(p => p.PlaceId === item.OutboundLeg.DestinationId)
    setOrigin(o)
    setDestination(d)
  }, [places, setOrigin, setDestination, item.OutboundLeg])

  useEffect(() => {
    if (!item || !carrier || !currency || !origin || !destination) return
    setFlightData({ item, carrier, currency, origin, destination })
  }, [item, carrier, currency, origin, destination])

  return (
    <div
      className={`flex justify-between items-center p-4 m-6 rounded-3xl
            shadow border border-green-200 bg-green-50 text-blue-900`}
    >
      <Col w="4/12">
        <FlightRoute route={origin} />
      </Col>
      <Col w="2/12">
        <FlightCarrier item={item} carrier={carrier} />
      </Col>
      <Col w="4/12">
        <FlightRoute route={destination} />
      </Col>
      <Col w="2/12">
        <FlightPrice item={item} currency={currency} />
        <BookNowButton data={flightData} />
      </Col>
    </div>
  )
}

export default RouteItem
