export type Carrier = {
  CarrierId: number
  Name: string
}

export type Country = {
  Code: string
  Name: string
}

export type Currency = {
  Code: string
  DecimalDigits: number
  DecimalSeparator: string
  RoundingCoefficient: number
  SpaceBetweenAmountAndSymbol: boolean
  Symbol: string
  SymbolOnLeft: boolean
  ThousandsSeparator: string
}

export type FlightLeg = {
  CarrierIds: number[]
  DepartureDate: string
  DestinationId: number
  OriginId: number
}

export type Place = {
  CityId: string
  CityName: string
  CountryName: string
  IataCode: string
  Name: string
  PlaceId: number
  SkyscannerCode: string
  Type: string
}

export type QueryPlace = {
  CityId: string
  CountryId: string
  CountryName: string
  PlaceId: string
  PlaceName: string
  RegionId: string
}

export type Quote = {
  Direct: boolean
  InboundLeg: FlightLeg
  MinPrice: number
  OutboundLeg: FlightLeg
  QuoteDateTime: string
  QuoteId: number
}

export type Route = {
  DestinationId: number
  OriginId: number
  Price: number
  QuoteDateTime: string
  QuoteIds: number[]
}

export type Carriers = { Carriers: Carrier[] }
export type Countries = { Countries: Country[] }
export type Currencies = { Currencies: Currency[] }
export type Places = { Places: Place[] }
export type QueryPlaces = { Places: QueryPlace[] }
export type Quotes = { Quotes: Quote[] }
export type Routes = { Routes: Route[] }

export type QueryResults = Quotes & Carriers & Places & Currencies & Routes

export type GetPlacesForm = {
  query: string
  country: Country["Code"]
  currency: Currency["Code"]
}

export type GetResultsForm = {
  country: Country["Code"]
  currency: Currency["Code"]
  destination: QueryPlace["PlaceId"]
  origin: QueryPlace["PlaceId"]
  outward_date: string
  return_date?: string
}
