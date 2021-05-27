import Logo from "components/Logo"
import { BifrostRoute } from "defaults/route"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"
import { useReferenceCode } from "hooks/useReferenceCode"
import BookingPage from "pages/BookingPage"
import HomePage from "pages/HomePage"
import TicketPage from "pages/TicketPage"
import { Route, Switch } from "react-router"

function App() {
  const country = useCountryCode()
  const passengers = usePassengers()
  const [currency] = useCurrencyCode()
  const reference = useReferenceCode()

  if (!country) return null
  if (!currency) return null
  if (!passengers) return null
  if (!reference) return null

  return (
    <div
      className="flex flex-col items-center bg-gray-100
        h-full w-full min-h-screen print:bg-blue-200"
    >
      <main
        className="flex flex-col items-center m-6 p-8 gap-6 bg-blue-200
          w-screen max-w-screen-lg lg:rounded-3xl print:pt-0"
      >
        <Logo className="h-10" />
        <Switch>
          <Route exact path={BifrostRoute.HOME} component={HomePage} />
          <Route exact path={BifrostRoute.BOOKING} component={BookingPage} />
          <Route exact path={BifrostRoute.TICKET} component={TicketPage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
