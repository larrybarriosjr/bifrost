import { GroupTypeBase } from "react-select"
import { QueryRoutes } from "./skyscanner"

export type InputValue<T> = {
  label: string
  value: T
}

export type ReactContextRoutes = {
  routes: QueryRoutes | undefined
  setRoutes: React.Dispatch<React.SetStateAction<QueryRoutes | undefined>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
  | void
