import { FlightType } from "defaults/flight"
import { AgeGroup, Honorific } from "defaults/passenger"
import { GroupTypeBase } from "react-select"
import { Carrier, Currency, Place, QueryResults, Quote } from "./skyscanner"

export type FlightData = {
  item: Quote
  carrier: Carrier
  currency: Currency
  origin: Place
  destination: Place
  passengers: number
}

export type FlightForm = {
  COUNTRY: string
  CURRENCY: string
  LOCALE: string
  PASSENGERS: number
  RESULTS: number
  FLIGHT_TYPE: FlightType
}

export type InputValue<T> = {
  label: string
  value: T
}

export type PassengerData = {
  id: number
  honorific: Honorific
  fullName: string
  ageGroup: AgeGroup
}

export type ReactContextResults = {
  carriers: QueryResults["Carriers"]
  currencies: QueryResults["Currencies"]
  loading: boolean
  places: QueryResults["Places"]
  quotes: QueryResults["Quotes"]
  routes: QueryResults["Routes"]
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setResults: React.Dispatch<React.SetStateAction<QueryResults>>
}

export type ReactRouterState = {
  data: FlightData
}

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
  | void
