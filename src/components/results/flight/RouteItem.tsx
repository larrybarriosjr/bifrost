import Button from "components/Button"
import Col from "containers/Col"
import { BifrostRoute } from "defaults/route"
import { usePassengers } from "hooks/usePassengers"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FlightData } from "types/app"
import { Carrier, Currency, Place, Quote } from "types/skyscanner"
import FlightCarrier from "./FlightCarrier"
import FlightPrice from "./FlightPrice"
import FlightRoute from "./FlightRoute"

type RouteItemProps = {
  item: Quote
}

const RouteItem = ({ item }: RouteItemProps) => {
  const { data } = useResults()
  const passengers = usePassengers()

  const [carrier, setCarrier] = useState<Carrier | undefined>(undefined)
  const [currency, setCurrency] = useState<Currency | undefined>(undefined)
  const [origin, setOrigin] = useState<Place | undefined>(undefined)
  const [destination, setDestination] = useState<Place | undefined>(undefined)
  const [flightData, setFlightData] =
    useState<FlightData | undefined>(undefined)

  useEffect(() => {
    if (!data?.Carriers) return
    const c = data?.Carriers.find(
      c => c.CarrierId === item.OutboundLeg.CarrierIds[0]
    )
    setCarrier(c)
  }, [data?.Carriers, setCarrier, item.OutboundLeg.CarrierIds])

  useEffect(() => {
    if (!data?.Currencies) return
    const c = data?.Currencies[0]
    setCurrency(c)
  }, [data?.Currencies, setCurrency, item.OutboundLeg.CarrierIds])

  useEffect(() => {
    if (!data?.Places) return
    const o = data?.Places.find(p => p.PlaceId === item.OutboundLeg.OriginId)
    const d = data?.Places.find(
      p => p.PlaceId === item.OutboundLeg.DestinationId
    )
    setOrigin(o)
    setDestination(d)
  }, [data?.Places, setOrigin, setDestination, item.OutboundLeg])

  useEffect(() => {
    if (!item || !carrier || !currency || !origin || !destination) return
    setFlightData({ item, carrier, currency, origin, destination, passengers })
  }, [item, carrier, currency, origin, destination, passengers])

  return (
    <div
      className="flex justify-between items-center p-4 m-6 rounded-3xl
        shadow border border-green-200 bg-green-50 text-blue-900"
    >
      <Col className="w-4/12">
        <FlightRoute route={origin} />
      </Col>
      <Col className="w-2/12">
        <FlightCarrier item={item} carrier={carrier} />
      </Col>
      <Col className="w-4/12">
        <FlightRoute route={destination} />
      </Col>
      <Col className="w-2/12">
        <FlightPrice item={item} currency={currency} />
        <Link
          tabIndex={-1}
          to={{ pathname: BifrostRoute.BOOKING, state: { flight: flightData } }}
        >
          <Button text="Book Now" className="h-10 w-full" />
        </Link>
      </Col>
    </div>
  )
}

export default RouteItem
