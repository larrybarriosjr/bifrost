import { InitialFlightData } from "defaults/flight"
import { LocalStorageKey } from "defaults/web"
import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const usePassengers = (): number => {
  const [passengers, setPassengers] = useLocalStorage<number>(
    LocalStorageKey.PASSENGERS,
    0
  )

  useEffect(() => {
    if (!passengers) setPassengers(InitialFlightData.PASSENGERS)
  }, [passengers, setPassengers])

  return passengers
}
