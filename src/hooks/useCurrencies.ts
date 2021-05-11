import { useEffect } from "react"
import { useQuery } from "react-query"
import { getCurrencies } from "services/skyscanner"
import { Currency } from "types/skyscanner"

export const useCurrencies = (): Currency[] | undefined => {
  const { data, refetch } = useQuery("currencies", getCurrencies, {
    enabled: false
  })

  useEffect(() => {
    if (!data) refetch()
  }, [data, refetch])

  return data
}
