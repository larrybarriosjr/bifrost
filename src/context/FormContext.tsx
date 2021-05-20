import { createContext, useState } from "react"
import { ReactContextResults } from "types/app"
import { QueryRoutes } from "types/skyscanner"

type FormProviderProps = {
  children: React.ReactNode
}

export const FormContext = createContext<ReactContextResults>(undefined!)

export const FormProvider = ({ children }: FormProviderProps) => {
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
    <FormContext.Provider value={initialValues}>
      {children}
    </FormContext.Provider>
  )
}
