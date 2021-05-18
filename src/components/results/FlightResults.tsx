import FormRow from "containers/FormRow"
import Section from "containers/Section"
import { useRoutes } from "hooks/useRoutes"
import ResultCount from "./ResultCount"

const FlightResults = () => {
  const { routes, loading } = useRoutes()

  if (!routes) return null
  if (loading) return <p className="text-blue-900">Loading results...</p>

  const { Quotes } = routes

  return (
    <Section>
      <FormRow>
        <ResultCount amount={Quotes.length} />
      </FormRow>
    </Section>
  )
}

export default FlightResults
