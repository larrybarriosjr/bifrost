import { FlightDefaults } from "defaults/flight"
import { LocalStorage } from "defaults/web"
import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useCurrencyCode = (): string => {
  const [currency, setCurrency] = useLocalStorage<string>(
    LocalStorage.CURRENCY,
    ""
  )

  useEffect(() => {
    if (!currency) setCurrency(FlightDefaults.CURRENCY)
  }, [currency, setCurrency])

  return currency
}
