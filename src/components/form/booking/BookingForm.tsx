import Row from "containers/Row"
import Section from "containers/Section"
import { PlaceholderText } from "defaults/flight"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"
import BookingHeader from "./BookingHeader"
import FlightDate from "./FlightDate"
import FlightDetails from "./FlightDetails"

type BookingFormProps = {
  id: number
}

const BookingForm = ({ id }: BookingFormProps) => {
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  return (
    <Section>
      <Row>
        <BookingHeader number={id} />
      </Row>
      <FlightDetails data={data} />
      <Row>
        <FlightDate
          label={PlaceholderText.DEPARTURE}
          date={new Date(data.item.OutboundLeg.DepartureDate)}
        />
        {data.item.InboundLeg ? (
          <FlightDate
            label={PlaceholderText.RETURN}
            date={new Date(data.item.InboundLeg.DepartureDate)}
          />
        ) : null}
      </Row>
    </Section>
  )
}

export default BookingForm
