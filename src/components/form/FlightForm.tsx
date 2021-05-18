import CurrencyDropdown from "components/form/CurrencyDropdown"
import FlightTypeRadio from "components/form/FlightTypeRadio"
import PassengerInput from "components/form/PassengerInput"
import PlaceDropdown from "components/form/PlaceDropdown"
import RangeDatePicker from "components/form/RangeDatePicker"
import SearchButton from "components/form/SearchButton"
import SingleDatePicker from "components/form/SingleDatePicker"
import FormRow from "containers/FormRow"
import Section from "containers/Section"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { useLocalStorage } from "hooks/useLocalStorage"
import { usePassengers } from "hooks/usePassengers"
import { useRoutes } from "hooks/useRoutes"
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
  const { setRoutes, setLoading } = useRoutes()

  const { data, refetch, isLoading } = useQuery(
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
    if (data) setRoutes(data)
  }, [data, setRoutes])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading, setLoading])

  return (
    <Section>
      <FormRow>
        <PlaceDropdown placeholder="Select Origin..." setValue={setOrigin} />
        <PlaceDropdown
          placeholder="Select Destination..."
          setValue={setDestination}
        />
      </FormRow>
      <FormRow>
        <FlightTypeRadio type={flightType} setType={setFlightType} />
        <CurrencyDropdown />
        <PassengerInput />
      </FormRow>
      <FormRow>
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
      </FormRow>
    </Section>
  )
}

export default FlightForm
