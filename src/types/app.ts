import { GroupTypeBase } from "react-select"

export type ReactSelectCallback<T> = (
  options: readonly (T | GroupTypeBase<T>)[]
) => void

export type ReactSelectReturn<T> =
  | void
  | Promise<readonly (T | GroupTypeBase<T>)[]>
  | undefined
