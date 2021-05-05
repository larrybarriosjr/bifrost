import axios, { AxiosResponse } from "axios"
import { GeoLocation } from "types/geolocation"

const GEOLOCATION_URL = process.env.REACT_APP_GEOLOCATION_URL

export const getCountryCode = async () => {
  const { data }: AxiosResponse<GeoLocation> = await axios.get(GEOLOCATION_URL)
  return data.countryCode
}
