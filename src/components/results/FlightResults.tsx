import Row from "containers/Row"
import Section from "containers/Section"
import { LoadingText, PlaceholderText } from "defaults/flight"
import { useResults } from "hooks/useResults"
import FlightCarrier from "./FlightCarrier"
import FlightPrice from "./FlightPrice"
import FlightRoute from "./FlightRoute"
import ResultCount from "./ResultCount"
import ResultText from "./ResultText"

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
        <div
          key={item.QuoteId}
          className={`flex justify-between items-center p-4 m-6 rounded-3xl
            shadow border border-green-200 bg-green-50 text-blue-900`}
        >
          <FlightRoute item={item} type="origin" />
          <FlightCarrier item={item} />
          <FlightRoute item={item} type="destination" />
          <FlightPrice item={item} />
        </div>
      ))}
    </Section>
  )
}

export default FlightResults
