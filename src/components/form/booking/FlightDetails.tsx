import clsx from "clsx"
import FlightCarrier from "components/results/flight/FlightCarrier"
import FlightPrice from "components/results/flight/FlightPrice"
import FlightRoute from "components/results/flight/FlightRoute"
import SectionTitle from "components/SectionTitle"
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
        <SectionTitle
          text="Flight Details"
          subtext={
            !ticket
              ? `${format(departureDate, DateFormat.DISPLAY)}
                ${
                  returnDate
                    ? " to " + format(returnDate, DateFormat.DISPLAY)
                    : ""
                }`
              : undefined
          }
        />
      </Row>
      <div
        className={clsx(
          "flex flex-wrap items-center justify-between p-4 m-6 text-blue-900",
          "border border-green-200 shadow rounded-3xl bg-green-50"
        )}
      >
        {ticket ? (
          <Col className="w-full sm:w-3/12">
            <p>
              <span className="font-bold print:block">Departure: </span>
              {format(departureDate, DateFormat.DISPLAY)}
            </p>
            {returnDate ? (
              <p>
                <span className="mt-2 font-bold print:block">Return: </span>
                {format(returnDate, DateFormat.DISPLAY)}
              </p>
            ) : null}
          </Col>
        ) : null}
        <Col className="w-full sm:w-4/12">
          <FlightRoute route={origin} />
          {ticket ? (
            <p>
              {origin.CityName}, {origin.CountryName}
            </p>
          ) : null}
        </Col>
        <Col className="w-full my-4 sm:w-2/12 sm:my-0">
          <FlightCarrier item={item} carrier={carrier} />
        </Col>
        <Col className="w-full sm:w-4/12">
          <FlightRoute route={destination} />
          {ticket ? (
            <p>
              {destination.CityName}, {destination.CountryName}
            </p>
          ) : null}
        </Col>
        {!ticket ? (
          <Col className="w-full mt-4 sm:w-2/12 sm:mt-0">
            <FlightPrice item={item} currency={currency} booking />
          </Col>
        ) : null}
      </div>
    </Section>
  )
}

export default FlightDetails
