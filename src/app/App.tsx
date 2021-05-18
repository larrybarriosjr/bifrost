import FlightForm from "components/form/FlightForm"
import Logo from "components/Logo"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"

function App() {
  const country = useCountryCode()
  const currency = useCurrencyCode()
  const passengers = usePassengers()

  if (!country) return null
  if (!currency) return null
  if (!passengers) return null

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gray-100">
      <Logo className="h-10" />
      <main className="flex flex-col items-center h-5/6 py-20 bg-blue-200 w-screen max-w-screen-lg lg:rounded-3xl">
        <FlightForm />
      </main>
    </div>
  )
}

export default App
