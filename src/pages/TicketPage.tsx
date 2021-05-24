import { useEffect } from "react"
import { useLocation } from "react-router"
import { ReactRouterState } from "types/app"

const TicketPage = () => {
  const location = useLocation<ReactRouterState>()
  const { booking } = location.state

  useEffect(() => {
    console.log(booking)
  }, [booking])

  return <div></div>
}

export default TicketPage
