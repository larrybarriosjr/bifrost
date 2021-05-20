import { createContext, useState } from "react"
import { ReactContextResults } from "types/app"
import { QueryRoutes } from "types/skyscanner"

type ResultsProviderProps = {
  children: React.ReactNode
}

export const ResultsContext = createContext<ReactContextResults>(undefined!)

export const ResultsProvider = ({ children }: ResultsProviderProps) => {
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
    <ResultsContext.Provider value={initialValues}>
      {children}
    </ResultsContext.Provider>
  )
}
