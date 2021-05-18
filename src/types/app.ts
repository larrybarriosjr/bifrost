import { GroupTypeBase } from "react-select"

export type InputValue<T> = {
  label: string
  value: T
}

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
  | void
