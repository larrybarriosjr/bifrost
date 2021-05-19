import Row from "containers/Row"
import Section from "containers/Section"
import { useResults } from "hooks/useResults"
import ResultCount from "./ResultCount"

const FlightResults = () => {
  const { quotes, loading } = useResults()

  if (!quotes) return null
  if (loading) return <p className="text-blue-900">Loading results...</p>

  return (
    <Section>
      <Row>
        <ResultCount amount={quotes.length} />
      </Row>
    </Section>
  )
}

export default FlightResults
