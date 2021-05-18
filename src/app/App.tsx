import CurrencyDropdown from "components/CurrencyDropdown"
import FlightTypeRadio from "components/FlightTypeRadio"
import Logo from "components/Logo"
import PassengerInput from "components/PassengerInput"
import PlaceDropdown from "components/PlaceDropdown"
import RangeDatePicker from "components/RangeDatePicker"
import SearchButton from "components/SearchButton"
import SingleDatePicker from "components/SingleDatePicker"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { useLocalStorage } from "hooks/useLocalStorage"
import { usePassengers } from "hooks/usePassengers"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getRoutes } from "services/skyscanner"

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

  const { data: flights, refetch: fetchFlights } = useQuery(
    "flights",
    () =>
      getRoutes({
        origin,
        destination,
        outward_date: flightDate || outwardDate,
        return_date: returnDate
      }),
    { enabled: false }
  )

  const commonInputsDisabled =
    !country || !currency || !passengers || !origin || !destination
  const oneWayDisabled = commonInputsDisabled || !flightDate
  const roundTripDisabled = commonInputsDisabled || !outwardDate || !returnDate
  const searchButtonDisabled =
    flightType === "one-way" ? oneWayDisabled : roundTripDisabled

  const handleFlightSearch = () => {
    if (!searchButtonDisabled) fetchFlights()
  }

  useEffect(() => {
    console.log(flights)
  }, [flights])

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
            />
            <PlaceDropdown
              placeholder="Select Destination..."
              setValue={setDestination}
            />
          </div>
          <div className="flex m-6 gap-4">
            <FlightTypeRadio type={flightType} setType={setFlightType} />
            <CurrencyDropdown />
            <PassengerInput />
          </div>
          <div className="flex m-6 gap-4">
            {flightType === "one-way" ? (
              <SingleDatePicker date={flightDate} setDate={setFlightDate} />
            ) : (
              <RangeDatePicker
                from={outwardDate}
                to={returnDate}
                setFrom={setOutwardDate}
                setTo={setReturnDate}
              />
            )}
            <SearchButton
              disabled={searchButtonDisabled}
              onClick={handleFlightSearch}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
