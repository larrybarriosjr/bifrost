import FlightCarrier from "components/results/flight/FlightCarrier"
import FlightPrice from "components/results/flight/FlightPrice"
import FlightRoute from "components/results/flight/FlightRoute"
import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { format } from "date-fns"
import { DateFormat } from "defaults/flight"
import { FlightData } from "types/app"
import { isRoundTrip } from "utils/boolean"

type FlightDetailsProps = {
  data: FlightData
  ticket?: boolean
}

const FlightDetails = ({ data, ticket }: FlightDetailsProps) => {
  const { carrier, currency, destination, item, origin } = data

  const departureDate = new Date(data.item.OutboundLeg.DepartureDate)
  const returnDate = isRoundTrip(data.item)
    ? new Date(data.item.InboundLeg.DepartureDate)
    : undefined

  return (
    <Section>
      <Row>
        <p className="text-blue-900 font-bold">
          Flight Details
          {!ticket ? (
            <span className="font-normal">
              {" "}
              ({format(departureDate, DateFormat.DISPLAY)}
              {returnDate
                ? " to " + format(returnDate, DateFormat.DISPLAY)
                : ""}
              )
            </span>
          ) : null}
        </p>
      </Row>
      <div
        className="flex justify-between items-center p-4 m-6 rounded-3xl
          shadow border border-green-200 bg-green-50 text-blue-900"
      >
        {ticket ? (
          <Col w="3/12">
            <p>
              <span className="font-bold print:block">Departure: </span>
              {format(departureDate, DateFormat.DISPLAY)}
            </p>
            {returnDate ? (
              <p>
                <span className="font-bold mt-2 print:block">Return: </span>
                {format(returnDate, DateFormat.DISPLAY)}
              </p>
            ) : null}
          </Col>
        ) : null}
        <Col w="4/12">
          <FlightRoute route={origin} />
          {ticket ? (
            <p>
              {origin.CityName}, {origin.CountryName}
            </p>
          ) : null}
        </Col>
        <Col w="2/12">
          <FlightCarrier item={item} carrier={carrier} />
        </Col>
        <Col w="4/12">
          <FlightRoute route={destination} />
          {ticket ? (
            <p>
              {destination.CityName}, {destination.CountryName}
            </p>
          ) : null}
        </Col>
        {!ticket ? (
          <Col w="2/12">
            <FlightPrice item={item} currency={currency} booking />
          </Col>
        ) : null}
      </div>
    </Section>
  )
}

export default FlightDetails
