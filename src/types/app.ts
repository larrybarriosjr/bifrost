import { GroupTypeBase } from "react-select"
import { QueryRoutes } from "./skyscanner"

export type InputValue<T> = {
  label: string
  value: T
}

export type ReactContextResults = {
  carriers: QueryRoutes["Carriers"]
  currencies: QueryRoutes["Currencies"]
  loading: boolean
  places: QueryRoutes["Places"]
  quotes: QueryRoutes["Quotes"]
  routes: QueryRoutes["Routes"]
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setResults: React.Dispatch<React.SetStateAction<QueryRoutes>>
}

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
  | void
