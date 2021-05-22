import CurrencyDropdown from "components/form/flight/CurrencyDropdown"
import FlightTypeRadio from "components/form/flight/FlightTypeRadio"
import PassengerInput from "components/form/flight/PassengerInput"
import PlaceDropdown from "components/form/flight/PlaceDropdown"
import RangeDatePicker from "components/form/flight/RangeDatePicker"
import SearchButton from "components/form/flight/SearchButton"
import SingleDatePicker from "components/form/flight/SingleDatePicker"
import Row from "containers/Row"
import Section from "containers/Section"
import { FlightType, InitialFlightData, PlaceholderText } from "defaults/flight"
import { useCountryCode } from "hooks/useCountryCode"
import { useCurrencyCode } from "hooks/useCurrencyCode"
import { usePassengers } from "hooks/usePassengers"
import { useResults } from "hooks/useResults"
import { useEffect, useState } from "react"
import { GetResultsForm } from "types/skyscanner"

const FlightForm = () => {
  const country = useCountryCode()
  const passengers = usePassengers()
  const [currency, setCurrency] = useCurrencyCode()

  const [origin, setOrigin] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [flightType, setFlightType] = useState<FlightType>(
    InitialFlightData.FLIGHT_TYPE
  )
  const [flightDate, setFlightDate] = useState<string>("")
  const [outwardDate, setOutwardDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

  const form: GetResultsForm = {
    origin,
    destination,
    outward_date: flightDate || outwardDate,
    return_date: returnDate,
    country,
    currency
  }

  const { refetch } = useResults(form)

  const commonInputsDisabled =
    !country || !currency || !passengers || !origin || !destination
  const oneWayDisabled = commonInputsDisabled || !flightDate
  const roundTripDisabled = commonInputsDisabled || !outwardDate || !returnDate
  const searchButtonDisabled =
    flightType === FlightType.ONE_WAY ? oneWayDisabled : roundTripDisabled

  const handleFlightSearch = () => {
    if (!searchButtonDisabled) refetch()
  }

  useEffect(() => {
    setOutwardDate("")
    setReturnDate("")
  }, [flightType])

  return (
    <Section>
      <Row>
        <PlaceDropdown
          placeholder={PlaceholderText.ORIGIN}
          setValue={setOrigin}
        />
        <PlaceDropdown
          placeholder={PlaceholderText.DESTINATION}
          setValue={setDestination}
        />
      </Row>
      <Row>
        <FlightTypeRadio type={flightType} setType={setFlightType} />
        <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
        <PassengerInput />
      </Row>
      <Row>
        {flightType === FlightType.ONE_WAY ? (
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
