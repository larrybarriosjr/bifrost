import { RoutesContext } from "context/RoutesContext"
import { useContext } from "react"
import { ReactContextResults } from "types/app"

export const useResults = (): ReactContextResults => {
  return useContext(RoutesContext)
}
