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
  OriginId: number
  DestinationId: number
  DepartureDate: string
}

export type Quote = {
  QuoteId: number
  MinPrice: number
  Direct: boolean
  OutboundLeg: FlightLeg
  InboundLeg: FlightLeg
  QuoteDateTime: string
}

export type Carrier = {
  CarrierId: number
  Name: string
}

export type Place = {
  Name: string
  Type: string
  PlaceId: number
  IataCode: string
  SkyscannerCode: string
  CityName: string
  CityId: string
  CountryName: string
}

export type Route = {
  Price: number
  QuoteDateTime: string
  OriginId: number
  DestinationId: number
  QuoteIds: number[]
}

export type QueryPlace = {
  PlaceId: string
  PlaceName: string
  CountryId: string
  RegionId: string
  CityId: string
  CountryName: string
}

export type Countries = { Countries: Country[] }
export type Currencies = { Currencies: Currency[] }
export type Quotes = { Quotes: Quote[] }
export type Carriers = { Carriers: Carrier[] }
export type Places = { Places: Place[] }
export type Routes = { Routes: Route[] }

export type QueryPlaces = { Places: QueryPlace[] }
export type QueryRoutes = Quotes & Carriers & Places & Currencies & Routes

export type GetRoutesForm = {
  origin: QueryPlace["PlaceId"]
  destination: QueryPlace["PlaceId"]
  outward_date: string
  return_date?: string
  country: Country["Code"]
  currency: Currency["Code"]
}
