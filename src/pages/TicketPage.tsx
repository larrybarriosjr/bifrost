import StatusHeader from "components/results/ticket/StatusHeader"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const TicketPage = () => {
  const location = useLocation<ReactRouterState>()
  const { booking } = location.state

  useEffect(() => {
    console.log(booking)
  }, [booking])

  return (
    <Fragment>
      <StatusHeader />
    </Fragment>
  )
}

export default TicketPage
