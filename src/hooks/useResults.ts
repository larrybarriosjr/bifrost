import { ReactQueryKey } from "defaults/lib"
import { useQuery, UseQueryResult } from "react-query"
import { getResults } from "services/skyscanner"
import { GetResultsForm, QueryResults } from "types/skyscanner"

export const useResults = (
  form?: GetResultsForm
): UseQueryResult<QueryResults | undefined> => {
  return useQuery<QueryResults>(
    ReactQueryKey.RESULTS,
    form ? () => getResults(form) : undefined!
  )
}
