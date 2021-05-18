import { createContext, useState } from "react"
import { ReactContextRoutes } from "types/app"
import { QueryRoutes } from "types/skyscanner"

type RoutesProviderProps = {
  children: React.ReactNode
}

export const RoutesContext = createContext<ReactContextRoutes>(undefined!)

export const RoutesProvider = ({ children }: RoutesProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [routes, setRoutes] = useState<QueryRoutes | undefined>(undefined)
  const initialValues = { routes, setRoutes, loading, setLoading }

  return (
    <RoutesContext.Provider value={initialValues}>
      {children}
    </RoutesContext.Provider>
  )
}
