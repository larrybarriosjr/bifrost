import axios, { AxiosResponse } from "axios"
import { RANDOM_ORG_URL } from "defaults/env"

export const getRandomCharacters = async () => {
  const { data }: AxiosResponse<string> = await axios.get(RANDOM_ORG_URL)
  return data.trim()
}
