import BookingForm from "components/form/booking/BookingForm"
import FlightDate from "components/form/booking/FlightDate"
import FlightDetails from "components/form/booking/FlightDetails"
import Row from "containers/Row"
import Section from "containers/Section"
import { usePassengers } from "hooks/usePassengers"
import { times } from "lodash"
import { Fragment } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const BookingPage = () => {
  const passengers = usePassengers()
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  return (
    <Fragment>
      <Section>
        <Row>
          <FlightDate
            departureDate={new Date(data.item.OutboundLeg.DepartureDate)}
            returnDate={
              data.item.InboundLeg
                ? new Date(data.item.InboundLeg.DepartureDate)
                : undefined
            }
          />
        </Row>
        <FlightDetails data={data} />
      </Section>
      {times(passengers, idx => (
        <BookingForm key={idx} id={idx + 1} />
      ))}
    </Fragment>
  )
}

export default BookingPage
