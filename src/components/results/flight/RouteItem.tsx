import clsx from "clsx"
import Button from "components/common/Button"
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
      className={clsx(
        "flex flex-wrap items-center justify-between p-4 m-6 text-blue-900",
        "border border-green-200 shadow rounded-3xl bg-green-50"
      )}
    >
      <Col className="w-full sm:w-4/12">
        <FlightRoute route={origin} />
      </Col>
      <Col className="w-full my-4 sm:w-2/12 sm:my-0">
        <FlightCarrier item={item} carrier={carrier} />
      </Col>
      <Col className="w-full sm:w-4/12">
        <FlightRoute route={destination} />
      </Col>
      <Col className="w-full mt-4 sm:mt-0 sm:w-2/12">
        <FlightPrice item={item} currency={currency} />
        <Link
          tabIndex={-1}
          to={{ pathname: BifrostRoute.BOOKING, state: { flight: flightData } }}
        >
          <Button
            text="Book Now"
            className="w-full h-10 mt-4 whitespace-nowrap sm:mt-0 sm:text-xs md:text-sm md:mt-2"
          />
        </Link>
      </Col>
    </div>
  )
}

export default RouteItem
