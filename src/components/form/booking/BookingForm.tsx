import Row from "containers/Row"
import Section from "containers/Section"
import { usePassengers } from "hooks/usePassengers"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"
import { monetize } from "utils/number"

const BookingForm = () => {
  const passengers = usePassengers()
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  return (
    <Section>
      <Row>Booking Forms</Row>
      <Row>Passengers: {passengers}</Row>
      <Row>Airline: {data.carrier.Name}</Row>
      <Row>Currency: {data.currency.Code}</Row>
      <Row>Origin: {data.origin.Name}</Row>
      <Row>
        Price: {monetize(data.item.MinPrice * passengers, data.currency)}
      </Row>
      <Row>Destination: {data.destination.Name}</Row>
    </Section>
  )
}

export default BookingForm
