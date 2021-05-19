import axios, { AxiosResponse } from "axios"
import { GEOLOCATION_URL } from "defaults/env"
import { GeoLocation } from "types/geolocation"

export const getCountryCode = async () => {
  const { data }: AxiosResponse<GeoLocation> = await axios.get(GEOLOCATION_URL)
  return data.countryCode
}
