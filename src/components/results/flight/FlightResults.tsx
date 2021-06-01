import SectionTitle from "components/common/SectionTitle"
import Row from "containers/Row"
import Section from "containers/Section"
import { LoadingText, PlaceholderText } from "defaults/flight"
import { useResults } from "hooks/useResults"
import { pluralize } from "utils/string"
import ResultText from "./ResultText"
import RouteItem from "./RouteItem"

const FlightResults = () => {
  const { data, isFetching } = useResults()

  if (isFetching) {
    return <ResultText>{LoadingText.RESULTS}</ResultText>
  }

  if (!data?.Quotes) {
    return <ResultText>{PlaceholderText.RESULTS}</ResultText>
  }

  if (!data.Quotes.length) {
    return <ResultText>{PlaceholderText.NO_RESULT}</ResultText>
  }

  const amount = data.Quotes.length

  return (
    <Section>
      <Row>
        <SectionTitle text={pluralize("Result", amount) + ` (${amount})`} />
      </Row>
      {data.Quotes.map(item => (
        <RouteItem key={item.QuoteId} item={item} />
      ))}
    </Section>
  )
}

export default FlightResults
