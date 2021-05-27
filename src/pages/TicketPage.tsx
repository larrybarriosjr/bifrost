import FlightDetails from "components/form/booking/FlightDetails"
import PassengerDetails from "components/results/ticket/PassengerDetails"
import StatusHeader from "components/results/ticket/StatusHeader"
import { Fragment, useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const TicketPage = () => {
  const location = useLocation<ReactRouterState>()
  const { booking } = location.state
  const { reference, passengerData } = booking

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Fragment>
      <StatusHeader reference={reference} />
      <PassengerDetails passengers={passengerData} />
      <FlightDetails data={booking} ticket />
    </Fragment>
  )
}

export default TicketPage
