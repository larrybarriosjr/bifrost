import { useState } from "react"
import Logo from "components/Logo"
import PlaceDropdown from "components/PlaceDropdown"
import { useCountryCode } from "hooks/useCountryCode"
import SingleDatePicker from "components/SingleDatePicker"
import RangeDatePicker from "components/RangeDatePicker"
import RadioGroup from "components/RadioGroup"
import NumberInput from "components/NumberInput"
import CurrencyDropdown from "components/CurrencyDropdown"

function App() {
  const country = useCountryCode()
  const [origin, setOrigin] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [passengers, setPassengers] = useState(1)
  const [flightType, setFlightType] = useState<string>("one-way")
  const [flightDate, setFlightDate] = useState<string>("")
  const [outwardDate, setOutwardDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

  if (!country) return null

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-blue-400">
      <Logo className="h-10" />
      <main className="flex flex-col items-center h-5/6 bg-green-200 w-screen max-w-screen-lg rounded-3xl">
        <section className="h-72 bg-gray-50 w-max rounded-3xl my-8">
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
            <NumberInput
              value={passengers}
              setValue={setPassengers}
              label="Passenger/s"
            />
          </div>
          <div className="flex m-6 gap-4">
            <RadioGroup
              name="flight_type"
              items={[
                { value: "one-way", label: "One-Way" },
                { value: "round-trip", label: "Round Trip" }
              ]}
              selected={flightType}
              setSelected={setFlightType}
            />
            {flightType === "one-way" ? (
              <>
                <SingleDatePicker
                  placeholder="Departure Date"
                  date={flightDate}
                  setDate={setFlightDate}
                />
                <div className="w-72" />
              </>
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
          </div>
          <div className="flex flex-row m-6 justify-between">
            <CurrencyDropdown />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
