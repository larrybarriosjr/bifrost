import { LocalStorage } from "defaults/web"
import { useEffect } from "react"
import { getCountryCode } from "services/geolocation"
import { useLocalStorage } from "./useLocalStorage"

export const useCountryCode = (): string => {
  const [country, setCountry] = useLocalStorage<string>(
    LocalStorage.COUNTRY,
    ""
  )

  useEffect(() => {
    const fetchCountryCode = async () => {
      const data = await getCountryCode()
      setCountry(data)
    }

    if (!country) fetchCountryCode()
  }, [country, setCountry])

  return country
}
