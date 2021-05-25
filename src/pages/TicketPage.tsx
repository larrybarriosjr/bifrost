import StatusHeader from "components/results/ticket/StatusHeader"
import { LocalStorageKey } from "defaults/web"
import { Fragment, useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const TicketPage = () => {
  const location = useLocation<ReactRouterState>()
  const { reference, passengerData } = location.state.booking

  useEffect(() => {
    localStorage.removeItem(LocalStorageKey.REFERENCE)
  }, [])

  return (
    <Fragment>
      <StatusHeader reference={reference} />
    </Fragment>
  )
}

export default TicketPage
