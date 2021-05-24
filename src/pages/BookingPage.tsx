import BookingForm from "components/form/booking/BookingForm"
import FlightDetails from "components/form/booking/FlightDetails"
import { LocalStorageKey } from "defaults/web"
import { times } from "lodash"
import { Fragment, useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const BookingPage = () => {
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  useEffect(() => {
    localStorage.removeItem(LocalStorageKey.PASSENGERS)
  }, [])

  return (
    <Fragment>
      <FlightDetails data={data} />
      {times(data.passengers, idx => (
        <BookingForm key={idx} id={idx + 1} />
      ))}
    </Fragment>
  )
}

export default BookingPage
