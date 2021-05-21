import Row from "containers/Row"
import Section from "containers/Section"
import { LoadingText, PlaceholderText } from "defaults/flight"
import { useResults } from "hooks/useResults"
import ResultCount from "./ResultCount"
import ResultText from "./ResultText"
import RouteItem from "./RouteItem"

const FlightResults = () => {
  const { quotes, loading } = useResults()

  if (loading) {
    return <ResultText>{LoadingText.RESULTS}</ResultText>
  }

  if (!quotes) {
    return <ResultText>{PlaceholderText.RESULTS}</ResultText>
  }

  if (!quotes.length) {
    return <ResultText>{PlaceholderText.NO_RESULT}</ResultText>
  }

  return (
    <Section>
      <Row>
        <ResultCount amount={quotes.length} />
      </Row>
      {quotes.map(item => (
        <RouteItem key={item.QuoteId} item={item} />
      ))}
    </Section>
  )
}

export default FlightResults
