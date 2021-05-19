import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {
  API_URL,
  PLACES_URL,
  RAPIDAPI_HOST,
  RAPIDAPI_KEY,
  REFERENCE_URL,
  ROUTES_URL
} from "defaults/env"
import { FlightDefaults } from "defaults/flight"
import {
  Countries,
  Currencies,
  GetPlacesForm,
  GetRoutesForm,
  QueryPlaces,
  QueryRoutes
} from "types/skyscanner"

const { LOCALE } = FlightDefaults

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "x-rapidapi-key": RAPIDAPI_KEY,
    "x-rapidapi-host": RAPIDAPI_HOST
  }
}

const instance = axios.create(config)

const get = async <T>(url: string) => {
  const { data }: AxiosResponse<T> = await instance.get(url)
  return data
}

export const getCountries = async () => {
  const url = `${REFERENCE_URL}/countries/${LOCALE}`
  const data = await get<Countries>(url)
  return data.Countries
}

export const getCurrencies = async () => {
  const url = `${REFERENCE_URL}/currencies`
  const data = await get<Currencies>(url)
  return data.Currencies
}

export const getPlaces = async (form: GetPlacesForm) => {
  const { query, country, currency } = form
  const url = `${PLACES_URL}/${country}/${currency}/${LOCALE}/?query=${query}`
  const data = await get<QueryPlaces>(url)
  return data.Places
}

export const getRoutes = async (form: GetRoutesForm) => {
  const {
    origin,
    destination,
    outward_date,
    return_date = "",
    country,
    currency
  } = form
  const url = `${ROUTES_URL}/${country}/${currency}/${LOCALE}/${origin}/${destination}/${outward_date}/${return_date}`
  return await get<QueryRoutes>(url)
}
