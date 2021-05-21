export enum AgeGroup {
  ADULT = "adult",
  CHILD = "child",
  INFANT = "infant"
}

export enum AgeGroupDisplay {
  ADULT = "Adult (Above 12 years old)",
  CHILD = "Child (2-12 years old)",
  INFANT = "Infant (0-1 year old )"
}

export enum DateFormat {
  DISPLAY = "dd MMMM y",
  META = "yyyy-MM-dd"
}

export enum FlightDefaults {
  CURRENCY = "USD",
  LOCALE = "en-US",
  PASSENGERS = 1,
  RESULTS = 0
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
  DESTINATION = "Select Destination...",
  NO_RESULT = "There is no flight available. Please try different settings.",
  ORIGIN = "Select Origin...",
  RESULTS = "Please fill in the inputs and search for a flight.",
  RETURN = "Return Date"
}
