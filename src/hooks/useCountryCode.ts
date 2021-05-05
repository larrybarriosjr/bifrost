import { useEffect } from "react"
import { getCountryCode } from "services/geolocation"
import { useLocalStorage } from "./useLocalStorage"

export const useCountryCode = () => {
  const [country, setCountry] = useLocalStorage("country", "")

  useEffect(() => {
    const fetchCountryCode = async () => {
      const data = await getCountryCode()
      setCountry(data)
    }

    if (!country) fetchCountryCode()
  }, [country, setCountry])

  return country
}
