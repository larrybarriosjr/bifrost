import Col from "containers/Col"
import { FlightType } from "defaults/flight"
import { usePassengers } from "hooks/usePassengers"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { Carrier, Place, Quote } from "types/skyscanner"
import { monetize } from "utils/number"

type RouteItemProps = {
  item: Quote
}

const RouteItem = ({ item }: RouteItemProps) => {
  const passengers = usePassengers()
  const { carriers, currencies, places } = useResults()

  const [carrier, setCarrier] = useState<Carrier | undefined>(undefined)
  const [origin, setOrigin] = useState<Place | undefined>(undefined)
  const [destination, setDestination] = useState<Place | undefined>(undefined)

  useEffect(() => {
    console.log(item)
  }, [item])

  useEffect(() => {
    if (!carriers) return
    const c = carriers.find(c => c.CarrierId === item.OutboundLeg.CarrierIds[0])
    setCarrier(c)
  }, [carriers, setCarrier, item.OutboundLeg.CarrierIds])

  useEffect(() => {
    if (!places) return
    const o = places.find(p => p.PlaceId === item.OutboundLeg.OriginId)
    const d = places.find(p => p.PlaceId === item.OutboundLeg.DestinationId)
    setOrigin(o)
    setDestination(d)
  }, [places, setOrigin, setDestination, item.OutboundLeg])

  return (
    <div className="flex w-full justify-between items-center p-4 rounded-3xl border shadow border-green-200 bg-green-50 text-blue-900">
      <Col w="4/12">
        <p className="text-4xl">{origin?.IataCode}</p>
        <p>{origin?.Name}</p>
      </Col>
      <Col w="2/12">
        <p className="text-xs">{"Thru".toUpperCase()}</p>
        <p className="text-lg font-bold">{carrier?.Name}</p>
        <p className="text-xs">
          {item.InboundLeg.DepartureDate
            ? FlightType.ROUND_TRIP.toUpperCase()
            : FlightType.ONE_WAY.toUpperCase()}
        </p>
      </Col>
      <Col w="4/12">
        <p className="text-4xl">{destination?.IataCode}</p>
        <p>{destination?.Name}</p>
      </Col>
      <Col w="2/12">
        {passengers > 1 ? (
          <p className="mr-2 text-sm">
            {monetize(item.MinPrice, currencies[0])} × {passengers}
          </p>
        ) : null}
        <p className="font-bold text-2xl mb-2 mr-2 whitespace-nowrap">
          {monetize(item.MinPrice * passengers, currencies[0])}
        </p>
        <button
          type="button"
          className={`border-2 rounded-full h-10 mr-2 font-bold bg-blue-900 text-gray-50 border-blue-900 
            focus:outline-none focus:border-blue-500 hover:border-gray-400 text-sm`}
        >
          Book Now
        </button>
      </Col>
    </div>
  )
}

export default RouteItem
