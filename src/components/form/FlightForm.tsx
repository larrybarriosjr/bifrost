import CurrencyDropdown from "components/form/CurrencyDropdown"
import FlightTypeRadio from "components/form/FlightTypeRadio"
import PassengerInput from "components/form/PassengerInput"
import PlaceDropdown from "components/form/PlaceDropdown"
import RangeDatePicker from "components/form/RangeDatePicker"
import SearchButton from "components/form/SearchButton"
import SingleDatePicker from "components/form/SingleDatePicker"
import Row from "containers/Row"
import Section from "containers/Section"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { useLocalStorage } from "hooks/useLocalStorage"
import { usePassengers } from "hooks/usePassengers"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getRoutes } from "services/skyscanner"

const FlightForm = () => {
  const country = useCountryCode()
  const currency = useCurrencyCode()
  const passengers = usePassengers()

  const [origin, setOrigin] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [flightType, setFlightType] = useLocalStorage<string>("flight_type", "")
  const [flightDate, setFlightDate] = useState<string>("")
  const [outwardDate, setOutwardDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")
  const { setResults, setLoading } = useResults()

  const { data, refetch, isFetching } = useQuery(
    "routes",
    () =>
      getRoutes({
        origin,
        destination,
        outward_date: flightDate || outwardDate,
        return_date: returnDate,
        country,
        currency
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
    if (!searchButtonDisabled) refetch()
  }

  useEffect(() => {
    if (data) setResults(data)
  }, [data, setResults])

  useEffect(() => {
    setLoading(isFetching)
  }, [isFetching, setLoading])

  return (
    <Section>
      <Row>
        <PlaceDropdown placeholder="Select Origin..." setValue={setOrigin} />
        <PlaceDropdown
          placeholder="Select Destination..."
          setValue={setDestination}
        />
      </Row>
      <Row>
        <FlightTypeRadio type={flightType} setType={setFlightType} />
        <CurrencyDropdown />
        <PassengerInput />
      </Row>
      <Row>
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
      </Row>
    </Section>
  )
}

export default FlightForm
