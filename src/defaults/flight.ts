import { FlightForm } from "types/app"

export enum DateFormat {
  DISPLAY = "dd MMMM y",
  META = "yyyy-MM-dd"
}

export enum FlightType {
  ONE_WAY = "one-way",
  ROUND_TRIP = "round-trip"
}

export enum FlightTypeDisplay {
  ONE_WAY = "One Way",
  ROUND_TRIP = "Round Trip"
}

export enum LoadingText {
  PLACE = "Searching...",
  RESULTS = "Loading results..."
}

export enum PlaceholderText {
  DEPARTURE = "Departure Date",
  DESTINATION = "Search Destination...",
  NO_RESULT = "There is no flight available. Please try different settings.",
  ORIGIN = "Search Origin...",
  RESULTS = "Please fill in the inputs and search for a flight.",
  RETURN = "Return Date"
}

export const InitialFlightData: FlightForm = {
  COUNTRY: "US",
  CURRENCY: "USD",
  LOCALE: "en-US",
  PASSENGERS: 1,
  RESULTS: 0,
  FLIGHT_TYPE: FlightType.ONE_WAY
}
