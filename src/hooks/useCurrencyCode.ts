import { FlightDefaults } from "defaults/flight"
import { LocalStorage } from "defaults/web"
import React, { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useCurrencyCode = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [currency, setCurrency] = useLocalStorage<string>(
    LocalStorage.CURRENCY,
    ""
  )

  useEffect(() => {
    if (!currency) setCurrency(FlightDefaults.CURRENCY)
  }, [currency, setCurrency])

  return [currency, setCurrency]
}
