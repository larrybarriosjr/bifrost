import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useCurrencyCode = (): string => {
  const [currency, setCurrency] = useLocalStorage<string>("currency", "")

  useEffect(() => {
    if (!currency) setCurrency("USD")
  }, [currency, setCurrency])

  return currency
}
