import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {
  Countries,
  Currencies,
  QueryPlaces,
  QueryRoutes,
  GetRoutesForm,
  GetPlacesForm
} from "types/skyscanner"

const LOCALE = "en-US"

const API_URL = process.env.REACT_APP_SKYSCANNER_API_URL
const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY
const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST

const REFERENCE_URL = process.env.REACT_APP_SKYSCANNER_REFERENCE_URL
const PLACES_URL = process.env.REACT_APP_SKYSCANNER_PLACES_URL
const ROUTES_URL = process.env.REACT_APP_SKYSCANNER_ROUTES_URL

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
  const { country, currency, query } = form
  const url = `${PLACES_URL}/${country}/${currency}/${LOCALE}/?query=${query}`
  const data = await get<QueryPlaces>(url)
  return data.Places
}

export const getRoutes = async (form: GetRoutesForm) => {
  const {
    country,
    currency,
    origin,
    destination,
    outward_date,
    return_date = ""
  } = form
  const url = `${ROUTES_URL}/${country}/${currency}/${LOCALE}/${origin}/${destination}/${outward_date}/${return_date}`
  return await get<QueryRoutes>(url)
}
