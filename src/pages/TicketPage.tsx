import PassengerDetails from "components/results/ticket/PassengerDetails"
import StatusHeader from "components/results/ticket/StatusHeader"
import { Fragment, useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const TicketPage = () => {
  const location = useLocation<ReactRouterState>()
  const { reference, passengerData } = location.state.booking

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Fragment>
      <StatusHeader reference={reference} />
      <PassengerDetails passengers={passengerData} />
    </Fragment>
  )
}

export default TicketPage
