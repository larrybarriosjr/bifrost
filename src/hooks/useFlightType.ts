import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useFlightType = (): string => {
  const [flightType, setFlightType] = useLocalStorage<string>("flight-type", "")

  useEffect(() => {
    if (!flightType) setFlightType("one-way")
  }, [flightType, setFlightType])

  return flightType
}
