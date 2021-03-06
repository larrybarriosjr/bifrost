import clsx from "clsx"
import Logo from "components/common/Logo"
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
    <div className="flex flex-col items-center w-full h-full min-h-screen bg-blue-200 xl:bg-gray-100">
      <main
        className={clsx(
          "flex flex-col items-center w-full max-w-screen-lg gap-6 p-8 bg-blue-200",
          "xl:m-6 xl:rounded-3xl print:pt-0 print:m-6"
        )}
      >
        <Logo />
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
