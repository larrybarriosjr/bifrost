import Col from "containers/Col"
import { usePassengers } from "hooks/usePassengers"
import { useResults } from "hooks/useResults"
import { Quote } from "types/skyscanner"
import { monetize } from "utils/number"
import BookNowButton from "./BookNowButton"

type FlightPriceProps = {
  item: Quote
}

const FlightPrice = ({ item }: FlightPriceProps) => {
  const passengers = usePassengers()
  const { currencies } = useResults()

  return (
    <Col w="2/12">
      {passengers > 1 ? (
        <p className="mr-2 text-sm">
          {monetize(item.MinPrice, currencies[0])} × {passengers}
        </p>
      ) : null}
      <p className="font-bold text-2xl mb-2 mr-2 whitespace-nowrap">
        {monetize(item.MinPrice * passengers, currencies[0])}
      </p>
      <BookNowButton />
    </Col>
  )
}

export default FlightPrice
