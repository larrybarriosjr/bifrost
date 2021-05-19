import { FlightDefaults } from "defaults/flight"
import { LocalStorage } from "defaults/web"
import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const usePassengers = (): number => {
  const [passengers, setPassengers] = useLocalStorage<number>(
    LocalStorage.PASSENGERS,
    0
  )

  useEffect(() => {
    if (!passengers) setPassengers(FlightDefaults.PASSENGERS)
  }, [passengers, setPassengers])

  return passengers
}
