import { ReactQueryKey } from "defaults/lib"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { getCurrencies } from "services/skyscanner"
import { Currency } from "types/skyscanner"

export const useCurrencies = (): Currency[] | undefined => {
  const { data, refetch } = useQuery<Currency[]>(
    ReactQueryKey.CURRENCIES,
    getCurrencies
  )

  useEffect(() => {
    if (!data) refetch()
  }, [data, refetch])

  return data
}
