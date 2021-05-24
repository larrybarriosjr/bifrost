import Col from "containers/Col"
import Row from "containers/Row"
import Section from "containers/Section"
import { FlightData } from "types/app"
import { monetize } from "utils/number"
import { pluralize } from "utils/string"

type TotalPriceProps = {
  data: FlightData
}

const TotalPrice = ({ data }: TotalPriceProps) => {
  const { item, passengers, currency } = data

  return (
    <Section>
      <Row>
        <p className="text-blue-900 font-bold">Total Price</p>
      </Row>
      <Row>
        <Col w="1/2">
          <p className="text-blue-900 text-sm self-start -mt-2 mb-1">
            {monetize(item.MinPrice, currency) + " × " + passengers}{" "}
            {pluralize("passenger", passengers)}
          </p>
          <p className="text-blue-900 font-bold text-4xl whitespace-nowrap self-start">
            {monetize(item.MinPrice * passengers, currency)}
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default TotalPrice
