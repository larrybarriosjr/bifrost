import { ResultsContext } from "context/ResultsContext"
import { useContext } from "react"
import { ReactContextResults } from "types/app"

export const useResults = (): ReactContextResults => {
  return useContext(ResultsContext)
}
