import BookingForm from "components/form/booking/BookingForm"
import { usePassengers } from "hooks/usePassengers"
import { times } from "lodash"
import { Fragment } from "react"

const BookingPage = () => {
  const passengers = usePassengers()

  return (
    <Fragment>
      {times(passengers, idx => (
        <BookingForm key={idx} id={idx + 1} />
      ))}
    </Fragment>
  )
}

export default BookingPage
