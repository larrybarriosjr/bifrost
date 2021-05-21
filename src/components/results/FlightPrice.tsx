import { usePassengers } from "hooks/usePassengers"
import { Fragment } from "react"
import { Currency, Quote } from "types/skyscanner"
import { monetize } from "utils/number"

type FlightPriceProps = {
  item: Quote
  currency?: Currency
  booking?: boolean
}

const FlightPrice = ({ item, currency, booking }: FlightPriceProps) => {
  const passengers = usePassengers()

  if (!currency) return null

  return (
    <Fragment>
      <p className="mr-2 text-sm">
        {passengers > 1 && !booking
          ? monetize(item.MinPrice, currency) + " × " + { passengers }
          : "Ticket Price"}
      </p>
      <p className="font-bold text-2xl mr-2 whitespace-nowrap">
        {monetize(item.MinPrice * (booking ? 1 : passengers), currency)}
      </p>
    </Fragment>
  )
}

export default FlightPrice
