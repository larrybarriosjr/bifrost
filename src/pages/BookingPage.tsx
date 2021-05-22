import BookingForm from "components/form/booking/BookingForm"
import FlightDate from "components/form/booking/FlightDate"
import FlightDetails from "components/form/booking/FlightDetails"
import Row from "containers/Row"
import Section from "containers/Section"
import { LocalStorageKey } from "defaults/web"
import { times } from "lodash"
import { Fragment, useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"
import { isRoundTrip } from "utils/boolean"

const BookingPage = () => {
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  useEffect(() => {
    localStorage.removeItem(LocalStorageKey.PASSENGERS)
  }, [])

  return (
    <Fragment>
      <Section>
        <Row>
          <FlightDate
            departureDate={new Date(data.item.OutboundLeg.DepartureDate)}
            returnDate={
              isRoundTrip(data.item)
                ? new Date(data.item.InboundLeg.DepartureDate)
                : undefined
            }
          />
        </Row>
        <FlightDetails data={data} />
      </Section>
      {times(data.passengers, idx => (
        <BookingForm key={idx} id={idx + 1} />
      ))}
    </Fragment>
  )
}

export default BookingPage
