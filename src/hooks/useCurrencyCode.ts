import { InitialFlightData } from "defaults/flight"
import { LocalStorageKey } from "defaults/web"
import React, { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useCurrencyCode = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [currency, setCurrency] = useLocalStorage<string>(
    LocalStorageKey.CURRENCY,
    ""
  )

  useEffect(() => {
    if (!currency) setCurrency(InitialFlightData.CURRENCY)
  }, [currency, setCurrency])

  return [currency, setCurrency]
}
