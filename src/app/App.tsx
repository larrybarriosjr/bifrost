import { useState } from "react"
import Logo from "components/Logo"
import PlaceDropdown from "components/PlaceDropdown"
import SingleDatePicker from "components/SingleDatePicker"
import RangeDatePicker from "components/RangeDatePicker"
import FlightTypeRadio from "components/FlightTypeRadio"
import CurrencyDropdown from "components/CurrencyDropdown"
import PassengerInput from "components/PassengerInput"
import { useLocalStorage } from "hooks/useLocalStorage"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"

function App() {
  const country = useCountryCode()
  const currency = useCurrencyCode()
  const passengers = usePassengers()

  const [origin, setOrigin] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [flightType, setFlightType] = useLocalStorage<string>("flight_type", "")
  const [flightDate, setFlightDate] = useState<string>("")
  const [outwardDate, setOutwardDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

  if (!country) return null
  if (!currency) return null
  if (!passengers) return null

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-blue-400">
      <Logo className="h-10" />
      <main className="flex flex-col items-center h-5/6 bg-green-200 w-screen max-w-screen-lg lg:rounded-3xl">
        <section className="bg-gray-50 w-max rounded-3xl my-8">
          <div className="flex m-6 gap-4">
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
          <div className="flex m-6 gap-4">
            <FlightTypeRadio type={flightType} setType={setFlightType} />
            <CurrencyDropdown />
            <PassengerInput />
          </div>
          <div className="flex m-6 gap-4">
            {flightType === "one-way" ? (
              <SingleDatePicker
                placeholder="Departure Date"
                date={flightDate}
                setDate={setFlightDate}
              />
            ) : (
              <RangeDatePicker
                from={outwardDate}
                to={returnDate}
                fromPlaceholder="Departure Date"
                toPlaceholder="Return Date"
                setFrom={setOutwardDate}
                setTo={setReturnDate}
              />
            )}
            <button
              type="button"
              className={`bg-blue-900 border-blue-900 border-2 rounded-full h-14 w-48 text-gray-50 font-bold ml-auto
            focus:outline-none hover:border-gray-400 focus:border-blue-500`}
            >
              Search
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
