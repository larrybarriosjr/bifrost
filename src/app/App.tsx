import { useState } from "react"
import Logo from "components/Logo"
import PlaceDropdown from "components/PlaceDropdown"
import { useCountryCode } from "hooks/useCountryCode"
import SingleDatePicker from "components/SingleDatePicker"

function App() {
  const country = useCountryCode()
  const [origin, setOrigin] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [outwardDate, setOutwardDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

  if (!country) return null

  return (
    <div className="flex flex-col items-center h-screen bg-blue-400">
      <Logo className="h-10" />
      <main className="flex flex-col items-center h-5/6 bg-green-200 w-8/12 rounded-3xl">
        <section className="h-60 bg-gray-50 w-11/12 rounded-3xl my-8">
          <div className="flex m-6 gap-20">
            <PlaceDropdown
              placeholder="Select Origin..."
              setValue={setOrigin}
              className="w-full"
            />
            <PlaceDropdown
              placeholder="Select Destination..."
              setValue={setDestination}
              className="w-full"
            />
          </div>
          <div className="flex m-6 gap-20">
            <SingleDatePicker
              placeholder="Departure Date"
              date={outwardDate}
              setDate={setOutwardDate}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
