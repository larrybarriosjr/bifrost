import { RoutesContext } from "context/RoutesContext"
import { useContext } from "react"
import { ReactContextRoutes } from "types/app"

export const useRoutes = (): ReactContextRoutes => {
  return useContext(RoutesContext)
}
