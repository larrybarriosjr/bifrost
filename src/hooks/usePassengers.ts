import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const usePassengers = (): number => {
  const [passengers, setPassengers] = useLocalStorage<number>("passengers", 0)

  useEffect(() => {
    if (!passengers) setPassengers(1)
  }, [passengers, setPassengers])

  return passengers
}
