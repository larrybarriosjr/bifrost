import Row from "containers/Row"
import Section from "containers/Section"
import { LoadingText } from "defaults/flight"
import { useResults } from "hooks/useResults"
import ResultCount from "./ResultCount"

const FlightResults = () => {
  const { quotes, loading } = useResults()

  if (!quotes) return null
  if (loading) return <p className="text-blue-900">{LoadingText.RESULTS}</p>

  return (
    <Section>
      <Row>
        <ResultCount amount={quotes.length} />
      </Row>
    </Section>
  )
}

export default FlightResults
