import { InitialFlightData } from "defaults/flight"
import { LocalStorageKey } from "defaults/web"
import { useEffect } from "react"
import { getCountryCode } from "services/geolocation"
import { useLocalStorage } from "./useLocalStorage"

export const useCountryCode = (): string => {
  const [country, setCountry] = useLocalStorage<string>(
    LocalStorageKey.COUNTRY,
    ""
  )

  useEffect(() => {
    const fetchCountryCode = async () => {
      const data = await getCountryCode()
      setCountry(data || InitialFlightData.COUNTRY)
    }

    if (!country) fetchCountryCode()
  }, [country, setCountry])

  return country
}
