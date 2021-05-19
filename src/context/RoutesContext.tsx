import { createContext, useState } from "react"
import { ReactContextResults } from "types/app"
import { QueryRoutes } from "types/skyscanner"

type RoutesProviderProps = {
  children: React.ReactNode
}

export const RoutesContext = createContext<ReactContextResults>(undefined!)

export const RoutesProvider = ({ children }: RoutesProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<QueryRoutes>(undefined!)
  const initialValues = {
    loading,
    carriers: results?.Carriers,
    currencies: results?.Currencies,
    places: results?.Places,
    quotes: results?.Quotes,
    routes: results?.Routes,
    setLoading,
    setResults
  }

  return (
    <RoutesContext.Provider value={initialValues}>
      {children}
    </RoutesContext.Provider>
  )
}
