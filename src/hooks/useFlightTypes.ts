import { InputValue } from "types/app"

export const useFlightTypes = (): InputValue<string>[] => {
  return [
    { value: "one-way", label: "One-Way" },
    { value: "round-trip", label: "Round Trip" }
  ]
}
