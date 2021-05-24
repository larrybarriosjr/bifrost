import Logo from "components/Logo"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"
import BookingPage from "pages/BookingPage"
import HomePage from "pages/HomePage"
import TicketPage from "pages/TicketPage"
import { Route, Switch } from "react-router"

function App() {
  const country = useCountryCode()
  const passengers = usePassengers()
  const [currency] = useCurrencyCode()

  if (!country) return null
  if (!currency) return null
  if (!passengers) return null

  return (
    <div className="flex flex-col items-center h-full w-full min-h-screen bg-gray-100">
      <main className="flex flex-col items-center m-6 p-8 gap-6 bg-blue-200 w-screen max-w-screen-lg lg:rounded-3xl">
        <Logo className="h-10" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/booking" component={BookingPage} />
          <Route exact path="/ticket" component={TicketPage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
