import FlightForm from "components/form/FlightForm"
import Logo from "components/Logo"
import FlightResults from "components/results/FlightResults"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"

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
        <FlightForm />
        <FlightResults />
      </main>
    </div>
  )
}

export default App
