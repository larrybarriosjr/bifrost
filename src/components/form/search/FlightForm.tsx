import Button from "components/Button"
import CurrencyDropdown from "components/form/search/CurrencyDropdown"
import FlightTypeRadio from "components/form/search/FlightTypeRadio"
import PassengerInput from "components/form/search/PassengerInput"
import PlaceDropdown from "components/form/search/PlaceDropdown"
import RangeDatePicker from "components/form/search/RangeDatePicker"
import SingleDatePicker from "components/form/search/SingleDatePicker"
import Col from "containers/Col"
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
        <Col className="w-1/2">
          <PlaceDropdown
            label="Origin"
            placeholder={PlaceholderText.ORIGIN}
            setValue={setOrigin}
            autoFocus
          />
        </Col>
        <Col className="w-1/2">
          <PlaceDropdown
            label="Destination"
            placeholder={PlaceholderText.DESTINATION}
            setValue={setDestination}
          />
        </Col>
      </Row>
      <Row>
        <Col className="w-2/4">
          <FlightTypeRadio type={flightType} setType={setFlightType} />
        </Col>
        <Col className="w-1/4">
          <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
        </Col>
        <Col className="w-1/4">
          <PassengerInput />
        </Col>
      </Row>
      <Row>
        {flightType === FlightType.ONE_WAY ? (
          <Col className="w-1/3">
            <SingleDatePicker date={flightDate} setDate={setFlightDate} />
          </Col>
        ) : (
          <Col className="w-3/4">
            <RangeDatePicker
              from={outwardDate}
              to={returnDate}
              setFrom={setOutwardDate}
              setTo={setReturnDate}
            />
          </Col>
        )}
        <Col className="w-1/4">
          <Button
            text="Search"
            disabled={searchButtonDisabled}
            onClick={handleFlightSearch}
            className="h-full"
          />
        </Col>
      </Row>
    </Section>
  )
}

export default FlightForm
