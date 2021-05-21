import Col from "containers/Col"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { Place, Quote } from "types/skyscanner"

type FlightRouteProps = {
  item: Quote
  type: "origin" | "destination"
}

const FlightRoute = ({ item, type }: FlightRouteProps) => {
  const { places } = useResults()

  const [route, setRoute] = useState<Place | undefined>(undefined)

  useEffect(() => {
    if (!places) return

    if (type === "origin") {
      const origin = places.find(p => p.PlaceId === item.OutboundLeg.OriginId)
      setRoute(origin)
    }

    if (type === "destination") {
      const destination = places.find(
        p => p.PlaceId === item.OutboundLeg.DestinationId
      )
      setRoute(destination)
    }
  }, [places, type, setRoute, item.OutboundLeg])

  if (!route) return null

  return (
    <Col w="4/12">
      <p className="text-4xl">{route.IataCode}</p>
      <p>{route.Name}</p>
    </Col>
  )
}

export default FlightRoute
