import { PaymentMethod } from "@stripe/stripe-js"
import { FlightType } from "defaults/flight"
import { AgeGroup, Honorific } from "defaults/passenger"
import { GroupTypeBase } from "react-select"
import { Carrier, Currency, Place, QueryResults, Quote } from "./skyscanner"

export type BookingData = FlightData & {
  email: string
  booker: string
  passengerData: PassengerData[]
  reference: string
  paymentMethod: PaymentMethod
}

export type EmailFormData = {
  booker: string
  carrier_name: string
  currency_code: string
  destination_code: string
  destination_location: string
  destination_terminal: string
  email: string
  flight_date: string
  flight_type: string
  origin_code: string
  origin_location: string
  origin_terminal: string
  passenger_count: number
  passenger_list: string
  payment_method: string
  quote_datetime: string
  reference_code: string
  ticket_price: string
  total_price: string
}

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
  flight: FlightData
  booking: BookingData
}

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
  | void
