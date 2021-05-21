import FlightCarrier from "components/results/FlightCarrier"
import FlightPrice from "components/results/FlightPrice"
import FlightRoute from "components/results/FlightRoute"
import Col from "containers/Col"
import { FlightData } from "types/app"

type FlightDetailsProps = {
  data: FlightData
}

const FlightDetails = ({ data }: FlightDetailsProps) => {
  const { carrier, currency, destination, item, origin } = data

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
        <FlightPrice item={item} currency={currency} booking />
      </Col>
    </div>
  )
}

export default FlightDetails
